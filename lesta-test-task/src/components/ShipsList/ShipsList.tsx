import ShipsListItem from "./-Item/ShipsList-Item";
import { IShipsListProps } from "./ShipsList.typings";

export default function ShipsList(props: IShipsListProps) {
    return (
        <ul className="grid grid-cols-2 gap-y-0.5 gap-x-1.5 w-full">
            {props.ships.map(ship => (
                <ShipsListItem 
                    {...ship}
                    key={`ship_${Math.random() * 1e6}`}
                />
            ))}
        </ul>
    )
}