"use server";

import {
  OpenWeatherResponseSchema,
  type weatherTypes,
  type getLocationTypes,
} from "@/app/travelForm/_lib/types/weatherAPItypes";
import { env } from "@/env";

export async function getWeather(args: { lat: number; long: number }): Promise<weatherTypes> {
  const { lat, long } = args;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${env.OPENWEATHER_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Unable to get weather data");
    }
    const data = (await response.json()) as unknown;
    const weather = OpenWeatherResponseSchema.safeParse(data);
    if (!weather.success) throw new Error("unable to parse the data");
    return weather.data;
  } catch (error) {
    console.error(error);
    throw new Error("An Error occur while getting weather data");
  }
}

export async function getGeoLocation(args: {
  location: string;
}): Promise<{ lat: number; lon: number }> {
  const { location } = args;
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${env.OPENWEATHER_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Unable to get location");
    }
    const data = (await response.json()) as getLocationTypes[];

    if (data[0] === undefined) {
      throw new Error("Unable to get Location");
    }

    const { lat, lon } = data[0];
    return { lat, lon };
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred");
  }
}
