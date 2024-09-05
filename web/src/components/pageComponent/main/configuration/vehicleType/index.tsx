import { Title } from "@mantine/core";

import { useNavigate } from "react-router-dom";
import {
  useDeleteCategory,
  useGetVehicleTypes,
} from "../../../../../hooks/apis/main/configuration/vehicleType";
import { VehicleTypeList } from "./vehicleTypeList";

export const VehicleType = () => {
  const navigate = useNavigate();

  const { data: res, isLoading, isFetching } = useGetVehicleTypes();
  const { mutate: deleteMutate } = useDeleteCategory();

  const deleteCategory = (id: string) => {
    deleteMutate(id);
  };

  const viewCategoryById = (id: string) => {
    navigate(`./view/${id}`);
  };

  const vehicleTypes = res?.data || [];

  return (
    <>
      <div className="flex justify-between">
        <Title order={3}>Vehicle Types</Title>
      </div>
      <VehicleTypeList
        vehicleTypes={vehicleTypes}
        isLoading={isLoading || isFetching}
        deleteCategory={deleteCategory}
        viewCategoryById={viewCategoryById}
      />
    </>
  );
};
