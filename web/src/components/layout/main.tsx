import { LoadingOverlay } from "@mantine/core";
import { useIsFetching } from "react-query";
import { Outlet } from "react-router-dom";

export const Main = () => {
  const isFetching = useIsFetching();
  return (
    <div className=" relative p-6">
      <LoadingOverlay
        visible={!!isFetching}
        zIndex={1000}
        overlayProps={{ radius: "md", blur: 2 }}
      />
      <Outlet />
    </div>
  );
};
