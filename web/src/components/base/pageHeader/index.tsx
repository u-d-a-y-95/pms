import { Button, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { PageHeaderProps } from "./index.type";

export const PageHeader = ({ title, addBtnPath }: PageHeaderProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <Title order={3}>{title}</Title>
      <div className="flex gap-4">
        <Button
          leftSection={<IconPlus size={"1rem"} />}
          variant="light"
          onClick={() => navigate(addBtnPath)}
        >
          Add
        </Button>
      </div>
    </div>
  );
};
