import { http } from "../utils/http";

export const getParkings = (date: string) => {
  let path = "/parking";
  if (date) path += `?date=${date}`;
  return http.get(path);
};
export const createParking = (item) => {
  return http.post("/parking", item);
};
export const checkoutParking = (id: string) => {
  return http.patch(`/parking/${id}/checkout`, {});
};

export const deleteParkingById = (id: string) => {
  return http.delete(`/parking/${id}/`);
};
