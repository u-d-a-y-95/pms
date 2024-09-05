import {
  ActionIcon,
  LoadingOverlay,
  Table,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconCubePlus, IconEye, IconTrash } from "@tabler/icons-react";
import { FC, ReactNode } from "react";
import { modals } from "@mantine/modals";
import { IParking, ProductListProps } from "./index.types";
import dayjs from "dayjs";

const { Thead, Tbody, Tr, Th, Td } = Table;

export const ParkingList: FC<ProductListProps> = ({
  products,
  isLoading,
  viewProductById,
  deleteProduct,
  navigateToEntryProduct,
}: ProductListProps) => {
  const deleteConformation = (id: string) => {
    modals.openConfirmModal({
      title: "Confirmation",
      children: (
        <Text size="sm">
          Are you sure you want to delete this product? This action can not be
          undone
        </Text>
      ),
      centered: true,
      cancelProps: {
        size: "xs",
        variant: "subtle",
      },
      labels: { confirm: "Yes", cancel: "No" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => deleteProduct(id),
    });
  };

  return (
    <>
      <div className="relative mt-4">
        <LoadingOverlay
          visible={isLoading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <Table striped withTableBorder withColumnBorders>
          <Thead>
            <Tr>
              <Th w={50}>#</Th>
              <Th>Name</Th>
              <Th>Phone</Th>
              <Th>Address</Th>
              <Th>License</Th>
              <Th>Vehicle Type</Th>
              <Th>Entry Time</Th>
              <Th>Exit Time</Th>
              <Th>Charge</Th>
              <Th style={{ width: "150px" }}>
                <div className="text-center">Action</div>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {products?.map(
              (
                {
                  id = "",
                  address,
                  license,
                  name,
                  phone,
                  vehicleType,
                  entryTime,
                  exitTime,
                }: IParking,
                index: number
              ) => (
                <Tr key={id}>
                  <Td>{index + 1}</Td>
                  <Td>{name}</Td>
                  <Td>{phone}</Td>
                  <Td>{address}</Td>
                  <Td>{license}</Td>
                  <Td>{vehicleType.name}</Td>
                  <Td>{dayjs(entryTime).format("MMM D, YYYY h:mm A")}</Td>
                  <Td>
                    {exitTime && dayjs(exitTime).format("MMM D, YYYY h:mm A")}
                  </Td>
                  <Td></Td>
                  <Td style={{ width: "200px" }}>
                    <div className="flex justify-center gap-3">
                      <ActionBtn
                        label="View"
                        clickHandler={() => {
                          viewProductById(id);
                        }}
                        Icon={<IconEye />}
                      />
                      <ActionBtn
                        label="New Entry"
                        clickHandler={() => {
                          navigateToEntryProduct(id);
                        }}
                        Icon={<IconCubePlus />}
                      />
                      <ActionBtn
                        label="Delete"
                        clickHandler={() => deleteConformation(id)}
                        Icon={<IconTrash />}
                      />
                    </div>
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </div>
    </>
  );
};
interface ActionBtnProps {
  label: string;
  clickHandler: () => void;
  Icon: ReactNode;
}
const ActionBtn: FC<ActionBtnProps> = ({
  label,
  clickHandler,
  Icon,
}: ActionBtnProps) => {
  return (
    <Tooltip label={label} variant="light" color="gray" withArrow>
      <ActionIcon
        size={"sm"}
        onClick={clickHandler}
        variant="outline"
        p="3"
        color="gray"
      >
        {Icon}
      </ActionIcon>
    </Tooltip>
  );
};
