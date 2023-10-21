import { IFilterReducerAction } from "@/components/ShipsPage/ShipsPage.typings";
import { IShipNation, IShipType } from "@/typings";
import { Dispatch } from "react";

export type IFilterItemProps = (IFilterItemNationProps | IFilterItemLevelProps | IFilterItemTypeProps) & {
    dispatchFunc: Dispatch<IFilterReducerAction>;
};

export interface IFilterItemNationProps {
    type: 'nation';
    filters: IShipNation[];
    activeFilters: string[];
}

export interface IFilterItemLevelProps {
    type: 'level';
    filters: number[];
    activeFilters: number[];
}

export interface IFilterItemTypeProps {
    type: 'type';
    filters: IShipType[];
    activeFilters: string[];
}