import { IVehicleType } from "../components/pageComponent/main/configuration/vehicleType/index.types";
import { http } from "../utils/http";

export const getVehicleTypes = () => {
  return http.get(`/types`);
};
export const createVehicleTypes = (store: IVehicleType) => {
  return http.post("/types", store);
};

export const deleteCategory = (id: string) => {
  return http.delete(`/item-category/${id}`);
};
export const getVehicleTypeById = ({ queryKey }: any) => {
  const id: string = queryKey[1];
  return http.get(`/types/${id}`);
};
