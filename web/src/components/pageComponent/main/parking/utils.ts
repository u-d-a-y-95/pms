import { z } from "zod";

export const vehicleInitialValue = {
  name: "",
  phone: "",
  address: "",
  license: "",
  vehicleTypeId: "",
  spaceId: "",
};

export const schema = z
  .object({
    name: z.string().min(1, { message: "name can't be empty" }),
    phone: z.string().min(1, { message: "phone number can't be empty" }),
    license: z.string().min(1, { message: "license number can't be empty" }),
    vehicleTypeId: z
      .string()
      .min(1, { message: "vehicle type can't be empty" }),
    spaceId: z.string().min(1, { message: "space can't be empty" }),
    address: z.string().optional(),
  })
  .transform((obj) => obj);
