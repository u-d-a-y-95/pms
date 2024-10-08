import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createVehicleTypes,
  deleteVehicleTypes,
  getVehicleTypeById,
  getVehicleTypes,
} from "../../../services/vehicleTypes";
import { toast } from "../../../utils/toast";
import { IError } from "../../../utils/http";

export const useGetVehicleTypes = () => {
  return useQuery({
    queryKey: ["vehicleTypes"],
    queryFn: getVehicleTypes,
  });
};

export const useCreateVehicleType = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["vehicleTypes", "create"],
    mutationFn: createVehicleTypes,
    onSuccess: () => {
      toast.success("New Vehicle type is created");
      client.invalidateQueries(["vehicleTypes"]);
    },
    onError: (err: IError) => {
      toast.error(err.message);
    },
  });
};

export const useDeleteVehicleType = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["vehicleTypes", "delete"],
    mutationFn: deleteVehicleTypes,
    onSuccess: () => {
      toast.success("Vehicle type is deleted successfully");
      client.invalidateQueries(["vehicleTypes"]);
    },
    onError: (err: IError) => {
      toast.error(err.message);
    },
  });
};

export const useGetVehicleTypeById = (id: string) => {
  return useQuery({
    queryKey: ["vehicleTypes", id],
    queryFn: getVehicleTypeById,
    enabled: !!id,
  });
};
