import { VehicleType } from "../../../../components/pageComponent/main/configuration/vehicleType";
import { VehicleTypeList } from "../../../../components/pageComponent/main/configuration/vehicleType/vehicleTypeList";

export const VehicleTypePage = () => {
  return (
    <>
      <VehicleType />
    </>
  );
};

VehicleTypePage.View = VehicleTypeList;
