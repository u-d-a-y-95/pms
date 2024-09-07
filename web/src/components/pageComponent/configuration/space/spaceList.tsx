import { LoadingOverlay, Table } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { ISpace, SpaceListProps } from "./index.types";
import { ActionBtn } from "../../../base/actionBtn";
import { confirmationModal } from "../../../base/confirmationModal";

const { Thead, Tbody, Tr, Th, Td } = Table;

export const SpaceList = ({ spaces, loading, deleteStore }: SpaceListProps) => {
  const deleteConformation = (id: string) => {
    confirmationModal({
      label:
        "Are you sure you want to delete this space? This action can not be undone",
      confirmHandler: () => deleteStore(id),
    });
  };

  return (
    <>
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: "lg", blur: 2 }}
      />
      <div className="mt-4">
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
              ({ id = "", name, capacities }: ISpace, index: number) => (
                <Tr key={id}>
                  <Td>{index + 1}</Td>
                  <Td>{name}</Td>
                  <Td>
                    {capacities
                      .map((item) => `${item.count} ${item.vehicleType.name}`)
                      .join(", ")}
                  </Td>
                  <Td style={{ width: "200px" }}>
                    <div className="flex justify-center gap-3">
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
