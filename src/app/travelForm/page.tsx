"use client";

import { onSubmitAction } from "@/app/travelForm/_lib/actions";
import InputWithLabel from "@/app/travelForm/_lib/components/InputWithLabel";
import { formSchema } from "@/app/travelForm/_lib/lib/formSchema";
import Main from "@/components/Main";
import { zodResolver } from "@hookform/resolvers/zod";
import { Minus, Plus } from "lucide-react";
import { useRef, useState, type ReactElement } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { type z } from "zod";

function Button(): ReactElement {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full rounded-full border-4 border-slate-950 bg-emerald-400 py-2 text-center text-2xl font-bold transition-all hover:scale-105 focus-visible:scale-105 active:scale-95"
      disabled={pending}
    >
      {pending ? "loading" : "Plan my Trip"}
    </button>
  );
}

export default function travelFormPage(): ReactElement {
  const [_, formAction] = useFormState(onSubmitAction, { message: "" });
  const [travelersCount, setTravelersCount] = useState<number>(1);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      count: 1,
      origin: "",
      destination: "",
      budget: 100,
    },
  });

  const handleMinus = (): void => {
    setTravelersCount((prevCount) => {
      if (prevCount === 1) {
        return (prevCount = 1);
      } else {
        return prevCount - 1;
      }
    });
  };

  const handleSum = (): void => {
    setTravelersCount((prevCount) => prevCount + 1);
  };

  return (
    <Main>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={handleSubmit(() => formRef.current?.submit())}
      >
        <div className="relative ">
          <InputWithLabel type="number" value={travelersCount} readOnly {...register("count")}>
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
        {Boolean(errors.count) && (
          <div className="text-center font-semibold text-red-600">{errors.count?.message}</div>
        )}

        <div className="mt-12 space-y-2">
          <InputWithLabel type="text" placeholder="New York City" {...register("origin")}>
            Flying from
          </InputWithLabel>
          {Boolean(errors.origin) && (
            <div className="text-center font-semibold text-red-600">{errors.origin?.message}</div>
          )}

          <InputWithLabel type="text" placeholder="Paris" {...register("destination")}>
            Flying to
          </InputWithLabel>
          {Boolean(errors.destination) && (
            <div className="text-center font-semibold text-red-600">
              {errors.destination?.message}
            </div>
          )}
        </div>

        <div className="mt-12 space-y-2">
          <InputWithLabel className="w-full" type="date" {...register("flightDate")}>
            From Date
          </InputWithLabel>
          {Boolean(errors.flightDate) && (
            <div className="text-center font-semibold text-red-600">
              {errors.flightDate?.message}
            </div>
          )}

          <InputWithLabel className="w-full" type="date" {...register("returnDate")}>
            To Date
          </InputWithLabel>
          {Boolean(errors.returnDate) && (
            <div className="text-center font-semibold text-red-600">
              {errors.returnDate?.message}
            </div>
          )}
        </div>

        <div className="mt-9 space-y-4">
          <div className="relative">
            <InputWithLabel type="number" placeholder="5000" {...register("budget")}>
              Budget
            </InputWithLabel>

            <div className="absolute inset-0 mb-3 ml-3  mr-auto mt-auto size-fit text-2xl font-bold text-slate-950">
              $
            </div>
          </div>
          {Boolean(errors.budget) && (
            <div className="text-center font-semibold text-red-600">{errors.budget?.message}</div>
          )}
          {isSubmitting && <div>loading</div>}
          <Button />
        </div>
      </form>
    </Main>
  );
}
