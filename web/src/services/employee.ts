import { IEmployee } from "../components/pageComponent/main/configuration/employee/index.types";
import { http } from "../utils/http";

export const getEmployees = () => {
  return http.get(`/employee`);
};
export const createEmployee = (store: IEmployee) => {
  return http.post("/employee/create", store);
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
