import { useGetVehicleTypes } from "../../../../hooks/apis/configuration/vehicleType";
import { PlainCard } from "../../../base/card/card";

export const VehicleReportCard = () => {
  const { data } = useGetVehicleTypes();
  const total = (data?.data as unknown[])?.length || 0;
  return <PlainCard label={"Vehicle Types"} value={total} bg="#f6d5d5" />;
};
