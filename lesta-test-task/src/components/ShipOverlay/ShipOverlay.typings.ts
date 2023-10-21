import { IShipInfo } from "@/typings";

export type IShipOverlayProps = IShipInfo & {
    closeOverlayFunc: () => void;
};