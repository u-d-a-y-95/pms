import { LineChart } from "@mantine/charts";
import { useGetParkings } from "../../../../hooks/apis/parking";
import { LineChartFormatedData } from "./utils";

function getStartDateOneWeekBack(): Date {
  const now = new Date();
  const oneWeekBack = new Date(now);
  oneWeekBack.setDate(now.getDate() - 7);
  return oneWeekBack;
}

export const ParkedLineChart = () => {
  const { data: parkingRes } = useGetParkings({
    startDate: getStartDateOneWeekBack().toDateString(),
  });
  const grouped = LineChartFormatedData(parkingRes?.data || []);

  return (
    <div className=" col-span-2 rounded-lg shadow-md flex flex-col justify-center items-center p-6 bg-[#edf3fb]">
      <p className="text-lg  text-gray-700 m-0 font-semibold self-start mb-4">
        Last 1 Week
      </p>
      <LineChart
        h={300}
        data={grouped}
        dataKey="date"
        series={[
          { name: "Truck", color: "indigo.6" },
          { name: "Car", color: "blue.6" },
        ]}
        curveType="natural"
        tickLine="xy"
        gridAxis="xy"
      />
    </div>
  );
};
