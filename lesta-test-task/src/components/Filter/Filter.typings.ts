import { IShipNation, IShipType } from "@/typings"

export interface IFilterProps {
    nation?: IShipNation[]
    level?: number[]
    type?: IShipType[]
}
