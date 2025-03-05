import { Link } from "react-router-dom";

export const ErrorFallback = () => (
  <div className="flex flex-col items-center justify-center h-screen gap-3">
    <h1 className="text-2xl font-bold">Error !</h1>
    <Link to="/">Go to Home</Link>
  </div>
);
