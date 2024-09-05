import { IVehicleType } from "../components/pageComponent/main/configuration/vehicleType/index.types";
import { http } from "../utils/http";

export const getVehicleTypes = () => {
  return http.get(`/types`);
};
export const createVehicleTypes = (store: IVehicleType) => {
  return http.post("/types", store);
};

export const deleteVehicleTypes = (id: string) => {
  return http.delete(`/types/${id}`);
};
export const getVehicleTypeById = ({ queryKey }: any) => {
  const id: string = queryKey[1];
  return http.get(`/types/${id}`);
};
