import { TextInput } from "@mantine/core";
import { IBaseStoreProps } from "./index.types";

export const SpaceBaseForm = ({ form, state }: IBaseStoreProps) => {
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
      </div>
    </div>
  );
};
