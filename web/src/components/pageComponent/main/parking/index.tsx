import { Button, Title } from "@mantine/core";
import { IconFilter, IconPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteProduct,
  useGetParkings,
} from "../../../../hooks/apis/main/products";
import { IProduct } from "./index.types";
import { ParkingList } from "./parkingList";

export default function Parking() {
  const navigate = useNavigate();

  const { data: res, isLoading, isFetching } = useGetParkings();
  const { mutate: deleteMutate } = useDeleteProduct();

  const deleteProduct = (id: string) => {
    deleteMutate(id);
  };

  const viewProductById = (id: string) => {
    navigate(`./view/${id}`);
  };
  const navigateToEntryProduct = (id: string) => {
    navigate(`./entry/${id}`);
  };

  const products: IProduct[] = res?.data;

  return (
    <>
      <div className="flex justify-between">
        <Title order={3}>Parkings</Title>
        <div className="flex gap-4">
          <Button
            leftSection={<IconPlus size={"1rem"} />}
            color="gray"
            variant="light"
            onClick={() => navigate("./add")}
          >
            Add
          </Button>
          <Button
            leftSection={<IconFilter size={"1rem"} />}
            color="gray"
            variant="light"
          >
            Filter
          </Button>
        </div>
      </div>
      <ParkingList
        products={products}
        isLoading={isLoading || isFetching}
        deleteProduct={deleteProduct}
        viewProductById={viewProductById}
        navigateToEntryProduct={navigateToEntryProduct}
      />
    </>
  );
}
