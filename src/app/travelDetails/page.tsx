import Link from "@/components/Link";
import Main from "@/components/Main";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactElement } from "react";

export default function travelDetailsPage(): ReactElement {
  return (
    <Main className="space-y-9">
      <h1 className="text-5xl font-bold lg:text-6xl xl:text-7xl">Your trip</h1>

      <div className=" w-4/6 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex w-1/2 items-center justify-center gap-1 rounded-3xl bg-[#BBF7F7] px-2 py-1 text-xl font-bold text-slate-950 shadow-sm shadow-gray-400 drop-shadow-md md:gap-3 md:text-2xl lg:gap-5 lg:py-3 lg:text-3xl">
            <ArrowRight strokeWidth={3} className="size-5 lg:size-6" />
            <p>5th Dec 23</p>
          </div>

          <div className="flex w-1/2 items-center justify-center gap-1 rounded-3xl bg-[#BBF7F7] px-2 py-1 text-xl font-bold text-slate-950 shadow-sm shadow-gray-400 drop-shadow-md md:gap-3 md:text-2xl lg:gap-5 lg:py-3 lg:text-3xl">
            <p>5th Dec 23</p>
            <ArrowLeft strokeWidth={3} className="size-5 lg:size-6" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 rounded-3xl bg-[#BBF7F7] p-2 text-2xl font-bold text-slate-950 shadow-sm shadow-gray-400 drop-shadow-md sm:gap-3 md:gap-4 md:text-3xl lg:gap-6 lg:py-3 xl:text-5xl">
          <p>New York City</p>
          <ArrowRight strokeWidth={3} className="size-6 lg:size-8" />
          <p>Paris</p>
        </div>
      </div>

      <div className="flex w-4/6 flex-col items-center justify-center gap-2 lg:gap-4">
        <h3 className="text-3xl font-bold lg:text-4xl xl:text-6xl">Weather</h3>

        <div className="rounded-3xl bg-[#BBF7F7] p-4 font-bold text-slate-950 shadow-sm shadow-gray-400 drop-shadow-md lg:p-6 lg:text-lg xl:text-xl">
          <p>You can expect the weather to be quite mild. Low will be 19° and high will be 25°</p>
        </div>
      </div>

      <div className="flex w-4/6 flex-col items-center justify-center gap-2 lg:gap-4">
        <h3 className="text-3xl font-bold lg:text-4xl xl:text-6xl">Flights</h3>

        <div className="rounded-3xl bg-[#BBF7F7] p-4 font-bold text-slate-950 shadow-sm shadow-gray-400 drop-shadow-md lg:p-6 lg:text-lg xl:text-xl">
          <div className="space-y-3">
            <p>The best option for you is with Delta Airlines with a layover in Oslo</p>
            <Link
              className="flex w-full justify-center rounded-full border-4 border-slate-950 bg-emerald-400 py-1 text-center text-2xl font-bold transition-all hover:scale-105 focus-visible:scale-105 active:scale-95 md:py-2 md:text-3xl xl:py-3 xl:text-4xl"
              route="/thankyou"
            >
              Book
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-4/6 flex-col items-center justify-center gap-2 lg:gap-4">
        <h3 className="text-3xl font-bold lg:text-4xl xl:text-6xl">Hotel</h3>

        <div className="rounded-3xl bg-[#BBF7F7] p-4 font-bold text-slate-950 shadow-sm shadow-gray-400 drop-shadow-md lg:p-6 lg:text-lg xl:text-xl">
          <div className="space-y-3">
            <p>We recommend you stay at the Premiere Inn hotel in central Paris</p>
            <Link
              className="flex w-full justify-center rounded-full border-4 border-slate-950 bg-emerald-400 py-1 text-center text-2xl font-bold transition-all hover:scale-105 focus-visible:scale-105 active:scale-95 md:py-2 md:text-3xl xl:py-3 xl:text-4xl"
              route="/thankyou"
            >
              Book
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
}
