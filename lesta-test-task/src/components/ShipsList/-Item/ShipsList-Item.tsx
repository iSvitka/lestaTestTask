import Image from "next/image";
import { IShipsListItemProps } from "./ShipsList-Item.typings";
import { useState } from "react";
import { createPortal } from "react-dom";
import ShipOverlay from "@/components/ShipOverlay/ShipOverlay";
import { convertToRomanNum } from "@/utils/convertToRomanNum";

export default function ShipsListItem(props: IShipsListItemProps) {
    const {
        level,
        nation,
        title,
        type,
    } = props;

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const onClickHandler = () => {
        setIsOverlayOpen(prev => !prev)
    }
    const closeOverlayFunc = () => {
        setIsOverlayOpen(false);
    }

    return (
        <li className="cursor-pointer rounded-md">
            <button 
                className="transition-all flex flex-row items-center justify-start w-full h-10 rounded-md bg-teal-900 hover:bg-teal-950"
                onClick={onClickHandler}
            >
                <div className="flex items-center justify-start w-1/12 pl-1">
                    <Image src={`https:${nation.icons.small}`} alt={nation.name} width={35} height={35} />
                </div>
                <div className="flex items-center justify-start w-1/12 pl-1.5">
                    <Image src={`https:${type.icons.default}`} alt={type.name} width={25} height={25} />
                </div>
                <span className="flex items-center justify-start w-2/12 text-xs">{convertToRomanNum(level)}</span>
                <span className="flex items-center justify-end w-8/12 pr-1 text-base font-semibold">{title}</span>
            </button>
            {isOverlayOpen &&
                createPortal(<ShipOverlay {...props} closeOverlayFunc={closeOverlayFunc}/>, document.body)
            }
        </li>
    )
}