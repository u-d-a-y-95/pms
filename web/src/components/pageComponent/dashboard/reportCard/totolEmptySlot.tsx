import { useGetSpaces } from "../../../../hooks/apis/configuration/space";
import { useGetParkings } from "../../../../hooks/apis/parking";
import { PlainCard } from "../../../base/card/card";

export const TotalEmptySlot = () => {
  const { data } = useGetParkings({
    currentlyParked: 1,
  });
  const { data: spaceRes } = useGetSpaces();
  const totalParked = (data?.data as unknown[])?.length || 0;
  const totalSpace = (spaceRes?.data as any[])?.reduce(
    (acc, item) => acc + item.capacities.reduce((c, i) => c + i.count, 0),
    0
  );
  return (
    <PlainCard
      label={"Total empty slot"}
      value={totalSpace - totalParked || ""}
      bg="#e8d5f6"
    />
  );
};
