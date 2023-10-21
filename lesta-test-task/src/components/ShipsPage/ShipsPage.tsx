'use client'
import { Filter } from "@/components/Filter/Filter";
import ShipsList from "@/components/ShipsList/ShipsList";
import { IShipsPageProps } from "./ShipsPage.typings";
import { useMemo, useReducer } from "react";
import { filtersReducerFunc } from "@/utils/filtersReducerFunc";

const DEFAULT_FILTERS = {
    nation: [],
    level: [],
    type: [],
}

export default function ShipsPage(props: IShipsPageProps) {
    const { shipsData } = props;
    const [filters, dispatchFilters] = useReducer(filtersReducerFunc, DEFAULT_FILTERS)
    
    const ships = useMemo(() => {
        if(!filters.level.length && !filters.nation.length && !filters.type.length) return shipsData.ships;
        return shipsData.ships.filter(ship => {
            if(filters.level.length) {
                if(!filters.level.includes(ship.level)) return false
            } 
            if(filters.nation.length) {
                if(!filters.nation.includes(ship.nation.name)) return false
            } 
            if(filters.type.length) {
                if(!filters.type.includes(ship.type.name)) return false
            }

            return true
        })
    }, [filters, shipsData.ships])

    return (
        <div
            className={'flex flex-col items-start justify-center gap-5 w-9/12'}
        >
            <Filter {...shipsData.filters} dispatchFunc={dispatchFilters} activeFilters={filters}/>
            <ShipsList ships={ships}/>
        </div>
    )
}