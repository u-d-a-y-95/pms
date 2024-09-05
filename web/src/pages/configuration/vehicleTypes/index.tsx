import { VehicleType } from "../../../components/pageComponent/configuration/vehicleType";
import { AddVehicleType } from "../../../components/pageComponent/configuration/vehicleType/addVehicleType";
import { ViewVehicleType } from "../../../components/pageComponent/configuration/vehicleType/viewVehicleType";

export const VehicleTypePage = () => {
  return <VehicleType />;
};

VehicleTypePage.Add = AddVehicleType;
VehicleTypePage.View = ViewVehicleType;
