import { Select, Textarea, TextInput } from "@mantine/core";
import { IBaseStoreProps } from "./index.types";
import { useGetVehicleTypes } from "../../../../hooks/apis/main/configuration/vehicleType";
import { useGetSpaces } from "../../../../hooks/apis/main/configuration/space";

export const ParkingBaseForm = ({ form, state }: IBaseStoreProps) => {
  const { data: vehicleRes } = useGetVehicleTypes();
  const { data: spaceRes } = useGetSpaces();
  const vehicleTypes =
    vehicleRes?.data?.map((item) => ({
      ...item,
      value: item.id,
      label: item.name,
    })) || [];
  const spaces =
    spaceRes?.data?.map((item) => ({
      ...item,
      value: item.id,
      label: item.name,
    })) || [];

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
          label="Vehicle Type"
          placeholder="Plase enter vehicle type"
          withAsterisk
          {...form?.getInputProps("vehicleTypeId")}
          data={vehicleTypes}
          disabled={state === "view"}
        />
        <Select
          label="Space"
          placeholder="Plase enter space"
          withAsterisk
          {...form?.getInputProps("spaceId")}
          data={spaces}
          disabled={state === "view"}
        />
      </div>
      <div className="grid grid-cols-3  gap-5">
        <Textarea
          label="Address"
          placeholder="Plase enter address"
          {...form?.getInputProps("address")}
          disabled={state === "view"}
        />
      </div>
    </div>
  );
};
