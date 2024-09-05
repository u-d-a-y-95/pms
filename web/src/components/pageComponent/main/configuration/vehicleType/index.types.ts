import { UseFormReturnType } from "@mantine/form";

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
  form: UseFormReturnType<IVehicleType, (values: IVehicleType) => IVehicleType>;
}
