import { LoadingOverlay, Table } from "@mantine/core";
import { IconEye, IconTrash } from "@tabler/icons-react";
import { VehicleType, VehicleTypeListProps } from "./index.types";
import { ActionBtn } from "../../../base/actionBtn";
import { confirmationModal } from "../../../base/confirmationModal";

const { Thead, Tbody, Tr, Th, Td } = Table;

export const VehicleTypeList = ({
  loading,
  vehicleTypes,
  viewVacationTypeById,
  deleteVehicleType,
}: VehicleTypeListProps) => {
  const deleteConformation = (id: string) => {
    confirmationModal({
      label:
        "Are you sure you want to delete this vehicle types ? This action can not be undone",
      confirmHandler: () => deleteVehicleType(id),
    });
  };

  return (
    <>
      <div className="mt-4">
        <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: "lg", blur: 2 }}
        />
        <Table striped withTableBorder withColumnBorders>
          <Thead>
            <Tr>
              <Th w={50}>#</Th>
              <Th>Name</Th>
              <Th style={{ width: "500px" }}>Description</Th>
              <Th>Charge</Th>
              <Th style={{ width: "150px" }}>
                <div className="text-center">Action</div>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {vehicleTypes?.map(
              (
                { id = "", name, charge, description }: VehicleType,
                index: number
              ) => (
                <Tr key={id}>
                  <Td>{index + 1}</Td>
                  <Td>{name}</Td>
                  <Td>{description}</Td>
                  <Td className="text-right">{charge}</Td>
                  <Td style={{ width: "200px" }}>
                    <div className="flex justify-center gap-3">
                      <ActionBtn
                        label="View"
                        clickHandler={() => {
                          viewVacationTypeById(id);
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
