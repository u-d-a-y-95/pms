import { http } from "../utils/http";

export const getSpaces = () => {
  return http.get(`/spaces`);
};
export const createSpace = (space) => {
  return http.post("/spaces", space);
};

export const updateEmployee = ({ id, employee }: any) => {
  return http.put(`/org/employees/${id}`, employee);
};

export const deleteSpaceById = (id: string) => {
  return http.delete(`/spaces/${id}`);
};
export const getStoreById = ({ queryKey }: any) => {
  const id: string = queryKey[1];
  return http.get(`/store/${id}`);
};
