import {
  ActionIcon,
  Button,
  NumberInput,
  Select,
  Table,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useGetProducts } from "../../../../hooks/apis/main/products";
import { IProduct } from "./index.types";
import { useState } from "react";
import { IconTrash } from "@tabler/icons-react";
import { useGetEmployees } from "../../../../hooks/apis/main/configuration/employee";
import { useCreateRequisition } from "../../../../hooks/apis/main/requisition";

const schema = z
  .object({
    requisitionById: z.string().min(1, { message: "name can't be empty" }),
  })
  .transform((obj) => obj);

export const AddRequisition = () => {
  const navigate = useNavigate();

  const [selectedItemsList, setSelectedItemsList] = useState([]);
  const { data: itemsData } = useGetProducts();
  const { data: employeeData } = useGetEmployees();

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      itemName: "",
      itemCategoryId: "",
      availableQty: 0,
      description: "",
    },
    validate: zodResolver(schema),
  });

  const { mutateAsync: createMutation } = useCreateRequisition();

  const save = async (values: IProduct) => {
    const payload = {
      requisition: {
        requisitionById: values?.requisitionById,
      },
      details: [
        ...selectedItemsList.map(({ itemId, requiredQty }) => ({
          itemId,
          requiredQty,
        })),
      ],
    };
    const res = await createMutation(payload);
    if ([200, 201].includes(res.status)) {
      form.reset();
    }
  };

  const addNewItem = () => {
    setSelectedItemsList((items) => {
      items.push({
        quantity: 0,
      });
      return [...items];
    });
  };

  const removeItemFromList = (index: number) => {
    selectedItemsList.splice(index, 1);
    setSelectedItemsList([...selectedItemsList]);
  };

  const setValueToSelectItemlist = (
    index: number,
    key: string,
    value: unknown
  ) => {
    selectedItemsList[index][key] = value;
    setSelectedItemsList([...selectedItemsList]);
  };
  const employees = employeeData?.data?.map(({ id, name }) => ({
    value: id,
    label: name,
  }));
  const items = itemsData?.data.map(({ id, itemName, availableQty }) => ({
    value: id,
    label: itemName,
    availableQty,
  }));
  return (
    <>
      <Title order={3} style={{ textTransform: "capitalize" }}>
        Add Requisition
      </Title>
      <form
        className="mt-5"
        onSubmit={form.onSubmit((v: IProduct) => save(v))}
        onReset={form.onReset}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Select
            label="Employee"
            placeholder="Please select a employee"
            withAsterisk
            searchable
            data={employees}
            {...form.getInputProps("requisitionById")}
          />
          <Button
            className="w-[100px] self-end col-span-2 justify-self-end"
            onClick={addNewItem}
          >
            Add Item
          </Button>
        </div>
        <Table withColumnBorders withRowBorders withTableBorder mt={20}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              {/* <Table.Th>Available Qty</Table.Th> */}
              <Table.Th>Quantity</Table.Th>
              <Table.Th>Last Received Amount</Table.Th>
              <Table.Th>Last Received Date</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {selectedItemsList.map((item, index) => (
              <Table.Tr key={index}>
                <Table.Td>
                  <Select
                    placeholder="Please item a category"
                    searchable
                    data={items}
                    onChange={(v) => {
                      setValueToSelectItemlist(index, "itemId", v);
                      // setValueToSelectItemlist(index, "availableQty", item);
                    }}
                  />
                </Table.Td>
                {/* <Table.Td></Table.Td> */}
                <Table.Td>
                  <NumberInput
                    placeholder="Please enter amount"
                    disabled={!item.itemId}
                    value={item?.requiredQty}
                    onChange={(v) => {
                      setValueToSelectItemlist(index, "requiredQty", v);
                    }}
                  />
                </Table.Td>
                <Table.Td></Table.Td>
                <Table.Td></Table.Td>
                <Table.Td>
                  <div className="flex justify-center items-center">
                    <ActionIcon
                      size={"sm"}
                      onClick={() => removeItemFromList(index)}
                      variant="outline"
                      p="3"
                      color="gray"
                    >
                      <IconTrash />
                    </ActionIcon>
                  </div>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>

        <div className="flex justify-end gap-5 mt-10">
          <Button
            variant="outline"
            color="gray"
            onClick={() => navigate(-1)}
            className="w-[100px]"
          >
            Back
          </Button>
          <Button
            variant="outline"
            color="red"
            type="reset"
            className="w-[100px]"
          >
            Reset
          </Button>
          <Button type="submit" className="w-[100px]">
            Request
          </Button>
        </div>
      </form>
    </>
  );
};
