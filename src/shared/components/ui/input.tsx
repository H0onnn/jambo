import {
  useState,
  forwardRef,
  type ReactNode,
  type InputHTMLAttributes,
  type ChangeEvent,
} from "react";
import { cn } from "@/shared/utils";

export type InputVariant = "underline" | "normal";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  containerClassName?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  isError?: boolean;
  variant?: InputVariant;
}

const variantStyles: Record<InputVariant, string> = {
  underline: "border-b border-gray300 h-[39px] pb-4",
  normal: "rounded-full border-2 border-solid border-primary p-3 leading-[18px]",
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    variant = "normal",
    className,
    containerClassName,
    leftSlot,
    rightSlot,
    value,
    defaultValue,
    onChange,
    isError,
    ...rest
  } = props;

  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(e);
  };

  return (
    <div
      className={cn(
        "relative flex items-center bg-transparent w-full text-black text-[14px] lg:text-[16px] gap-3",
        variantStyles[variant],
        containerClassName,
        isError && "border-red-500",
        variant === "underline" && isError && "border-b-red-500"
      )}
    >
      {leftSlot && leftSlot}
      <input
        ref={ref}
        value={isControlled ? value : internalValue}
        onChange={handleChange}
        className={cn([
          "placeholder:text-primary w-full flex-1 appearance-none border-none bg-transparent shadow-none outline-none focus:placeholder:opacity-0",
          className,
        ])}
        {...rest}
      />
      {rightSlot && rightSlot}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
