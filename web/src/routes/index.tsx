import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import SpacePage from "../pages/main/configuration/spaces";
import { VehicleTypePage } from "../pages/main/configuration/vehicleTypes";
import ParkingPage from "../pages/main/parking";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Layout}>
        <Route path="configuration">
          <Route path="spaces">
            <Route path="view/:id" Component={SpacePage.View}></Route>
            <Route path="" Component={SpacePage}></Route>
          </Route>
          <Route path="vehicle-types">
            <Route path="view/:id" Component={VehicleTypePage.View}></Route>
            <Route path="" Component={VehicleTypePage}></Route>
          </Route>
        </Route>
        <Route path="parking">
          <Route path="add" Component={ParkingPage.Add}></Route>
          <Route path="view/:id" Component={ParkingPage.View}></Route>
          <Route path="entry/:id" Component={ParkingPage.Entry}></Route>
          <Route path="" Component={ParkingPage}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
