import { Button, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useCreateProduct } from "../../../../hooks/apis/main/products";
import { IProduct } from "./index.types";

const schema = z
  .object({
    itemName: z.string().min(1, { message: "name can't be empty" }),
    availableQty: z.number().positive({ message: "positive only" }),
    itemCategoryId: z.string().min(1, "select a category"),
    description: z.string().optional(),
  })
  .transform((obj) => obj);

export const AddParking = () => {
  const navigate = useNavigate();

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

  const { mutateAsync: createMutation } = useCreateProduct();

  const save = async (values: IProduct) => {
    const res = await createMutation(values);
    if ([200, 201].includes(res.status)) {
      form.reset();
    }
  };

  return (
    <>
      <Title order={3} style={{ textTransform: "capitalize" }}>
        Add Product
      </Title>
      <form
        className="mt-5"
        onSubmit={form.onSubmit((v: IProduct) => save(v))}
        onReset={form.onReset}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5"></div>

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
