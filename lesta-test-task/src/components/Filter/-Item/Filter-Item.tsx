'use client'

import { useState } from "react";
import { IFilterItemProps } from "./Filter-Item.typings";
import { FilterRow } from "../-Row/Filter-Row";
import { getCapitalizedWord } from "@/utils/getCapitalizedWord";
import { convertToRomanNum } from "@/utils/convertToRomanNum";

export default function FilterItem(props: IFilterItemProps) {
    const { filters, type, dispatchFunc, activeFilters } = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-full pl-2 py-3.5 select-none"
            onMouseEnter={ () => { setIsHovered(true) } }
            onMouseLeave={ () => { setIsHovered(false) } }
        >
            {getCapitalizedWord(type)}
            <ul className={(isHovered ? 'visible opacity-100 ' : 'invisible opacity-0 ') + "transition-all absolute top-full left-0 w-full rounded-b-md bg-cyan-950 overflow-hidden"}>
                {type === 'level' &&
                    filters.map(filter => (
                        <FilterRow
                            type={type}
                            text={convertToRomanNum(filter)}
                            name={filter}
                            key={`filter_${Math.random() * 1e6}`}
                            dispatchFunc={dispatchFunc}
                            isDefaultActive={activeFilters.includes(filter)}
                        />
                    ))
                }
                {type === 'nation' &&
                    filters.map(filter => (
                        <FilterRow
                            type={type}
                            icon={filter.icons.small}
                            text={filter.title}
                            name={filter.name}
                            key={`filter_${Math.random() * 1e6}`}
                            dispatchFunc={dispatchFunc}
                            isDefaultActive={activeFilters.includes(filter.name)}
                        />
                    ))
                }
                {type === 'type' &&
                    filters.map(filter => (
                        <FilterRow
                            type={type}
                            icon={filter.icons.default}
                            text={getCapitalizedWord(filter.name)}
                            name={filter.name}
                            key={`filter_${Math.random() * 1e6}`}
                            dispatchFunc={dispatchFunc}
                            isDefaultActive={activeFilters.includes(filter.name)}
                        />
                    ))
                }
            </ul>
        </div>
        
    )
}