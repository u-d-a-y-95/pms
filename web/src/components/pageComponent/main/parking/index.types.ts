import { IVehicleType } from "../configuration/vehicleType/index.types";

export interface ProductListProps {
  isLoading: boolean;
  products: IParking[];
  deleteProduct: (id: string) => void;
  viewProductById: (id: string) => void;
  navigateToEntryProduct: (id: string) => void;
}

export interface IParking {
  id?: string;
  name: string;
  phone: string;
  address?: string;
  license: string;
  vehicleType: IVehicleType;
  entryTime: Date;
  exitTime: Date;
}
type StateType = "view" | "add" | "edit";
export interface IBaseStoreProps {
  state: StateType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
}
