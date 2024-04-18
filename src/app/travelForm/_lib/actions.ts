"use server";

import { aiResponseSchema, tripSchema } from "@/app/travelForm/_lib/lib";
import { formSchema } from "@/app/travelForm/_lib/lib/formSchema";
import { openAItool } from "@/app/travelForm/_lib/lib/openai";
import { formatDate, isoDateFormat } from "@/lib/utils";
import { redirect } from "next/navigation";
import { type z } from "zod";

type onSubmitActionReturnType = {
  error?: string;
  message?: string;
  fields?: z.infer<typeof formSchema>;
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
  const departureDateISO = isoDateFormat(flightDate);
  const returnDateISO = isoDateFormat(returnDate);

  const aiToolContent = await openAItool({
    destination,
    origin,
    budget,
    count,
    departureDateISO,
    returnDateISO,
  });

  //JSON response from openAI to be converted to object
  const { flight, hotel, weather } = aiResponseSchema.parse(JSON.parse(aiToolContent));

  const tripData = tripSchema.parse({
    id: crypto.randomUUID(),
    flightDate: formatDate(travelForm.data.flightDate),
    returnDate: formatDate(travelForm.data.returnDate),
    origin,
    destination,
    weather,
    flight,
    hotel,
  });

  if (Boolean(tripData) === false) {
    return { error: "Validation failed, Please try again", fields: travelForm.data };
  }
  redirect(
    `/travelDetails?id=${tripData.id}&flightDate=${tripData.flightDate}&returnDate=${tripData.returnDate}&origin=${tripData.origin}&destination=${tripData.destination}&weather=${tripData.weather}&flight=${tripData.flight}&hotel=${tripData.hotel}`
  );

  return { message: "success" };
}
