import { Suspense, lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Layout } from "@/shared/components/layout";

const HomePage = lazy(() => import("@/pages/home/index"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    errorElement: <div>Error !</div>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
]);
