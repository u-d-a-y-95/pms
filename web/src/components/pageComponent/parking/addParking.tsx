import { Button, LoadingOverlay, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { ParkingBaseForm } from "./baseForm";
import { schema, vehicleInitialValue } from "./utils";
import { useCreateParking } from "../../../hooks/apis/parking";

export const AddParking = () => {
  const navigate = useNavigate();

  const form = useForm({
    validateInputOnChange: true,
    initialValues: vehicleInitialValue,
    validate: zodResolver(schema),
  });

  const { mutateAsync: createMutation, isLoading: createLoading } =
    useCreateParking();

  const save = async (values: IProduct) => {
    const res = await createMutation(values);
    if ([200, 201].includes(res.status)) {
      form.reset();
    }
  };

  return (
    <>
      <LoadingOverlay
        visible={createLoading}
        zIndex={1000}
        overlayProps={{ radius: "lg", blur: 2 }}
      />
      <Title order={3} style={{ textTransform: "capitalize" }}>
        Add Parking
      </Title>
      <form
        className="mt-5"
        onSubmit={form.onSubmit((v) => save(v))}
        onReset={form.onReset}
      >
        <ParkingBaseForm state="add" form={form} />
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
            Add
          </Button>
        </div>
      </form>
    </>
  );
};
