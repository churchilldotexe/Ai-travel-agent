import { z } from "zod";

export const formSchema = z.object({
  count: z.coerce
    .number()
    .gte(1, {
      message: "At least 1 guest is required",
    })
    .lte(100, {
      message: "Guest exceeds the maximum amount that we can accommodate",
    }),
  origin: z.string().trim().min(1, { message: "Origin is required" }),
  destination: z.string().trim().min(1, { message: "Origin is required" }),
  flightDate: z.coerce
    .date({ required_error: "date is required" })
    .min(new Date(Date.now()), { message: "Cannot use this date" }),
  returnDate: z.coerce
    .date({ required_error: "date is required" })
    .min(new Date(Date.now()), { message: "Cannot use this date" }),
  budget: z.coerce
    .number()
    .gte(100, { message: "At least a 100 dollar budget is required" })
    .lte(1000000000, { message: "We cant accommodate this budget." }),
});
