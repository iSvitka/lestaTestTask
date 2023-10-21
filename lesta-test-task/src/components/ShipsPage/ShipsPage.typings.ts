import { IShipsData } from "@/typings";

export interface IShipsPageProps {
    shipsData: IShipsData;
}


export interface IFilterReducerState {
    nation: string[],
    level: number[],
    type: string[],
}

export type IFilterReducerAction = IFilterReducerNationAction |
    IFilterReducerLevelAction |
    IFilterReducerTypeAction |
    IFilterReducerRemoveAllAction

export interface IFilterReducerNationAction {
    type: 'addNationFilter' | 'removeNationFilter';
    filter: string;
}

export interface IFilterReducerLevelAction {
    type: 'addLevelFilter' | 'removeLevelFilter';
    filter: number;
}

export interface IFilterReducerTypeAction {
    type: 'addTypeFilter' | 'removeTypeFilter';
    filter: string;
}

export interface IFilterReducerRemoveAllAction {
    type: 'removeAllFilters'
}