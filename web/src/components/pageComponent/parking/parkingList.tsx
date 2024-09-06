import { ActionIcon, LoadingOverlay, Table, Tooltip } from "@mantine/core";
import { IconBrowserCheck, IconTrash } from "@tabler/icons-react";
import { FC, ReactNode } from "react";
import { IParking, ParkingsListProps } from "./index.types";
import dayjs from "dayjs";
import { confirmationModal } from "../../base/confirmationModal";

const { Thead, Tbody, Tr, Th, Td } = Table;

export const ParkingList = ({
  parkings,
  isLoading,
  checkoutParking,
  deleteParking,
}: ParkingsListProps) => {
  const deleteConformation = (id: string) => {
    confirmationModal({
      label:
        "Are you sure you want to delete this? This action can not be undone",
      confirmHandler: () => deleteParking(id),
    });
  };

  const checkoutConformation = (id: string) => {
    confirmationModal({
      label:
        "Are you sure you want to checkout this? This action can not be undone",
      confirmHandler: () => checkoutParking(id),
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
            {parkings?.map(
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
                  charge,
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
                  <Td className=" text-right">{charge}</Td>
                  <Td style={{ width: "200px" }}>
                    <div className="flex justify-center gap-3">
                      <ActionBtn
                        label="checkout"
                        clickHandler={() => checkoutConformation(id)}
                        Icon={<IconBrowserCheck />}
                        disabled={!!exitTime}
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
  disabled?: boolean;
}
const ActionBtn: FC<ActionBtnProps> = ({
  label,
  clickHandler,
  Icon,
  disabled = false,
}: ActionBtnProps) => {
  return (
    <Tooltip label={label} variant="light" color="gray" withArrow>
      <ActionIcon
        size={"sm"}
        onClick={clickHandler}
        variant="outline"
        p="3"
        color="gray"
        disabled={disabled}
      >
        {Icon}
      </ActionIcon>
    </Tooltip>
  );
};
