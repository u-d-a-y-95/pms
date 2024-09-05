import { Button, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { VehicleTypeList } from "./vehicleTypeList";
import { IconFilter, IconPlus } from "@tabler/icons-react";
import {
  useDeleteVehicleType,
  useGetVehicleTypes,
} from "../../../../hooks/apis/configuration/vehicleType";

export const VehicleType = () => {
  const navigate = useNavigate();

  const { data: res, isLoading, isFetching } = useGetVehicleTypes();
  const { mutate: deleteMutate } = useDeleteVehicleType();

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
        <div className="flex gap-4">
          <Button
            leftSection={<IconPlus size={"1rem"} />}
            color="gray"
            variant="light"
            onClick={() => navigate("./add")}
          >
            Add
          </Button>
          <Button
            leftSection={<IconFilter size={"1rem"} />}
            color="gray"
            variant="light"
          >
            Filter
          </Button>
        </div>
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
