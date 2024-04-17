import "@/styles/globals.css";

import { Inter } from "next/font/google";
import type { ReactElement, ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Ai Travel Agent",
  description: "Travel anywhere you want without worries",
  icons: [{ rel: "icon", url: "/cat-icon.svg" }],
};

export default function RootLayout({ children }: { children: ReactNode }): ReactElement {
  return (
    <html lang="en" className="box-border bg-slate-50">
      <body className={`font-sans ${inter.variable}`}>{children}</body>
    </html>
  );
}
