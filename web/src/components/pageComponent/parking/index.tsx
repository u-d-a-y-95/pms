import { ParkingList } from "./parkingList";
import {
  useCheckoutById,
  useDeleteParking,
  useGetParkings,
} from "../../../hooks/apis/parking";
import { PageHeader } from "../../base/pageHeader";
import { IParking } from "./index.types";

export default function Parking() {
  const { data: res, isLoading, isFetching } = useGetParkings();
  const { mutate: deleteMutate } = useDeleteParking();
  const { mutate: checkoutMutate } = useCheckoutById();

  const deleteParking = (id: string) => {
    deleteMutate(id);
  };
  const checkoutParking = (id: string) => {
    checkoutMutate(id);
  };

  const parkings: IParking[] = res?.data || [];

  return (
    <>
      <PageHeader title="Parkings" addBtnPath="./add" />
      <ParkingList
        loading={isLoading || isFetching}
        parkings={parkings}
        deleteParking={deleteParking}
        checkoutParking={checkoutParking}
      />
    </>
  );
}
