import { cn } from "@/utils";
import { type DetailedHTMLProps, type HTMLAttributes } from "react";

type MainProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Main({ children, className, ...props }: MainProps) {
  return (
    <main
      className={cn(
        "mx-auto flex max-w-5xl flex-col items-center justify-center bg-slate-50 py-8",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}
