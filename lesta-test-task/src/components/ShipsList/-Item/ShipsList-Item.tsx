import Image from "next/image";
import { IShipsListItemProps } from "./ShipsList-Item.typings";

export default function ShipsListItem(props: IShipsListItemProps) {
    const {
        description,
        icons,
        level,
        nation,
        title,
        type,
    } = props;

    return (
        <li className="cursor-pointer rounded-md">
            <button className="flex flex-row items-center justify-start w-full h-9 rounded-md bg-teal-900 hover:bg-teal-950">
                <div className="flex items-center justify-start w-1/12 h-9 pl-1">
                    <Image src={`https:${nation.icons.small}`} alt={nation.name} width={25} height={25} />
                </div>
                <div className="flex items-center justify-start w-1/12 h-9">
                    <Image src={`https:${type.icons.default}`} alt={type.name} width={25} height={25} />
                </div>
                <span className="flex items-center justify-start w-1/12 text-xs">{`${level} level`}</span>
                <span className="flex items-center justify-end w-9/12 pr-1 text-base font-semibold">{title}</span>
            </button>
        </li>
    )
}