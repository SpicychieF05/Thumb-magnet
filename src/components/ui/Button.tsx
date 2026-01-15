import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={clsx(
          styles.button,
          styles[size],
          styles[variant],
          { [styles.fullWidth]: fullWidth },
          { [styles.disabled]: disabled },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
