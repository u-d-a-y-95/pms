import { UseFormReturnType } from "@mantine/form";

export type VehicleTypeListProps = {
  loading: boolean;
  vehicleTypes: VehicleType[];
  deleteVehicleType: (id: string) => void;
  viewVacationTypeById: (id: string) => void;
};

export type VehicleType = {
  id?: string;
  name: string;
  charge: number;
  description?: string;
};
type StateType = "view" | "add" | "edit";
export interface IBaseStoreProps {
  state: StateType;
  form?: UseFormReturnType<VehicleType, (values: VehicleType) => VehicleType>;
}
