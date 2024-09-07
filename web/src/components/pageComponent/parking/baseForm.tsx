import { Select, Textarea, TextInput } from "@mantine/core";
import { IBaseStoreProps } from "./index.types";
import { useGetSpaces } from "../../../hooks/apis/configuration/space";

export const ParkingBaseForm = ({ form, state }: IBaseStoreProps) => {
  const { data: spaceRes } = useGetSpaces();
  const spaces =
    spaceRes?.data?.map((item: { id: string; name: string }) => ({
      ...item,
      value: item.id,
      label: item.name,
    })) || [];

  const vehicles = spaces?.reduce((acc, item) => {
    acc[item.id] = item.capacities?.map((item) => ({
      value: item.vehicleType.id,
      label: item.vehicleType.name + ` - ${item.count}`,
    }));
    return acc;
  }, {});

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
        <TextInput
          label="Phone number"
          placeholder="Plase enter phone number"
          withAsterisk
          {...form?.getInputProps("phone")}
          disabled={state === "view"}
        />
        <TextInput
          label="License"
          placeholder="Plase enter license number"
          withAsterisk
          {...form?.getInputProps("license")}
          disabled={state === "view"}
        />
        <Select
          label="Space"
          placeholder="Plase enter space"
          withAsterisk
          {...form?.getInputProps("spaceId")}
          data={spaces}
          disabled={state === "view"}
          nothingFoundMessage
          onChange={(value) => {
            form.setFieldValue("spaceId", value);
            form.setFieldValue("vehicleTypeId", null);
          }}
        />
        <Select
          label="Vehicle Type"
          placeholder="Plase enter vehicle type"
          withAsterisk
          {...form?.getInputProps("vehicleTypeId")}
          data={vehicles[form.getValues().spaceId] || []}
          disabled={state === "view" || !form.getValues().spaceId}
        />
      </div>
      <div className="grid grid-cols-3  gap-5">
        <Textarea
          label="Address"
          withAsterisk
          placeholder="Plase enter address"
          {...form?.getInputProps("address")}
          disabled={state === "view"}
        />
      </div>
    </div>
  );
};
