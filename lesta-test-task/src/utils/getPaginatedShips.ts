import { IShipInfo } from "@/typings";

export const getPaginatedShips = (ships: IShipInfo[]) => {
    if(ships.length - 30 > 10) {
        return ships.slice(0, 30);
    }
    return ships;
}