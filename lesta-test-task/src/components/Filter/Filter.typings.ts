import { IFilterReducerAction, IFilterReducerState } from "@/components/ShipsPage/ShipsPage.typings"
import { IShipNation, IShipType } from "@/typings"
import { Dispatch } from "react"

export interface IFilterProps {
    nation?: IShipNation[];
    level?: number[];
    type?: IShipType[];
    dispatchFunc: Dispatch<IFilterReducerAction>;
    activeFilters: IFilterReducerState;
}
