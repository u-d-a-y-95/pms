import { http } from "../utils/http";

export const getRequisition = () => {
  return http.get(`/employee`);
};
export const createRequisition = (payload: any) => {
  return http.post("/requisition/create", payload);
};

export const deleteEmployee = (id: string) => {
  return http.delete(`/employee/${id}`);
};

export const assignEmployeeRole = (obj) => {
  return http.post(`/employee-role-mapping/assign-role-v2`, obj);
};
export const getEmployeeById = ({ queryKey }: any) => {
  const id: string = queryKey[1];
  return http.get(`/employee/${id}`);
};
