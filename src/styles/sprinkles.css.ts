import { createGlobalTheme, keyframes } from "@vanilla-extract/css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { color } from "./color";
import { height } from "./height";
import { space } from "./space";
import { width } from "./width";

export const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 0.25 },
});

export const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const vars = createGlobalTheme(":root", {
  space,
  color,
  width: {
    ...space,
    ...width,
  },
  height: {
    ...space,
    ...height,
  },
});

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    paddingTop: vars.space,
    paddingRight: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
  },
  shorthands: {
    padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: {
      "blue-50": "#eff6ff",
      "blue-100": "#dbeafe",
      "blue-200": "#bfdbfe",
      "gray-700": "#374151",
      "gray-800": "#1f2937",
      "gray-900": "#111827",
    },
    background: {
      "blue-50": "#eff6ff",
      "blue-100": "#dbeafe",
      "blue-200": "#bfdbfe",
      "gray-700": "#374151",
      "gray-800": "#1f2937",
      "gray-900": "#111827",
    },
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
