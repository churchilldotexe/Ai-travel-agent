"use client"; // Error components must be Client Components

import Link from "@/components/Link";
import Image from "next/image";
import type { ReactElement } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): ReactElement {
  return (
    <div className="absolute inset-0 mx-auto mb-auto grid size-fit place-content-center bg-slate-50 px-4 md:mt-40 lg:mt-48">
      <div className=" text-center">
        <Image
          src={"/error-logo.svg"}
          className="size-full"
          width={100}
          height={100}
          alt="error logo"
          priority
        />
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</h1>

        <p className="flex w-full justify-center py-1 text-center text-2xl font-bold transition-all hover:scale-105 focus-visible:scale-105 active:scale-95 md:py-2 md:text-3xl xl:py-3 xl:text-4xl">
          {error.message}
        </p>
        <div className="flex items-center justify-center space-x-5">
          <button
            type="button"
            className="relative inline-flex items-center overflow-hidden rounded border-4 border-indigo-600 px-8 py-3 text-center font-bold text-slate-950 hover:scale-105 hover:underline focus:outline-none focus:ring focus-visible:scale-105 active:scale-95 active:bg-indigo-500"
            onClick={reset}
          >
            Retry
          </button>
          <Link
            route="/"
            className="relative inline-flex items-center overflow-hidden px-8 py-3 text-center font-bold text-indigo-600  hover:scale-105 hover:underline focus:outline-none focus:ring focus-visible:scale-105 active:scale-95 active:bg-indigo-500"
          >
            Back to Home &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
