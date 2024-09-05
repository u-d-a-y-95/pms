import { ICategory } from "../components/pageComponent/main/configuration/category/index.types";
import { http } from "../utils/http";

export const getVehicleTypes = () => {
  return http.get(`/types`);
};
export const createCategory = (store: ICategory) => {
  return http.post("/item-category", store);
};

export const deleteCategory = (id: string) => {
  return http.delete(`/item-category/${id}`);
};
export const getCategoryById = ({ queryKey }: any) => {
  const id: string = queryKey[1];
  return http.get(`/item-category/${id}`);
};
