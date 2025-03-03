import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/home"));

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello 1!!@!@</div>,
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
