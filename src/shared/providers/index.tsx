import { type ReactNode, Suspense } from "react";
import { QueryProvider } from "./query-provider";

type Props = {
  children: ReactNode;
};

export const ProviderGroup = ({ children }: Props) => {
  return (
    <QueryProvider>
      <Suspense>{children}</Suspense>
    </QueryProvider>
  );
};
