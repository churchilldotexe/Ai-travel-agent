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

export async function getHotelId({ destination }: { destination: string }): Promise<string> {
  const getIdUrl = `https://booking-com18.p.rapidapi.com/stays/auto-complete?query=${destination}`;

  try {
    const response = await fetch(getIdUrl, options);
    if (!response.ok)
      throw new Error(`An error occurred while getting hotel id, ${response.statusText}`);

    const result = (await response.json()) as HotelIdTypes;

    if (result?.data[0] === undefined) throw new Error(`Unable to get hotel ID, ${result.message}`);

    return result.data[0].id;
  } catch (error) {
    console.error(error);
    throw new Error("an error occurred while getting the hotel Id");
  }
}

export async function getHotelDetails({
  checkinDate,
  checkoutDate,
  count,
  destination,
}: {
  destination: string;
  checkinDate: string;
  checkoutDate: string;
  count: number;
}): Promise<HotelTypes> {
  const locationId = await getHotelId({ destination });

  const url = `https://booking-com18.p.rapidapi.com/stays/search?locationId=${locationId}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&adults=${count}&sortBy=popularity`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`Unable to get a Hotel, Error:${response.statusText}`);

    const result = (await response.json()) as HotelListTypes;

    if (!result.status) throw new Error("Unable to get your Hotel ");
    return result.data[0];
  } catch (error) {
    console.error(error);
    throw new Error("An Error occurred while getting a hotel");
  }
}
