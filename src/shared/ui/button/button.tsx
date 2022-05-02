import * as React from "react";
import clsx from "clsx";
import * as styles from "./button.css";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & styles.ButtonVariants
>(({ className, color, ...restProps }, forwardedRef) => (
  <button
    ref={forwardedRef}
    className={clsx(styles.button({ color }), className)}
    {...restProps}
  />
));

Button.displayName = "Button";
