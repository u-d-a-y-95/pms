import { VehicleType } from "../../../../components/pageComponent/main/configuration/vehicleType";
import { AddVehicleType } from "../../../../components/pageComponent/main/configuration/vehicleType/addVehicleType";
import { VehicleTypeList } from "../../../../components/pageComponent/main/configuration/vehicleType/vehicleTypeList";

export const VehicleTypePage = () => {
  return (
    <>
      <VehicleType />
    </>
  );
};

VehicleTypePage.Add = AddVehicleType;
VehicleTypePage.View = VehicleTypeList;
