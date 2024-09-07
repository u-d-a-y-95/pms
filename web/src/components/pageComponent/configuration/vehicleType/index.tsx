import { useNavigate } from "react-router-dom";
import { VehicleTypeList } from "./vehicleTypeList";
import {
  useDeleteVehicleType,
  useGetVehicleTypes,
} from "../../../../hooks/apis/configuration/vehicleType";
import { PageHeader } from "../../../base/pageHeader";

export const VehicleType = () => {
  const navigate = useNavigate();

  const { data: res, isLoading, isFetching } = useGetVehicleTypes();
  const { mutate: deleteMutate } = useDeleteVehicleType();

  const deleteVehicleType = (id: string) => {
    deleteMutate(id);
  };

  const viewVehicleById = (id: string) => {
    navigate(`./view/${id}`);
  };

  const vehicleTypes = res?.data || [];

  return (
    <>
      <PageHeader title="Vehicle Types" addBtnPath="./add" />
      <VehicleTypeList
        loading={isLoading || isFetching}
        vehicleTypes={vehicleTypes}
        deleteVehicleType={deleteVehicleType}
        viewVacationTypeById={viewVehicleById}
      />
    </>
  );
};
