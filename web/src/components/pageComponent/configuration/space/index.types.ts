import { VehicleType } from "../vehicleType/index.types";

export interface StoreListProps {
  isLoading: boolean;
  spaces: ISpace[];
  deleteStore: (id: string) => void;
  viewStoreById: (id: string) => void;
}

export type Capacity = {
  count: number;
  vehicleType: VehicleType;
};

export interface ISpace {
  id?: string;
  name: string;
  capacities: Capacity[];
}
type StateType = "view" | "add" | "edit";
export interface IBaseStoreProps {
  state: StateType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
}
