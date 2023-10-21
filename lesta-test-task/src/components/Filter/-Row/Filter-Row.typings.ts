import { IFilterReducerAction } from "@/components/ShipsPage/ShipsPage.typings";
import { Dispatch } from "react";

export type IFilterRowProps = IFilterRowBaseProps & (IFilterRowNationProps | IFilterRowLevelProps | IFilterRowTypeProps);

export interface IFilterRowBaseProps {
    text: string;
    icon?: string;
    dispatchFunc: Dispatch<IFilterReducerAction>;
    isDefaultActive: boolean;
}

export interface IFilterRowNationProps {
    name: string;
    type: 'nation';
}

export interface IFilterRowLevelProps {
    name: number;
    type: 'level';
}

export interface IFilterRowTypeProps {
    name: string;
    type: 'type';
}