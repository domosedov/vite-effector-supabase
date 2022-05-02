import { style } from "@vanilla-extract/css";
import { sprinkles, vars } from "~/styles";

export const button = style([
  sprinkles({
    paddingX: {
      mobile: "10",
      desktop: "11",
      tablet: "2",
    },
    paddingY: "2",
  }),
  {
    border: "none",
    borderRadius: vars.space["1"],
    backgroundColor: vars.color.lime["500"],
    color: vars.color.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    transitionDuration: "0.2s",
    cursor: "pointer",

    ":hover": {
      backgroundColor: vars.color.lime["400"],
    },
  },
]);
