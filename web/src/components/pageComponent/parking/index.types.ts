import { VehicleType } from "../configuration/vehicleType/index.types";

export interface ParkingsListProps {
  loading: boolean;
  parkings: IParking[];
  deleteParking: (id: string) => void;
  checkoutParking: (id: string) => void;
}

export interface IParking {
  id?: string;
  name: string;
  phone: string;
  address?: string;
  license: string;
  vehicleType: VehicleType;
  entryTime: Date;
  exitTime: Date;
  charge?: number;
}
type StateType = "view" | "add" | "edit";
export interface IBaseStoreProps {
  state: StateType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
}
