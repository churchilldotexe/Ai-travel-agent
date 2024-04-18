import { z } from "zod";

const WeatherSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});

const MainSchema = z.object({
  temp: z.number(),
  feels_like: z.number(),
  temp_min: z.number(),
  temp_max: z.number(),
  pressure: z.number(),
  humidity: z.number(),
});

const WindSchema = z.object({
  speed: z.number(),
  deg: z.number(),
});

const CloudsSchema = z.object({
  all: z.number(),
});

const SysSchema = z.object({
  type: z.number(),
  id: z.number(),
  country: z.string(),
  sunrise: z.number(),
  sunset: z.number(),
});

export const OpenWeatherResponseSchema = z.object({
  coord: z.object({
    lon: z.number(),
    lat: z.number(),
  }),
  weather: z.array(WeatherSchema),
  base: z.string(),
  main: MainSchema,
  visibility: z.number(),
  wind: WindSchema,
  clouds: CloudsSchema,
  dt: z.number(),
  sys: SysSchema,
  timezone: z.number(),
  id: z.number(),
  name: z.string(),
  cod: z.number(),
});

export type weatherTypes = z.infer<typeof OpenWeatherResponseSchema>;

export type getLocationTypes = {
  lat: number;
  lon: number;
  country: string;
  state: string;
};
