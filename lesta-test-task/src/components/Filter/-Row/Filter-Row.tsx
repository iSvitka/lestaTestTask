import Image from "next/image";
import { IFilterRowProps } from "./Filter-Row.typings";
import { memo, useCallback, useState } from "react";

export const FilterRow = memo(function FilterRow(props: IFilterRowProps) {
    const { icon, text, type, name, dispatchFunc, isDefaultActive } = props;
    const [isActive, setIsActive] = useState(isDefaultActive);

    const addFilterFunc = useCallback(() => {
        switch (type) {
            case 'level':
                dispatchFunc({
                    type: 'addLevelFilter',
                    filter: name,
                })
                break;
            case 'nation':
                dispatchFunc({
                    type: 'addNationFilter',
                    filter: name,
                })
                break;
            case 'type':
                dispatchFunc({
                    type: 'addTypeFilter',
                    filter: name,
                })
            default: break;
        }
    }, [dispatchFunc, name, type])
    const deleteFilterFunc = useCallback(() => {
        switch (type) {
            case 'level':
                dispatchFunc({
                    type: 'removeLevelFilter',
                    filter: name,
                })
                break;
            case 'nation':
                dispatchFunc({
                    type: 'removeNationFilter',
                    filter: name,
                })
                break;
            case 'type':
                dispatchFunc({
                    type: 'removeTypeFilter',
                    filter: name,
                })
            default: break;
        }
    }, [dispatchFunc, type, name])
    const onClickHandler = useCallback(() => {
        if(isActive) {
            setIsActive(false);
            deleteFilterFunc();
        } else {
            setIsActive(true);
            addFilterFunc();
        }
    }, [isActive, deleteFilterFunc, addFilterFunc])

    return (
        <li className="cursor-pointer">
            <button
                className={(isActive ? 'bg-cyan-600 ': '') + 'transition-all flex flex-row items-center justify-start w-full pl-2 py-1 gap-1.5 hover:bg-cyan-900'}
                onClick={onClickHandler}
            >
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
})