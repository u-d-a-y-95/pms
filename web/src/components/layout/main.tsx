import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <div className="relative p-6 flex-1">
      <Outlet />
    </div>
  );
};
