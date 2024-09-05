import { Text } from "@mantine/core";
import { modals } from "@mantine/modals";

export const DeleteConfirmationModal = ({
  label,
  confirmHandller,
}: {
  label: string;
  confirmHandller: any;
}) => {
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
    onConfirm: () => confirmHandller,
  });
};
