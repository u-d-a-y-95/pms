import { Button, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGetCategoryById } from "../../../../../hooks/apis/main/configuration/vehicleType";

export const ViewCategory = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      itemCategoryName: "",
      description: "",
    },
  });

  const { data } = useGetCategoryById(id as string);

  useEffect(() => {
    if (data) {
      form.setValues(data.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <Title order={3} style={{ textTransform: "capitalize" }}>
        View Store
      </Title>
      <form className="mt-5">
        <div className="flex justify-end gap-5">
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
