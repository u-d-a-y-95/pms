import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createParking,
  deleteItem,
  getParkings,
  getProductById,
  newItemEntry,
} from "../../../services/items";
import { toast } from "../../../utils/toast";

export const useGetParkings = () => {
  return useQuery({
    queryKey: ["parkings"],
    queryFn: getParkings,
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

export const useDeleteProduct = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["product", "delete"],
    mutationFn: deleteItem,
    onSuccess: () => {
      toast.success("Product is deleted successfully");
      client.invalidateQueries(["parkings"]);
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });
};

export const useGetProductById = (id: string | null) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: getProductById,
    enabled: !!id,
  });
};
