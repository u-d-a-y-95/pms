import { Button, LoadingOverlay, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { SpaceBaseForm } from "./baseForm";
import { schema, spaceInitialValue } from "./utils";
import { ItemForm } from "./itemForm";
import { useState } from "react";
import { useCreateSpace } from "../../../../hooks/apis/configuration/space";
import { toast } from "../../../../utils/toast";

export const AddSpace = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  const form = useForm({
    validateInputOnChange: true,
    initialValues: spaceInitialValue,
    validate: zodResolver(schema),
  });

  const { mutateAsync: createMutation, isLoading: createLoading } =
    useCreateSpace();

  const save = async (values) => {
    if (items.length < 1) {
      return toast.warning("Please add vehicle types");
    }
    const res = await createMutation({
      name: values.name,
      sizes: items,
    });
    if ([200, 201].includes(res.status)) {
      form.reset();
      setItems([]);
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
        Add Space
      </Title>
      <form
        className="mt-5"
        onSubmit={form.onSubmit((v) => save(v))}
        onReset={(e) => {
          form.onReset(e);
          setItems([]);
        }}
      >
        <SpaceBaseForm form={form} state="add" />
        <ItemForm state={""} items={items} setItems={setItems} />

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
            Save
          </Button>
        </div>
      </form>
    </>
  );
};
