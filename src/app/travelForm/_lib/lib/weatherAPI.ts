"use server";

import { type getLocationTypes, type weatherTypes } from "@/app/travelForm/_lib/types/weatherAPItypes";
import { env } from "@/env";

export async function fetchWeather(lat: number, long: number): Promise<weatherTypes> {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${env.OPENWEATHER_API_KEY}`
    );
    if (!response.ok) {
      throw { message: "Unable to get weather data" };
    }
    const data = (await response.json()) as weatherTypes;
    return data;
  } catch (error) {
    console.error(error);
    throw { message: "An Error occur while getting weather data" };
  }
}

export async function getWeather(location: string): Promise<void> {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${env.OPENWEATHER_API_KEY}`
    );
    if (!response.ok) {
      throw { message: "Unable to get location" };
    }
    const data = (await response.json()) as getLocationTypes[];

    if (data[0] === undefined) {
      throw { message: "Unable to get Location" };
    }

    const { lat, lon } = data[0];
    await fetchWeather(lat, lon);
  } catch (error) {
    console.error(error);
    throw { message: "An error occurred" };
  }
}
