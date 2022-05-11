import { style, createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "~/styles";

export const background = createVar();

const baseStyles = style({
  backgroundColor: vars.color.orange["500"],
  textDecoration: "none",
  fontSize: "1.25rem",
  fontWeight: "bold",
});

export const navLink = recipe({
  base: baseStyles,
  variants: {
    isActive: {
      true: {
        color: vars.color.orange["200"],
      },
      false: {
        color: vars.color.red["700"],
      },
    },
  },
});
