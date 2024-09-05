export type VehicleTypeListProps = {
  isLoading: boolean;
  vehicleTypes: IVehicleType[];
  deleteCategory: (id: string) => void;
  viewCategoryById: (id: string) => void;
};

export interface IVehicleType {
  id?: string;
  name: string;
  charge: number;
  description?: string;
}
type StateType = "view" | "add" | "edit";
export interface IBaseStoreProps {
  state: StateType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
}
