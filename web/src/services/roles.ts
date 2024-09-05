import { http } from "../utils/http";

export const getRoles = () => {
  return http.get(`/role`);
};
