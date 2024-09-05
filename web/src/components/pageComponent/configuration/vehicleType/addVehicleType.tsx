import { Button, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { VehicleTypeBaseForm } from "./baseForm";
import { IVehicleType } from "./index.types";
import { schema, vehicleInitialValue } from "./utils";
import { useCreateVehicleType } from "../../../../hooks/apis/configuration/vehicleType";

export const AddVehicleType = () => {
  const navigate = useNavigate();

  const form = useForm({
    validateInputOnChange: true,
    initialValues: vehicleInitialValue,
    validate: zodResolver(schema),
  });

  const { mutateAsync: createMutation } = useCreateVehicleType();

  const save = async (values: IVehicleType) => {
    const res = await createMutation(values);
    if ([200, 201].includes(res.status)) {
      form.reset();
    }
  };

  return (
    <>
      <Title order={3} style={{ textTransform: "capitalize" }}>
        Add Store
      </Title>
      <form
        className="mt-5"
        onSubmit={form.onSubmit((v: IVehicleType) => save(v))}
        onReset={form.onReset}
      >
        <VehicleTypeBaseForm form={form} state="add" />

        <div className="flex justify-end gap-5">
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
            Add
          </Button>
        </div>
      </form>
    </>
  );
};
