import { Button, NumberInput, Select, Table } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { itemInitialValue, itemSchema } from "./utils";
import { z } from "zod";
import { useGetVehicleTypes } from "../../../../hooks/apis/configuration/vehicleType";
import { ItemList } from "./itemList";

type Item = z.infer<typeof itemSchema>;

export const ItemForm = ({ state, items, setItems }) => {
  const { data: vehicleRes } = useGetVehicleTypes();

  const form = useForm({
    validateInputOnChange: true,
    initialValues: itemInitialValue,
    validate: zodResolver(itemSchema),
  });
  const addItemHandler = () => {
    form.validate();
    if (!form.values.vehicleTypeId) {
      return form.setFieldError("vehicleTypeId", "Vehicle type can't be empty");
    }
    setItems((items) => {
      items.push(form.values);
      return [...items];
    });
    form.reset();
  };

  const vehicleTypes =
    vehicleRes?.data?.map((item) => ({
      ...item,
      value: item.id,
      label: item.name,
    })) || [];

  return (
    <form onReset={form.onReset}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 items-start">
        <Select
          label="Vehicle Type"
          placeholder="Plase enter vehicle type"
          withAsterisk
          {...form?.getInputProps("vehicleTypeId")}
          data={
            items.length
              ? vehicleTypes.filter(
                  (option) =>
                    !items.find((item) => item.vehicleTypeId === option.value)
                )
              : vehicleTypes
          }
          onChange={(v, option) => {
            form?.getInputProps("vehicleTypeId").onChange(v);
            form?.getInputProps("vehicleType").onChange(option.label);
          }}
          disabled={state === "view"}
        />
        <NumberInput
          min={1}
          label="Count"
          placeholder="Plase enter count"
          withAsterisk
          allowNegative={false}
          {...form?.getInputProps("count")}
          onChange={(e) => form?.getInputProps("count").onChange(Number(e))}
          disabled={state === "view"}
        />
        <Button
          className="w-[100px] mt-6"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItemHandler();
          }}
        >
          Add
        </Button>
      </div>

      <div className="my-5">
        <ItemList items={items} setItems={setItems} />
      </div>
    </form>
  );
};
