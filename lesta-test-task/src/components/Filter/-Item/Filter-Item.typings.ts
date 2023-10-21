import { IShipNation, IShipType } from "@/typings";

export type IFilterItemProps = IFilterItemNationProps | IFilterItemLevelProps | IFilterItemTypeProps;

export interface IFilterItemNationProps {
    type: 'nation';
    filters: IShipNation[];
}

export interface IFilterItemLevelProps {
    type: 'level';
    filters: number[];
}

export interface IFilterItemTypeProps {
    type: 'type';
    filters: IShipType[];
}