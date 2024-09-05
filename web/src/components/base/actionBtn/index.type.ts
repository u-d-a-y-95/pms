import { ReactNode } from "react";

export type ActionBtnProps = {
  label: string;
  clickHandler: () => void;
  Icon: ReactNode;
};
