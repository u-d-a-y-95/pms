import { Button, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate, useParams } from "react-router-dom";
import { BaseProduct } from "./baseRequisition";
import { useEffect } from "react";
import { useGetProductById } from "../../../../hooks/apis/main/products";

export const ViewProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
    },
  });

  const { data } = useGetProductById(id as string);

  useEffect(() => {
    if (data) {
      form.setValues(data.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <Title order={3} style={{ textTransform: "capitalize" }}>
        View Product
      </Title>
      <form className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <BaseProduct form={form} state="view" />
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
        </div>
      </form>
    </>
  );
};
