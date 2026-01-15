import clsx from "clsx";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Container({
  children,
  className,
  size = "lg",
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx("container", className)}
      style={{
        width: "100%",
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        padding: "0 20px",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
