import { z } from "zod";

type VehicleType = z.infer<typeof schema>;
export const vehicleInitialValue: VehicleType = {
  name: "",
  charge: 1,
  description: "",
};

export const schema = z
  .object({
    name: z.string().min(1, { message: "name can't be empty" }),
    charge: z.coerce.number().positive().min(1, "charge can't be empty"),
    description: z.string().optional(),
  })
  .transform((obj) => obj);
