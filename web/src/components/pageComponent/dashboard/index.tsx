import { useState } from "react";
import { useGetSpaces } from "../../../hooks/apis/configuration/space";
import { useGetVehicleTypes } from "../../../hooks/apis/configuration/vehicleType";
import { useGetParkings } from "../../../hooks/apis/parking";
import { PlainCard } from "../../base/card/card";
import { PieChart } from "@mantine/charts";
import { LoadingOverlay } from "@mantine/core";

export default function Dashboard() {
  const [date] = useState(new Date());
  const { data: vehicleRes, isLoading, isFetching } = useGetVehicleTypes();
  const { data: parkingRes } = useGetParkings(date.toISOString());
  const { data: spaceRes } = useGetSpaces();

  const totalParked = parkingRes?.data?.filter((item) => !item.exitTime).length;
  const totalSpace = spaceRes?.data?.reduce(
    (acc, item) => acc + item.capacities.reduce((c, i) => c + i.count, 0),
    0
  );

  const totalVehicleTypes = vehicleRes?.data?.length || "";

  return (
    <>
      <LoadingOverlay
        visible={isLoading || isFetching}
        zIndex={1000}
        overlayProps={{ radius: "lg", blur: 2 }}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PlainCard
          label={"Total Parked"}
          value={totalParked || 0}
          bg="#d5eef6"
        />
        <PlainCard
          label={"Total empty slot"}
          value={totalSpace - totalParked || ""}
          bg="#e8d5f6"
        />
        <PlainCard
          label={"Vehicle Types"}
          value={totalVehicleTypes}
          bg="#f6d5d5"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
        <div className="rounded-lg shadow-md flex justify-center items-center p-6 bg-[#edf3fb]">
          <PieChart
            withLabelsLine
            labelsPosition="inside"
            labelsType="percent"
            withLabels
            size={250}
            data={[
              { name: "USA", value: 400, color: "indigo.6" },
              { name: "India", value: 300, color: "yellow.6" },
              { name: "Japan", value: 300, color: "teal.6" },
              { name: "Other", value: 200, color: "gray.6" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
