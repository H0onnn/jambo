import { type ReactNode } from "react";
import { cn } from "@/shared/utils";

type HeaderLayoutProps = {
  children?: ReactNode;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  containerClassName?: string;
  className?: string;
};

export const HeaderLayout = (props: HeaderLayoutProps) => {
  const { children, leftSlot, rightSlot, className, containerClassName } = props;

  return (
    <header
      className={cn([
        "fixed top-0 left-0 right-0 flex items-center justify-center h-[68px]",
        "bg-white z-50 p-2 md:px-4 md:py-3",
        "border-b-[0.5px] border-solid border-gray-f4",
        containerClassName,
      ])}
    >
      <div className={cn("w-full relative", className)}>
        {leftSlot && (
          <div className="absolute left-4 sm:left-6 lg:left-8 top-1/2 transform -translate-y-1/2">
            {leftSlot}
          </div>
        )}

        {children && children}

        {rightSlot && (
          <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2">
            {rightSlot}
          </div>
        )}
      </div>
    </header>
  );
};
