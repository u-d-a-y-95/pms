import {
  createItem,
  deleteItem,
  getProductById,
  getProducts,
  newItemEntry,
} from "../../../../services/items";
import { createRequisition } from "../../../../services/requisition";
import { toast } from "../../../../utils/toast";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useGetRequisition = () => {
  return useQuery({
    queryKey: ["requisitions"],
    queryFn: getProducts,
  });
};

export const useCreateRequisition = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["requisition", "create"],
    mutationFn: createRequisition,
    onSuccess: () => {
      toast.success("New request is created successfully");
      client.invalidateQueries(["requisitions"]);
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
