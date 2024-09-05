import { IVehicleType } from "../components/pageComponent/configuration/vehicleType/index.types";
import { http } from "../utils/http";

export const getVehicleTypes = () => {
  return http.get(`/types`);
};
export const createVehicleTypes = (types: IVehicleType) => {
  return http.post("/types", types);
};

export const deleteVehicleTypes = (id: string) => {
  return http.delete(`/types/${id}`);
};
export const getVehicleTypeById = ({ queryKey }: { queryKey: string[] }) => {
  const id: string = queryKey[1];
  return http.get(`/types/${id}`);
};
