import { NumberInput, Textarea, TextInput } from "@mantine/core";
import { IBaseStoreProps } from "./index.types";

export const VehicleTypeBaseForm = ({ form, state }: IBaseStoreProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <TextInput
          label="Name"
          placeholder="Plase enter name"
          withAsterisk
          {...form?.getInputProps("name")}
          disabled={state === "view"}
        />
        <NumberInput
          min={1}
          label="Charge Amount"
          placeholder="Plase enter charge amount"
          withAsterisk
          allowNegative={false}
          clampBehavior="strict"
          {...form?.getInputProps("charge")}
          onChange={(e) => form?.getInputProps("charge").onChange(Number(e))}
          disabled={state === "view"}
        />
      </div>
      <div className="grid grid-cols-3 gap-5 col-span-3">
        <Textarea
          label="Description"
          placeholder="Plase enter description about the type"
          {...form?.getInputProps("description")}
          disabled={state === "view"}
          rows={5}
        />
      </div>
    </div>
  );
};
