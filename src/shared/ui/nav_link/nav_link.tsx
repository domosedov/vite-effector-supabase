import * as React from "react";
import { NavLink as NavLinkBase } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";
import clsx from "clsx";
import * as styles from "./nav_link.css";

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, ...restProps }, forwardedRef) => (
    <NavLinkBase
      ref={forwardedRef}
      className={({ isActive }) =>
        clsx(styles.navLink({ isActive }), className)
      }
      {...restProps}
    />
  )
);

NavLink.displayName = "NavLink";
