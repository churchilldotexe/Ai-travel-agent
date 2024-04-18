import { tripSchema } from "@/app/travelForm/_lib/lib";
import LinkComponent from "next/link";
import type { ReactElement, ReactNode } from "react";
import type { z } from "zod";

type HrefType = "/" | "/travelForm" | "/travelDetails" | "/thankyou";
const paramsCollection = tripSchema.keyof();
type paramsUnion = z.infer<typeof paramsCollection>;

type LinkProps = {
  route: HrefType;
  children: ReactNode;
  params?: paramsUnion;
  className?: string;
};

export default function Link({ route, params, className, children }: LinkProps): ReactElement {
  const linkHref = params !== undefined ? `${route}?${params}` : route;
  return (
    <LinkComponent href={linkHref} className={className}>
      {children}
    </LinkComponent>
  );
}

// import LinkComponent from "next/link";
// import type { ReactElement, ReactNode } from "react";
// import type { z } from "zod";

// // Import or define your tripSchema
// const tripSchema = z.object({
//   id: z.string(),
//   flightDate: z.string(),
//   returnDate: z.string(),
//   origin: z.string(),
//   destination: z.string(),
//   weather: z.string(),
//   flight: z.string(),
//   hotel: z.string(),
// });

// type HrefType = "/" | "/travelForm" | "/travelDetails" | "/thankyou";

// // Define a tuple type for dynamic parameters
// type DynamicParams = [keyof z.infer<typeof tripSchema>, string];

// type LinkProps = {
//   route: HrefType;
//   children: ReactNode;
//   params?: DynamicParams[];
//   className?: string;
// };

// export default function Link({ route, params, className, children }: LinkProps): ReactElement {
//   const queryParams = params ? new URLSearchParams(params.map(([key, value]) => `${key}=${value}`).join('&')) : '';
//   const linkHref = `${route}?${queryParams}`;

//   return (
//     <LinkComponent href={linkHref} className={className}>
//       {children}
//     </LinkComponent>
//   );
// }
//
