import Parking from "../../components/pageComponent/parking";
import { AddParking } from "../../components/pageComponent/parking/addParking";
import { ViewParking } from "../../components/pageComponent/parking/viewParking";

export default function ParkingPage() {
  return <Parking />;
}

ParkingPage.Add = AddParking;
ParkingPage.View = ViewParking;
