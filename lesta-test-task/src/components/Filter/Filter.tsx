import { memo } from "react";
import FilterItem from "./-Item/Filter-Item";
import { IFilterProps } from "./Filter.typings";

export const Filter = memo(function Filter(props: IFilterProps) {
    const { level, nation, type, dispatchFunc, activeFilters } = props;
    return (
        <section className="relative flex w-full rounded-t-md bg-cyan-950">
            {nation &&
                <FilterItem
                    filters={nation}
                    type="nation"
                    dispatchFunc={dispatchFunc}
                    activeFilters={activeFilters.nation}
                />
            }
            {type &&
                <FilterItem
                    filters={type}
                    type="type"
                    dispatchFunc={dispatchFunc}
                    activeFilters={activeFilters.type}
                />
            }
            {level &&
                <FilterItem
                    filters={level}
                    type="level"
                    dispatchFunc={dispatchFunc}
                    activeFilters={activeFilters.level}
                />
            }
            {!!(activeFilters.level.length || activeFilters.nation.length || activeFilters.type.length) &&
                <button
                    className={"absolute left-[101%] flex items-center justify-center " +
                        "px-3 py-1.5 text-lg bg-cyan-950 hover:bg-cyan-700 w-fit rounded-md"}
                    onClick={() => dispatchFunc({ type: "removeAllFilters" })}
                >
                    Clear filters
                </button>
            }
        </section>
    )
})