import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export interface IError {
  message: string;
}

interface IResponse {
  status: number;
  message: string;
  data: unknown;
}

axios.interceptors.response.use(
  (res) => {
    const { data } = res;
    return data;
  },
  (err) => {
    return Promise.reject(err.response.data);
  }
);

class Http {
  post(path: string, body: any, option?: any) {
    return axios.post<any, IResponse>(path, body, option);
  }
  put(path: string, body: any, option?: any) {
    return axios.put<any, IResponse>(path, body, option);
  }
  patch(path: string, body: any, option?: any) {
    return axios.patch<any, IResponse>(path, body, option);
  }
  get(path: string, option?: any) {
    return axios.get<any, IResponse>(path, option);
  }
  delete(path: string, option?: any) {
    return axios.delete<any, IResponse>(path, option);
  }
}

export const http = new Http();
