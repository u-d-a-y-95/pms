import { z } from "zod";
import { IVehicleType } from "./index.types";

export const vehicleInitialValue: IVehicleType = {
  name: "",
  charge: 1,
  description: "",
};

export const schema = z
  .object({
    name: z.string().min(1, { message: "name can't be empty" }),
    charge: z.number().positive().min(1, "charge can't be empty"),
    description: z.string().optional(),
  })
  .transform((obj) => obj);
