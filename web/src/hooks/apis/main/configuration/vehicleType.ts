import {
  createVehicleTypes,
  deleteCategory,
  getVehicleTypeById,
  getVehicleTypes,
} from "../../../../services/vehicleTypes";

import { toast } from "../../../../utils/toast";
import { useMutation, useQuery, useQueryClient } from "react-query";

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
    onError: (err: any) => {
      toast.error(err.message);
    },
  });
};

export const useDeleteCategory = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["category", "delete"],
    mutationFn: deleteCategory,
    onSuccess: () => {
      toast.success("Category is deleted successfully");
      client.invalidateQueries(["categories"]);
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });
};

export const useGetVehicleTypeById = (id: string | null) => {
  return useQuery({
    queryKey: ["vehicleTypes", id],
    queryFn: getVehicleTypeById,
    enabled: !!id,
  });
};
