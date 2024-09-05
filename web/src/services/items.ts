import { http } from "../utils/http";

export const getParkings = () => {
  return http.get(`/parking`);
};
export const createParking = (item: IProduct) => {
  return http.post("/parking", item);
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
