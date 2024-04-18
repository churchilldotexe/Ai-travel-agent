import Link from "@/components/Link";
import Main from "@/components/Main";
import Image from "next/image";
import type { ReactElement } from "react";

export default function HomePage(): ReactElement {
  return (
    <Main className="min-h-screen text-white">
      <div className="relative aspect-video w-full">
        <Image alt="cat icon" fill src={"/cat-icon.svg"} />
      </div>
      <Link
        route="/travelForm"
        className="w-3/4 rounded-full border-4 border-slate-950 bg-teal-400 py-5 text-center text-2xl font-bold text-slate-950 transition-all hover:scale-105 focus-visible:scale-105 active:scale-95 md:text-3xl lg:text-4xl"
      >
        Let&apos;s Begin
      </Link>
    </Main>
  );
}
