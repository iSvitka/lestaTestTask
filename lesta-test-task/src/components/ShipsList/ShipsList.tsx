import { useCallback, useEffect, useMemo, useState } from "react";
import ShipsListItem from "./-Item/ShipsList-Item";
import { IShipsListProps } from "./ShipsList.typings";
import { getPaginatedShips } from "@/utils/getPaginatedShips";

export default function ShipsList(props: IShipsListProps) {

    const [page, setPage] = useState(1)
    const [shipsToShow, setShipsToShow] = useState(() => getPaginatedShips(props.ships))

    const shipsAmount = useMemo(() => props.ships.length, [props.ships])

    const onButtonMoreClickHandler =() => {
        if((shipsAmount - page * 30 - 30) > 10) {
            setShipsToShow(props.ships.slice(0, (1 + page) * 30));
            setPage(prev => prev + 1);
        } else {
            setShipsToShow(props.ships);
        }
        
    }

    useEffect(() => {
        const newShipsToShow = getPaginatedShips(props.ships)
        setShipsToShow(newShipsToShow);
        
    }, [props.ships])

    return (
        <div className="flex flex-col items-center justify-start gap-4 w-full transition-all">
            {shipsToShow.length ?
                <ul className="grid grid-cols-2 gap-y-0.5 gap-x-1.5 w-full transition-all">
                {shipsToShow.map(ship => (
                    <ShipsListItem 
                        {...ship}
                        key={`ship_${Math.random() * 1e6}`}
                    />
                ))}
                </ul> :
                <span className="flex items-center justify-center text-xl font-semibold">Ships not found</span>
            }
            {shipsAmount - (page * 30) > 10 &&
                <button
                    onClick={onButtonMoreClickHandler}
                    className="transition-all flex items-center justify-center rounded-md bg-cyan-950 px-3.5 py-1.5 text-lg hover:bg-cyan-900"
                >
                    Show more
                </button>}
        </div>
    )
}