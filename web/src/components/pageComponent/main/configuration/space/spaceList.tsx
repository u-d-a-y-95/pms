import {
  ActionIcon,
  LoadingOverlay,
  Table,
  Text,
  Tooltip,
} from "@mantine/core";

import { IconEye, IconTrash } from "@tabler/icons-react";
import { FC, ReactNode } from "react";
import { modals } from "@mantine/modals";
import { ISpace, StoreListProps } from "./index.types";

const { Thead, Tbody, Tr, Th, Td } = Table;

export const SpaceList: FC<StoreListProps> = ({
  spaces,
  isLoading,
  viewStoreById,
  deleteStore,
}: StoreListProps) => {
  const deleteConformation = (id: string) => {
    modals.openConfirmModal({
      title: "Confirmation",
      children: (
        <Text size="sm">
          Are you sure you want to delete this space? This action can not be
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
      onConfirm: () => deleteStore(id),
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
              <Th>Capacities</Th>
              <Th style={{ width: "150px" }}>
                <div className="text-center">Action</div>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {spaces?.map(
              ({ id = "", name, capacites }: ISpace, index: number) => (
                <Tr key={id}>
                  <Td>{index + 1}</Td>
                  <Td>{name}</Td>
                  <Td>
                    {capacites
                      .flat()
                      .map((item) => `${item.count} ${item.vehicleType.name} `)
                      .join(" ,")}
                  </Td>
                  <Td style={{ width: "200px" }}>
                    <div className="flex justify-center gap-3">
                      <ActionBtn
                        label="View"
                        clickHandler={() => {
                          viewStoreById(id);
                        }}
                        Icon={<IconEye />}
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
