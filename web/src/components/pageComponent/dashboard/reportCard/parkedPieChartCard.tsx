import { PieChart } from "@mantine/charts";
import { useGetParkings } from "../../../../hooks/apis/parking";

function getRandomHexColor(): string {
  const randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomColor.padStart(6, "0")}`;
}

export const ParkedPieChartCard = () => {
  const { data: parkingRes } = useGetParkings({
    currentlyParked: 1,
  });
  const data =
    parkingRes?.data.reduce((acc, item) => {
      if (!acc[item.vehicleTypeId])
        acc[item.vehicleTypeId] = {
          name: item.vehicleType.name,
          value: 0,
          color: getRandomHexColor(),
        };
      acc[item.vehicleTypeId].value += 1;
      return acc;
    }, {}) || [];

  return (
    <div className="rounded-lg shadow-md flex flex-col items-center p-6 bg-[#edf3fb]">
      <p className="text-lg  text-gray-700 m-0 font-semibold self-start mb-4">
        Curently Parked
      </p>
      <PieChart
        withLabelsLine
        labelsPosition="inside"
        labelsType="percent"
        withLabels
        size={250}
        withTooltip
        tooltipDataSource="segment"
        data={Object.values(data)}
      />
    </div>
  );
};
