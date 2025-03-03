import { ReactNode } from "react";
import { SideBar } from "./side-bar";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-grayf4">
      <div className="flex min-h-screen">
        <SideBar />

        <main className="flex-1 min-h-screen w-full md:ml-[200px]">
          <div className="mx-auto w-full max-w-full px-4 py-6 md:max-w-[560px]">{children}</div>
        </main>
      </div>
    </div>
  );
};
