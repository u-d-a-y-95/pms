import { useGetParkings } from "../../../../hooks/apis/parking";
import { PlainCard } from "../../../base/card/card";

export const TotalParkedReportCard = () => {
  const { data } = useGetParkings({
    startDate: new Date().toDateString(),
    currentlyParked: false,
  });
  const total = (data?.data as unknown[])?.length || 0;
  return <PlainCard label="Today Total Parked" value={total} bg="#d5eef6" />;
};
