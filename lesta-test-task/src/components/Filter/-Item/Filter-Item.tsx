'use client'

import { useState } from "react";
import { IFilterItemProps } from "./Filter-Item.typings";
import FilterRow from "../-Row/Filter-Row";
import { getCapitalizedWord } from "@/utils/getCapitalizedWord";

export default function FilterItem(props: IFilterItemProps) {
    const { filters, type } = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-full pl-2 py-3.5 select-none"
            onMouseEnter={ () => { setIsHovered(true) } }
            onMouseLeave={ () => { setIsHovered(false) } }
        >
            {getCapitalizedWord(type)}
            {isHovered &&
                <ul className="absolute top-full left-0 w-full rounded-b-md bg-cyan-950 overflow-hidden">
                    {type === 'level' &&
                        filters.map(filter => (
                            <FilterRow
                                text={filter.toString()}
                                key={`filter_${Math.random() * 1e6}`}
                            />
                        ))
                    }
                    {type === 'nation' &&
                        filters.map(filter => (
                            <FilterRow
                                icon={filter.icons.small}
                                text={filter.title}
                                key={`filter_${Math.random() * 1e6}`}
                            />
                        ))
                    }
                    {type === 'type' &&
                        filters.map(filter => (
                            <FilterRow
                                icon={filter.icons.default}
                                text={getCapitalizedWord(filter.name)}
                                key={`filter_${Math.random() * 1e6}`}
                            />
                        ))
                    }
                </ul>
            }
        </div>
        
    )
}