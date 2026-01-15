import clsx from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(styles.input, { [styles.error]: error }, className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
