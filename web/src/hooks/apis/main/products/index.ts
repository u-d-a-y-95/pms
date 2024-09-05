import {
  createItem,
  deleteItem,
  getProductById,
  getProducts,
  newItemEntry,
} from "../../../../services/items";
import { toast } from "../../../../utils/toast";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

export const useCreateProduct = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["product", "create"],
    mutationFn: createItem,
    onSuccess: () => {
      toast.success("New item is created successfully");
      client.invalidateQueries(["products"]);
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
      client.invalidateQueries(["products"]);
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

export const useNewItemEntry = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["product", "new-entry"],
    mutationFn: newItemEntry,
    onSuccess: (res) => {
      toast.success("Product is updated successfully");
      client.invalidateQueries(["products"]);
      client.invalidateQueries(["product", res?.data.id]);
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });
};
