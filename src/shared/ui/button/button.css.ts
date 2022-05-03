import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "~/styles";

export const buttonBase = style([
  sprinkles({
    paddingX: {
      mobile: "10",
      desktop: "11",
      tablet: "2",
    },
    paddingY: "2",
    color: {
      lightMode: "gray-900",
      darkMode: "blue-100",
    },
  }),
  {
    border: "none",
    borderRadius: vars.space["1"],
    fontWeight: "bold",
    textTransform: "uppercase",
    transitionDuration: "0.2s",
    cursor: "pointer",
    // color: vars.color.white,
  },
]);

export const button = recipe({
  base: buttonBase,
  variants: {
    color: {
      primary: {
        backgroundColor: vars.color.lime["500"],
      },
      secondary: {
        backgroundColor: vars.color.fuchsia["500"],
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
