import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createSpace,
  deleteSpaceById,
  getSpaces,
  updateEmployee,
} from "../../../services/spaces";
import { toast } from "../../../utils/toast";

export const useGetSpaces = (options = {}) => {
  return useQuery({
    queryKey: ["spaces"],
    queryFn: getSpaces,
    ...options,
  });
};

export const useCreateSpace = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["spaces", "create"],
    mutationFn: createSpace,
    onSuccess: () => {
      toast.success("New space is created");
      client.invalidateQueries(["spaces"]);
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });
};

export const useUpdateEmployees = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["employee", "update"],
    mutationFn: updateEmployee,
    onSuccess: (res) => {
      toast.success(res.message);
      client.invalidateQueries(["employees"]);
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });
};

export const useDeleteSpace = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["spaces", "delete"],
    mutationFn: deleteSpaceById,
    onSuccess: () => {
      toast.success("Space is deleted successfully");
      client.invalidateQueries(["spaces"]);
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });
};
