import Image from "next/image";
import { IShipOverlayProps } from "./ShipOverlay.typings";
import { getCapitalizedWord } from "@/utils/getCapitalizedWord";
import { convertToRomanNum } from "@/utils/convertToRomanNum";
import { useState } from "react";

export default function ShipOverlay(props: IShipOverlayProps) {
    const {
        description,
        icons,
        level,
        nation,
        title,
        type,
        closeOverlayFunc
    } = props;
    document.body.style.overflowY = 'hidden';

    const [isClosing, setIsClosing] = useState(false);

    const onButtonCloseClick = () => {
        setIsClosing(true)
        setTimeout(() => {
            document.body.style.overflowY = 'auto';
            closeOverlayFunc()
        }, 250)
    }

    return (
        <section
            className={'fixed w-full min-h-fit h-full '+
                "bg-cyan-800/70 " +
                "flex items-start justify-center overflow-auto animate-slideIn py-10 " +
                (isClosing ? 'animate-slideOut' : '')
            }
        >
            <div
                className={"flex flex-col items-start justify-center gap-10 " +
                    "w-10/12 px-10 py-10 bg-cyan-950 rounded-md mt-[5vh]"
                }
            >
                <div className="flex flex-row items-center justify-between w-full flex-wrap gap-y-24">
                    <Image
                        className={"flex items-center justify-center rounded-md " +
                            "bg-cyan-900"
                        }
                        src={`https:${icons.large}`}
                        alt={`${title}_image`}
                        width={425}
                        height={250}
                    />
                    <div className="relative flex items-center justify-end gap-2 px-2 text-4xl font-semibold border-b-2 border-cyan-700">
                        <Image className="absolute flex items-center justify-center z-0 opacity-50 left-0 bottom-2/3" src={`https:${nation.icons.large}`} alt={`${nation.name}_icon`} width={144} height={90}/>
                        <span className="flex items-center justify-center z-10">{convertToRomanNum(level)}</span>
                        <Image className="flex items-center justify-center z-10" src={`https:${type.icons.default}`} alt={`${type.name}_icon`} width={27} height={27}/>
                        <span className="flex items-center justify-center z-10">{title}</span>
                    </div>
                </div>
                <div className="flex flex-row items-start justify-between flex-wrap gap-y-10">
                    <div className="flex flex-col items-start justify-start gap-2 w-full text-2xl">
                        <span className="flex items-center justify-center gap-2">Title:<span className="font-semibold">{title}</span></span>
                        <span className="flex items-center justify-center gap-2">Nation:<span className='font-semibold'>{nation.title}</span></span>
                        <span className="flex items-center justify-center gap-2">Level:<span className="font-semibold">{convertToRomanNum(level)}</span></span>
                        <span className="flex items-center justify-center gap-2">Type:<span className="font-semibold">{getCapitalizedWord(type.name)}</span></span>
                    </div>
                    <div className="flex flex-col items-end justify-start gap-2 w-full text-2xl">
                        <p className="flex items-center justify-center">{description}</p>
                    </div>
                </div>
            </div>
            <button
                className="transition-all absolute top-3 right-3 rounded-full bg-cyan-950 w-12 h-12 hover:bg-cyan-900"
                onClick={onButtonCloseClick}
            >
                X
            </button>
        </section>
    )
}