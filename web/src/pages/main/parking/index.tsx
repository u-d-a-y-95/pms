import Parking from "../../../components/pageComponent/main/parking";
import { AddParking } from "../../../components/pageComponent/main/parking/addParking";
import { ViewParking } from "../../../components/pageComponent/main/parking/viewParking";

export default function ParkingPage() {
  return <Parking />;
}

ParkingPage.Add = AddParking;
ParkingPage.View = ViewParking;
