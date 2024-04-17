import { cn } from "@/lib/utils";
import React, {
  type ForwardRefRenderFunction,
  forwardRef,
  type InputHTMLAttributes,
  type ReactElement,
} from "react";

type DynamicInputProps = InputHTMLAttributes<HTMLInputElement>;

const InputWithLabel: ForwardRefRenderFunction<HTMLInputElement, DynamicInputProps> = (
  { className, children, ...props },
  ref
): ReactElement => {
  return (
    <label className="flex flex-col items-center justify-center gap-2 text-xl font-bold">
      {children}
      <input
        ref={ref}
        className={cn("rounded-full border-4 border-slate-950 p-2 text-center text-2xl", className)}
        {...props}
      />
    </label>
  );
};

export default forwardRef(InputWithLabel);
