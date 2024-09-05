export const PlainCard = ({ label, value }) => {
  return (
    <div className="p-4 bg-[--mantine-color-blue-light] rounded-lg shadow-md">
      <h5 className="text-lg font-bold  text-gray-700">{label}</h5>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
};
