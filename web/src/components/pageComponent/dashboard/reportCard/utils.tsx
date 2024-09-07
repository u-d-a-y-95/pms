export const LineChartFormatedData = (data: any[]) => {
  const dateMap: { [key: string]: { [key: string]: number } } = {};
  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  data.forEach((item) => {
    const entryDate = new Date(item.entryTime);
    const formattedDate = formatDate(entryDate);
    const vehicleTypeName = item.vehicleType.name;

    if (!dateMap[formattedDate]) {
      dateMap[formattedDate] = { date: formattedDate };
    }

    if (!dateMap[formattedDate][vehicleTypeName]) {
      dateMap[formattedDate][vehicleTypeName] = 0;
    }

    dateMap[formattedDate][vehicleTypeName] += 1;
  });
  return Object.keys(dateMap).map((key) => ({
    ...dateMap[key],
  }));
};
