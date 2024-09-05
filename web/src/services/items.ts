import { IProduct } from "../components/pageComponent/main/products/index.types";
import { http } from "../utils/http";

export const getProducts = () => {
  return http.get(`/item`);
};
export const createItem = (item: IProduct) => {
  return http.post("/item", item);
};

export const deleteItem = (id: string) => {
  return http.delete(`/item/${id}`);
};

export const newItemEntry = ({ id, obj }) => {
  return http.put(`/item/${id}`, obj);
};
export const getProductById = ({ queryKey }: any) => {
  const id: string = queryKey[1];
  return http.get(`/item/${id}`);
};
