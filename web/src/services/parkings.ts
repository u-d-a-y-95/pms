import { GetParkingsQuery } from "../hooks/apis/parking/index.type";
import { http } from "../utils/http";

export const getParkings = (query: GetParkingsQuery) => {
  const path = `/parking?${new URLSearchParams(query)}`;
  return http.get(path);
};
export const createParking = (item: any) => {
  return http.post("/parking", item);
};
export const checkoutParking = (id: string) => {
  return http.patch(`/parking/${id}/checkout`, {});
};

export const deleteParkingById = (id: string) => {
  return http.delete(`/parking/${id}/`);
};
