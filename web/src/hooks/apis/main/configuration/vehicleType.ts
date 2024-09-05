import {
  createCategory,
  deleteCategory,
  getCategoryById,
  getVehicleTypes,
} from "../../../../services/vehicleTypes";

import { toast } from "../../../../utils/toast";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useGetVehicleTypes = () => {
  return useQuery({
    queryKey: ["types"],
    queryFn: getVehicleTypes,
  });
};

export const useCreateCategory = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["category", "create"],
    mutationFn: createCategory,
    onSuccess: () => {
      toast.success("New Category is created");
      client.invalidateQueries(["categories"]);
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

export const useGetCategoryById = (id: string | null) => {
  return useQuery({
    queryKey: ["category", id],
    queryFn: getCategoryById,
    enabled: !!id,
  });
};
