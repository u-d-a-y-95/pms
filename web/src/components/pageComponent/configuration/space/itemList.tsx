import { Table } from "@mantine/core";
import { ActionBtn } from "../../../base/actionBtn";
import { IconTrash } from "@tabler/icons-react";

const { Thead, Tbody, Tr, Th, Td } = Table;

export const ItemList = ({ items, setItems }) => {
  return (
    <Table striped withTableBorder withColumnBorders>
      <Thead>
        <Tr>
          <Th w={50}>#</Th>
          <Th>Name</Th>
          <Th>Count</Th>
          <Th style={{ width: "150px" }}>
            <div className="text-center">Action</div>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {items?.map(
          (
            {
              vehicleTypeId,
              vehicleType,
              count,
            }: Item & { vehicleType: string },
            index: number
          ) => (
            <Tr key={vehicleTypeId}>
              <Td>{index + 1}</Td>
              <Td>{vehicleType}</Td>
              <Td>{count}</Td>
              <Td style={{ width: "200px" }}>
                <div className="flex justify-center gap-3">
                  <ActionBtn
                    label="Delete"
                    clickHandler={() => {
                      const filtered = items.filter(
                        (item) => item.vehicleTypeId != vehicleTypeId
                      );
                      setItems(filtered);
                    }}
                    Icon={<IconTrash />}
                  />
                </div>
              </Td>
            </Tr>
          )
        )}
      </Tbody>
    </Table>
  );
};
