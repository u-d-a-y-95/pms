import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  checkoutParking,
  createParking,
  deleteParkingById,
  getParkings,
} from "../../../services/parkings";
import { toast } from "../../../utils/toast";

export const useGetParkings = (date?: string) => {
  return useQuery({
    queryKey: ["parkings", date],
    queryFn: () => getParkings(date || ""),
  });
};

export const useCreateParking = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["parking", "create"],
    mutationFn: createParking,
    onSuccess: () => {
      toast.success("New parking is created successfully");
      client.invalidateQueries(["parkings"]);
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });
};

export const useCheckoutById = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["parking", "checkout"],
    mutationFn: checkoutParking,
    onSuccess: () => {
      toast.success("Checkout is done successfully");
      client.invalidateQueries(["parkings"]);
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });
};

export const useDeleteParking = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["parkings", "delete"],
    mutationFn: deleteParkingById,
    onSuccess: () => {
      toast.success("A item is deleted successfully");
      client.invalidateQueries(["parkings"]);
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });
};
