import { CardProps } from "./index.type";

export const PlainCard = ({ label, value, bg }: CardProps) => {
  return (
    <div
      className="p-6 px-10 rounded-lg shadow-md h-36 flex flex-col justify-center"
      style={{ background: bg }}
    >
      <p className="text-mg  text-gray-700 m-0">{label}</p>
      <p className="text-4xl font-semibold text-gray-900 m-0">{value}</p>
    </div>
  );
};
