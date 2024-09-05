import { Button, NumberInput, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate, useParams } from "react-router-dom";

import { useEffect } from "react";
import { BaseProduct } from "./baseRequisition";
import {
  useGetProductById,
  useNewItemEntry,
} from "../../../../hooks/apis/main/products";
import { IProduct } from "./index.types";

export const EntryProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      availableQty: 0,
      description: "",
      itemCategoryId: "",
      itemName: "",
      newQuantity: 0,
      total: 0,
    },
  });

  const { data } = useGetProductById(id as string);

  const { mutateAsync } = useNewItemEntry();

  const save = async (values: IProduct) => {
    const res = await mutateAsync({
      id,
      obj: {
        availableQty: values.total,
      },
    });
    if ([200, 201].includes(res.status)) {
      form.reset();
    }
  };

  useEffect(() => {
    if (data) {
      form.setValues({
        ...data?.data,
        total: data.data.availableQty,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <Title order={3} style={{ textTransform: "capitalize" }}>
        New Entry
      </Title>
      <form className="mt-5" onSubmit={form.onSubmit((v: unknown) => save(v))}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <BaseProduct form={form} state="view" />
          <NumberInput
            label="New Amount"
            placeholder="Please enter quantity"
            withAsterisk
            {...form.getInputProps("newQuantity")}
            onChange={(v) => {
              form.setFieldValue("newQuantity", Number(v));
              form.setFieldValue(
                "total",
                Number(v) + Number(form?.values?.availableQty)
              );
            }}
          />
          <TextInput
            label="Total"
            placeholder="Please enter quantity"
            withAsterisk
            {...form.getInputProps("total")}
            disabled
          />
        </div>

        <div className="flex justify-end gap-5 mt-10">
          <Button
            variant="outline"
            color="gray"
            onClick={() => navigate(-1)}
            className="w-[100px]"
          >
            Back
          </Button>
          <Button type="submit" className="w-[100px]">
            Save
          </Button>
        </div>
      </form>
    </>
  );
};
