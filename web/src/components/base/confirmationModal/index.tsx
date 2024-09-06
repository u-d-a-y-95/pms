import { Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { confirmationModalProps } from "./index.type";

export const confirmationModal = ({
  confirmHandler,
  label,
}: confirmationModalProps) => {
  modals.openConfirmModal({
    title: "Confirmation",
    children: <Text size="sm">{label}</Text>,
    centered: true,
    cancelProps: {
      size: "xs",
      variant: "subtle",
    },
    labels: { confirm: "Yes", cancel: "No" },
    confirmProps: { color: "red" },
    onCancel: () => console.log("Cancel"),
    onConfirm: confirmHandler,
  });
};
