import { ActionIcon, Tooltip } from "@mantine/core";
import { ActionBtnProps } from "./index.type";

export const ActionBtn = ({ label, clickHandler, Icon }: ActionBtnProps) => {
  return (
    <Tooltip label={label} variant="light" color="gray" withArrow>
      <ActionIcon
        size={"sm"}
        onClick={clickHandler}
        variant="outline"
        p="3"
        color="gray"
      >
        {Icon}
      </ActionIcon>
    </Tooltip>
  );
};
