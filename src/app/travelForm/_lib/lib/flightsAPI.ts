import type {
  FlightInfo,
  FlightTypes,
  FlightsReturnTypes,
} from "@/app/travelForm/_lib/types/flightsAPItypes";
import { env } from "@/env";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": env.X_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "booking-com18.p.rapidapi.com",
  },
};

export async function getFlightId(location: string): Promise<string> {
  const url = `https://booking-com18.p.rapidapi.com/flights/auto-complete?query=${location}`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw { message: "Unable to get flight information" };
    const result = (await response.json()) as FlightInfo;

    if (result?.data[0] === undefined) throw { message: "Unable to get flight Data" };
    return result.data[0].iataCode;
  } catch (error) {
    console.error(error);
    throw { message: "An error occurred while getting flight information" };
  }
}

export async function getFlight({
  budget,
  count,
  departureDate,
  destination,
  origin,
  returnDate,
}: {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  count: number;
  budget: number;
}): Promise<FlightsReturnTypes> {
  const fromId = await getFlightId(origin);
  const toId = await getFlightId(destination);
  const url = `https://booking-com18.p.rapidapi.com/flights/search-return?fromId=${fromId}&toId=${toId}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${count}&priceRange=100,${budget}`;

  try {
    const response = await fetch(url, options);
    const result = (await response.json()) as FlightTypes;

    if (
      result?.data?.resultSetMetaData?.marketingCarriers[0] === undefined ||
      result?.data?.routes[0] === undefined
    )
      throw { message: "Unable to get flights" };

    const {
      priceRange,
      travelTimeRange,
      marketingCarriers: [airline],
    } = result.data.resultSetMetaData;
    const [route] = result.data.routes;

    return { priceRange, travelTimeRange, airline, route };
  } catch (error) {
    console.error(error);
    throw { message: "An error Occurred while getting your flights" };
  }
}
