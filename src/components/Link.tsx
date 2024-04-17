import Link from "next/link";
import type { ReactElement, ReactNode } from "react";

type HrefType = "/" | "/travelForm" | "/travelDetails" | "/thankyou";

type LinkProps = {
  route: HrefType;
  children: ReactNode;
  params?: "id";
  className?: string;
};

export default function LinkComponent({
  route,
  params,
  className,
  children,
}: LinkProps): ReactElement {
  const linkHref = params !== undefined ? `${route}?${params}` : route;
  return (
    <Link href={linkHref} className={className}>
      {children}
    </Link>
  );
}
