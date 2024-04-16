"use client";

import InputWithLabel from "@/app/travelForm/_lib/components/InputWithLabel";
import Main from "@/components/Main";
import { Minus, Plus } from "lucide-react";
import { useState, type ReactElement } from "react";

export default function travelFormPage(): ReactElement {
  const [travelersCount, setTravelersCount] = useState<number>(0);

  const handleMinus = (): void => {
    setTravelersCount((prevCount) => {
      if (prevCount === 0) {
        return (prevCount = 0);
      } else {
        return prevCount - 1;
      }
    });
  };

  console.log("rendered");

  const handleSum = (): void => {
    setTravelersCount((prevCount) => prevCount + 1);
  };

  return (
    <Main>
      <form action="" className="">
        <div className="relative">
          <InputWithLabel
            type="number"
            min={0}
            placeholder="1"
            value={travelersCount}
            name="count"
            readOnly
          >
            Number of travelers
          </InputWithLabel>

          <button
            type="button"
            onClick={handleMinus}
            className="absolute inset-0 mb-2  ml-2 mr-auto mt-auto size-10 rounded-full bg-slate-950 text-slate-50 transition-all hover:scale-105 focus-visible:scale-105 active:scale-95"
          >
            <Minus strokeWidth={5} className="mx-auto font-bold" />
            <span className="sr-only">minus</span>
          </button>
          <button
            type="button"
            onClick={handleSum}
            className="absolute inset-0 mb-2  ml-auto mr-2 mt-auto size-10 rounded-full bg-slate-950 text-slate-50 transition-all hover:scale-105 focus-visible:scale-105 active:scale-95"
          >
            <Plus strokeWidth={5} className="mx-auto " />
            <span className="sr-only">minus</span>
          </button>
        </div>

        <div className="mt-12 space-y-2">
          <InputWithLabel name="origin" type="text" placeholder="New York City">
            Flying from
          </InputWithLabel>

          <InputWithLabel name="destination" type="text" placeholder="Paris">
            Flying to
          </InputWithLabel>
        </div>

        <div className="mt-12 space-y-2">
          <InputWithLabel className="w-full" type="date" name="flightDate">
            From Date
          </InputWithLabel>

          <InputWithLabel className="w-full" type="date" name="returnDate">
            To Date
          </InputWithLabel>
        </div>

        <div className="mt-9 space-y-4">
          <div className="relative">
            <InputWithLabel
              className="overflow-x-auto"
              name="budget"
              type="number"
              placeholder="5000"
              max={10000000000}
            >
              Budget
            </InputWithLabel>

            <div className="absolute inset-0 mb-3 ml-3  mr-auto mt-auto size-fit text-2xl font-bold text-slate-950">
              $
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-full border-4 border-slate-950 bg-emerald-400 py-2 text-center text-2xl font-bold transition-all hover:scale-105 focus-visible:scale-105 active:scale-95"
          >
            Plan my Trip
          </button>
        </div>
      </form>
    </Main>
  );
}
