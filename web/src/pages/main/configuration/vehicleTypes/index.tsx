import { VehicleType } from "../../../../components/pageComponent/main/configuration/vehicleType";
import { AddVehicleType } from "../../../../components/pageComponent/main/configuration/vehicleType/addVehicleType";
import { ViewVehicleType } from "../../../../components/pageComponent/main/configuration/vehicleType/viewVehicleType";

export const VehicleTypePage = () => {
  return (
    <>
      <VehicleType />
    </>
  );
};

VehicleTypePage.Add = AddVehicleType;
VehicleTypePage.View = ViewVehicleType;
