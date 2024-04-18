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
    if (!response.ok) throw new Error("Unable to get flight information");
    const result = (await response.json()) as FlightInfo;

    if (result?.data[0] === undefined) throw new Error("Unable to get flight Data");
    return result.data[0].iataCode;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while getting flight information");
  }
}

export async function getFlight({
  count,
  departureDate,
  returnDate,
  destination,
  origin,
}: {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  count: number;
  budget: number;
}): Promise<FlightsReturnTypes> {
  try {
    const [fromId, toId] = await Promise.all([getFlightId(origin), getFlightId(destination)]);

    const url = `https://booking-com18.p.rapidapi.com/flights/search-return?fromId=${fromId}&toId=${toId}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${count}`;

    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`An error occurred, ${response.statusText}`);

    const result = (await response.json()) as FlightTypes;
    if (!result.status) throw new Error(`An error Occurred while getting data from your flight.`);

    const {
      priceRange,
      travelTimeRange,
      marketingCarriers: [airline],
    } = result.data.resultSetMetaData;
    const [route] = result.data.routes;
    const currency = result.data.quickSortPrices.recommendation.currency;

    // const hotelDetails = await getHotelDetails({count,destination,departureDateISO:departureDate, returnDateISO:returnDate})

    return { priceRange, travelTimeRange, airline, route, currency };
  } catch (error) {
    console.error(error);
    throw new Error("An error Occurred while getting your flights");
  }
}
