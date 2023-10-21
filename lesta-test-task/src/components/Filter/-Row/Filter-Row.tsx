import Image from "next/image";
import { IFilterRowProps } from "./Filter-Row.typings";

export default function FilterRow(props: IFilterRowProps) {
    const { icon, text } = props;
    return (
        <li className="cursor-pointer">
            <button className="flex flex-row items-center justify-start w-full pl-2 py-1 gap-1.5 hover:bg-cyan-900">
                {icon &&
                    <Image
                        src={`https:${icon}`}
                        alt="*"
                        width={25}
                        height={25}
                    />
                }
                {text}
            </button>
        </li>
    )
}