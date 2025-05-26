import { primitives } from "./tokens-primitive.js";

export const tokens = {
  colors: {
    primary: primitives.colors.primary.base,
    strong: primitives.colors.primary.900,
    light: primitives.colors.primary.100
  },
  font: {
    body: {
      medium: {
        fontSize: primitives.font.sizes.md,
        fontFamily: primitives.font.families.inter,
        fontWeight: primitives.font.weights.regular,
        lineHeight: primitives.font.line heights.md
      }
    }
  },
  spacing: {
    containerPadding: primitives.sizes.spacing.md,
    sectionMargin: primitives.sizes.spacing.lg
  }
};
