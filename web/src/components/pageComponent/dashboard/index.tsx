import { LoadingOverlay } from "@mantine/core";
import { VehicleReportCard } from "./reportCard/vehicleReportCard";
import { useIsFetching } from "react-query";
import { ParkedPieChartCard } from "./reportCard/parkedPieChartCard";
import { TotalParkedReportCard } from "./reportCard/totalParkedReportCard";
import { TotalEmptySlot } from "./reportCard/totolEmptySlot";
import { ParkedLineChart } from "./reportCard/parkedLineChart";

export default function Dashboard() {
  const isFetching = useIsFetching();

  return (
    <>
      <LoadingOverlay
        visible={!!isFetching}
        zIndex={1000}
        overlayProps={{ radius: "lg", blur: 2 }}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TotalParkedReportCard />
        <TotalEmptySlot />
        <VehicleReportCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
        <ParkedPieChartCard />
        <ParkedLineChart />
      </div>
    </>
  );
}
