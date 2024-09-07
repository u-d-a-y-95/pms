import { z } from "zod";

export const itemInitialValue = {
  vehicleTypeId: null,
  count: 1,
};

export const itemSchema = z.object({
  vehicleTypeId: z.string().min(1, { message: "name can't be empty" }),
  count: z.coerce.number().positive().min(1, "count can't be empty"),
});

export const spaceInitialValue = {
  name: "",
};

export const schema = z.object({
  name: z.string().min(1, { message: "name can't be empty" }),
});
