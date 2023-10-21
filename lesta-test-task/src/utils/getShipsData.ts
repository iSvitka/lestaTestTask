import { IShipNation, IShipType, IShipsData, IShipsResponse } from "@/typings";

export const getShipsData = async (): Promise<IShipsData> => {
    return fetch('https://vortex.korabli.su/api/graphql/glossary/', {
        method: 'POST',
        mode: "cors",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: "{ vehicles { title description icons { large medium } level type { name title icons { default } } nation { name title color icons { small medium large } } } }"
        }),
        next: {
            revalidate: 3600,
        }
    })
    .then<IShipsResponse>(res => res.json())
    .then<IShipsData>(res => {
        const ships = res.data.vehicles;

        const filtersMap = {
            nation: new Set<string>().add(JSON.stringify(ships[0].nation)),
            level: new Set<number>().add(ships[0].level),
            type: new Set<string>().add(JSON.stringify(ships[0].type))
        };

        ships.forEach((ship, index) => {
            if(!index) return
            filtersMap.nation.add(JSON.stringify(ship.nation))
            filtersMap.level.add(ship.level)
            filtersMap.type.add(JSON.stringify(ship.type))
        })

        return {
            ships,
            filters: {
                nation: Array.from(filtersMap.nation.values()).map<IShipNation>(filter => JSON.parse(filter)).sort((a, b) => a.name.localeCompare(b.name)),
                level: Array.from(filtersMap.level.values()).sort((a, b) => a - b),
                type: Array.from(filtersMap.type.values()).map<IShipType>(filter => JSON.parse(filter)).sort((a, b) => a.name.localeCompare(b.name)),
            },
        };
    });
}
