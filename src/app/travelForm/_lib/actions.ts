"use server";

import { getFlight } from "@/app/travelForm/_lib/lib/flightsAPI";
import { formSchema } from "@/app/travelForm/_lib/lib/formSchema";
import { NumericDateFormat, formatDate } from "@/lib/utils";

type onSubmitActionReturnType = {
  error?: string;
  message?: string;
};

export async function onSubmitAction(
  prevState: onSubmitActionReturnType,
  data: FormData
): Promise<onSubmitActionReturnType> {
  const travelForm = formSchema.safeParse(Object.fromEntries(data));

  if (!travelForm.success) {
    return { error: "Invalid form. please Update" };
  }
  const { budget, count, destination, flightDate, origin, returnDate } = travelForm.data;
  console.log(formatDate(travelForm.data.flightDate));

  const numericflightDate = NumericDateFormat(flightDate);
  const numericReturnDate = NumericDateFormat(returnDate);

  await getFlight({
    budget,
    count,
    origin,
    destination,
    departureDate: numericflightDate,
    returnDate: numericReturnDate,
  });

  return { message: "success" };
}
