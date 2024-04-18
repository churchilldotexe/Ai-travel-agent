"use server";

import { getFlight } from "@/app/travelForm/_lib/lib/flightsAPI";
import { getHotelDetails } from "@/app/travelForm/_lib/lib/hotelsAPI";
import { getGeoLocation, getWeather } from "@/app/travelForm/_lib/lib/weatherAPI";
import { env } from "@/env";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export async function openAItool({
  destination,
  origin,
  budget,
  count,
  departureDateISO,
  returnDateISO,
}: {
  origin: string;
  destination: string;
  departureDateISO: string;
  returnDateISO: string;
  count: number;
  budget: number;
}): Promise<string> {
  try {
    const runner = client.beta.chat.completions.runTools({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI agent that Gives answer in JSON with this format and only this format, there will be no nested JSON object: weather:(your answer to the query about the weather), flight:(your summary answer about the flight), hotel:(your summary answer about the hotel). Give highly specific answers based on the information you're provided and answer it in two sentences in a friendly manner and as much as possible in layman's term with no special characters or symbols. Prefer to gather information with the tools provided to you rather than giving basic, generic answers. Use this example for more context about your answer: {weather: You can expect the weather to be quite mild. Low will be 19° and high will be 25°, flight: The best option for you is with Delta Airlines with a layover in Oslo, hotel:We recommend you stay at the Premiere Inn hotel in central Paris}",
        },
        {
          role: "user",
          content: `I have a flight from ${origin} to ${destination}. I will depart on ${departureDateISO} and my return date is on ${returnDateISO}.My budget is ${budget} dollars and the number of people that will be traveling,including me, is ${count}. How is the weather when i arrive in my destination? Can you give me a summary of my flight please don't include anything about the price and date? Can you give me a summary for my hotel please don't include anything about the price`,
        },
      ],
      temperature: 1.1,
      response_format: { type: "json_object" },
      tools: [
        {
          type: "function",
          function: {
            function: getGeoLocation,
            parse: JSON.parse,
            parameters: {
              type: "object",
              properties: {
                location: {
                  type: "string",
                  description: "The name of the city/state to get the geolocation",
                },
              },
              required: ["location"],
            },
          },
        },
        {
          type: "function",
          function: {
            function: getWeather,
            parse: JSON.parse,
            parameters: {
              type: "object",
              properties: {
                lat: {
                  type: "number",
                  description:
                    "the latitude that you get from the geoLocation and is needed to get the weather",
                },
                long: {
                  type: "number",
                  description:
                    "the longitude that you get from the geoLocation and is needed to get the weather",
                },
              },
              required: ["lat", "long"],
            },
          },
        },
        {
          type: "function",
          function: {
            function: getFlight,
            parse: JSON.parse,
            parameters: {
              type: "object",
              properties: {
                count: {
                  type: "number",
                  description: "The count of the customer/guest",
                },
                departureDate: {
                  type: "string",
                  description:
                    "the Date of the customer's departure and MUST be in ISO 8601 format: YYYY-MM-DD",
                },
                returnDate: {
                  type: "string",
                  description:
                    "the Date of the customer's return and MUST be in ISO 8601 format: YYYY-MM-DD",
                },
                destination: {
                  type: "string",
                  description: "the place/state/country that the customer want to go to",
                },
                origin: {
                  type: "string",
                  description: "the place/state/country that the customer came from",
                },
              },
              required: ["count", "departureDate", "returnDate", "destination", "origin"],
            },
          },
        },
        {
          type: "function",
          function: {
            function: getHotelDetails,
            parse: JSON.parse,
            parameters: {
              type: "object",
              properties: {
                count: {
                  type: "number",
                  description: "The count of the customer/guest",
                },
                checkinDate: {
                  type: "string",
                  description:
                    "the Date of the customer's check-in date and must be the same with departure date and MUST be in ISO 8601 format: YYYY-MM-DD",
                },
                checkoutDate: {
                  type: "string",
                  description:
                    "the Date of the customer's checkout and must be the same with the return date and MUST be in ISO 8601 format: YYYY-MM-DD",
                },
                destination: {
                  type: "string",
                  description: "the place/state/country that the customer's destination",
                },
              },
              required: ["count", "checkinDate", "checkoutDate", "destination"],
            },
          },
        },
      ],
    });

    const finalContent = await runner.finalContent();
    if (finalContent === null) throw new Error("Unable to get your query. Please try again");
    console.log("Final content:", finalContent);
    return finalContent;
  } catch (error) {
    console.error(error);
    throw new Error("An Error Occurred while getting data with Ai");
  }
}
