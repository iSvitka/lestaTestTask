export interface IShipInfo {
    description: string;
    icons: IShipIcons;
    level: number;
    nation: IShipNation;
    title: string;
    type: IShipType;
}

export interface IShipIcons {
    large: string;
    medium: string;
}

export interface IShipNationIcons {
    large: string;
    small: string;
}

export interface IShipTypeIcons {
    default: string;
}

export interface IShipNation {
    color: string;
    icons: IShipNationIcons
    name: INationsNames;
    title: string;
}

export interface IShipType {
    icons: IShipTypeIcons;
    name: IShipTypeNames;
}

export type INationsNames = 'japan' | 'usa' | 'ussr' | 'germany' |
    'uk' |  'france' | 'italy' | 'pan_asia' | 'commonwealth' |
    'pan_america' |'europe' | 'netherlands' | 'spain';
export type IShipTypeNames = 'submarine' | 'destroyer' | 'cruiser' | 'battleship' | 'aircarrier';

export interface IShipsResponse {
    data: {
        vehicles: IShipInfo[];
    };
}

export interface IShipsData {
    ships: IShipInfo[];
    filters: IShipsFilters;
}

export interface IShipsFilters {
    nation?: IShipNation[];
    level?: number[];
    type?: IShipType[];
}