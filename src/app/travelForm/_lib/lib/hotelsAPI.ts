import type {
  HotelIdTypes,
  HotelListTypes,
  HotelTypes,
} from "@/app/travelForm/_lib/types/hotelsAPItypes";
import { env } from "@/env";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": env.X_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "booking-com18.p.rapidapi.com",
  },
};

export async function getHotelId({
  budget,
  checkinDate,
  checkoutDate,
  count,
  locationId,
}: {
  locationId: string;
  checkinDate: string;
  checkoutDate: string;
  count: number;
  budget: number;
}): Promise<HotelTypes> {
  const url = `https://booking-com18.p.rapidapi.com/stays/search?locationId=${locationId}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&adults=${count}&maxPrice=${budget}&sortBy=popularity`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw { message: "Unable to get a Hotel" };

    const result = (await response.json()) as HotelListTypes;
    return result.data[0];
  } catch (error) {
    console.error(error);
    throw { message: "An Error occured while getting a hotel" };
  }
}

export async function getHotel({
  destination,
  budget,
  checkinDate,
  checkoutDate,
  count,
}: {
  destination: string;
  checkinDate: string;
  checkoutDate: string;
  count: number;
  budget: number;
}): Promise<void> {
  const getIdUrl = `https://booking-com18.p.rapidapi.com/stays/auto-complete?query=${destination}`;

  try {
    const getIdResponse = await fetch(getIdUrl, options);
    const result = (await getIdResponse.json()) as HotelIdTypes;
    if (result?.data[0] === undefined) throw { message: "unable to get hotel ID" };
    const locationId = result.data[0].id;
    await getHotelId({ budget, checkinDate, checkoutDate, count, locationId });
  } catch (error) {
    console.error(error);
    throw { message: "an error occurred while getting the hotel Id" };
  }
}
