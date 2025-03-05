import { Suspense, lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Layout } from "@/shared/components/layout";
import { ErrorFallback } from "@/shared/components/fallback";
import { CardFallback } from "@/features/home/components/card-list/skeleton";

const HomePage = lazy(() => import("@/pages/home/index"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorFallback />,
      </Layout>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<CardFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
]);
