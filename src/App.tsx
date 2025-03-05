import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import { ProviderGroup } from "./shared/providers";

export default function App() {
  return (
    <ProviderGroup>
      <RouterProvider router={router} />
    </ProviderGroup>
  );
}
