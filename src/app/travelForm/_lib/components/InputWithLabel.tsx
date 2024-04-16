import { cn } from "@/utils";
import type { InputHTMLAttributes, ReactElement } from "react";

type DynamicInputProps = InputHTMLAttributes<HTMLInputElement>;

export default function InputWithLabel({
  className,
  children,
  ...props
}: DynamicInputProps): ReactElement {
  return (
    <label className="flex flex-col items-center justify-center gap-2 text-xl font-bold">
      {children}
      <input
        className={cn("rounded-full border-4 border-slate-950 p-2 text-center text-2xl", className)}
        {...props}
      />
    </label>
  );
}
