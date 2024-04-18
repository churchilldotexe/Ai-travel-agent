import { z } from "zod";

export const tripSchema = z.object({
  id: z.string(),
  flightDate: z.string(),
  returnDate: z.string(),
  origin: z.string(),
  destination: z.string(),
  weather: z.string(),
  flight: z.string(),
  hotel: z.string(),
});

export const aiResponseSchema = z.object({
  weather: z.string(),
  flight: z.string(),
  hotel: z.string(),
});
