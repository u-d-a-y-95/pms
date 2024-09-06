import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import SpacePage from "../pages/configuration/spaces";
import { VehicleTypePage } from "../pages/configuration/vehicleTypes";
import ParkingPage from "../pages/parking";
import DashboardPage from "../components/pageComponent/dashboard";

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
            <Route path="add" Component={VehicleTypePage.Add}></Route>
            <Route path="view/:id" Component={VehicleTypePage.View}></Route>
            <Route path="" Component={VehicleTypePage}></Route>
          </Route>
        </Route>
        <Route path="parking">
          <Route path="add" Component={ParkingPage.Add}></Route>
          <Route path="" Component={ParkingPage}></Route>
        </Route>
        <Route path="" Component={DashboardPage}></Route>
      </Route>
    </Routes>
  );
};
