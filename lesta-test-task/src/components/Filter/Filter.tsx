import FilterItem from "./-Item/Filter-Item";
import { IFilterProps } from "./Filter.typings";

export default function Filter(props: IFilterProps) {
    const { level, nation, type } = props;
    return (
        <section className="flex w-full rounded-t-md bg-cyan-950">
            {nation &&
                <FilterItem filters={nation} type="nation"/>
            }
            {type &&
                <FilterItem filters={type} type="type"/>
            }
            {level &&
                <FilterItem filters={level} type="level"/>
            }
        </section>
    )
}