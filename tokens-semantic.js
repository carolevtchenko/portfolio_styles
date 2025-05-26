import { primitives } from "./tokens-primitives.js";

export const tokens = {
  "font": {
    "body": {
      "large": {
        "fontSize": "primitives.font.sizes.16",
        "fontFamily": "primitives.font.families.inter",
        "fontWeight": "primitives.font.weights.regular",
        "lineHeight": "primitives.font.line heights.27.2"
      },
      "medium": {
        "fontSize": "primitives.font.sizes.14",
        "fontFamily": "primitives.font.families.inter",
        "fontWeight": "primitives.font.weights.regular",
        "lineHeight": "primitives.font.line heights.23.8"
      },
      "small": {
        "fontSize": "primitives.font.sizes.12",
        "fontFamily": "primitives.font.families.inter",
        "fontWeight": "primitives.font.weights.regular",
        "lineHeight": "primitives.font.line heights.20.4"
      }
    }
  },
  "sizes": {
    "space & size": {
      "positive": "primitives.sizes.space & size.positive",
      "negative": "primitives.sizes.space & size.negative"
    },
    "padding": {
      "xxl": "primitives.sizes.padding.xxl",
      "xl": "primitives.sizes.padding.xl",
      "lg": "primitives.sizes.padding.lg",
      "md": "primitives.sizes.padding.md",
      "sm": "primitives.sizes.padding.sm",
      "xs": "primitives.sizes.padding.xs",
      "none": "primitives.sizes.padding.none"
    },
    "corner radius": {
      "small": "primitives.sizes.corner radius.small",
      "medium": "primitives.sizes.corner radius.medium",
      "large": "primitives.sizes.corner radius.large",
      "full": "primitives.sizes.corner radius.full",
      "none": "primitives.sizes.corner radius.none"
    },
    "breakpoints": {
      "min-width": "primitives.sizes.breakpoints.min-width",
      "max-width": "primitives.sizes.breakpoints.max-width",
      "menu icon": "primitives.sizes.breakpoints.menu icon",
      "social": "primitives.sizes.breakpoints.social",
      "links": "primitives.sizes.breakpoints.links",
      "breadcrumb": "primitives.sizes.breakpoints.breadcrumb"
    }
  },
  "grid": {
    "mobile": {
      "gutter": {
        "description": "",
        "type": "dimension",
        "value": "{sizes & numbers primitive.positive.2}",
        "extensions": {
          "org.lukasoppermann.figmaDesignTokens": {
            "collection": "sizes & numbers semantic",
            "scopes": [
              "GAP",
              "FONT_VARIATIONS"
            ],
            "variableId": "VariableID:178:11005",
            "exportKey": "variables"
          }
        }
      },
      "column": {
        "description": "",
        "type": "dimension",
        "value": "{sizes & numbers primitive.positive.9}",
        "extensions": {
          "org.lukasoppermann.figmaDesignTokens": {
            "collection": "sizes & numbers semantic",
            "scopes": [
              "GAP",
              "FONT_VARIATIONS"
            ],
            "variableId": "VariableID:178:11006",
            "exportKey": "variables"
          }
        }
      },
      "column count": {
        "description": "",
        "type": "dimension",
        "value": "{sizes & numbers primitive.count.4}",
        "extensions": {
          "org.lukasoppermann.figmaDesignTokens": {
            "collection": "sizes & numbers semantic",
            "scopes": [
              "ALL_SCOPES"
            ],
            "variableId": "VariableID:182:1152",
            "exportKey": "variables"
          }
        }
      }
    },
    "tablet": {
      "column": {
        "description": "",
        "type": "dimension",
        "value": "{sizes & numbers primitive.positive.12}",
        "extensions": {
          "org.lukasoppermann.figmaDesignTokens": {
            "collection": "sizes & numbers semantic",
            "scopes": [
              "GAP",
              "FONT_VARIATIONS"
            ],
            "variableId": "VariableID:182:835",
            "exportKey": "variables"
          }
        }
      },
      "gutter": {
        "description": "",
        "type": "dimension",
        "value": "{sizes & numbers primitive.positive.3}",
        "extensions": {
          "org.lukasoppermann.figmaDesignTokens": {
            "collection": "sizes & numbers semantic",
            "scopes": [
              "GAP",
              "FONT_VARIATIONS"
            ],
            "variableId": "VariableID:182:836",
            "exportKey": "variables"
          }
        }
      },
      "column count": {
        "description": "",
        "type": "dimension",
        "value": "{sizes & numbers primitive.count.6}",
        "extensions": {
          "org.lukasoppermann.figmaDesignTokens": {
            "collection": "sizes & numbers semantic",
            "scopes": [
              "GAP",
              "FONT_VARIATIONS"
            ],
            "variableId": "VariableID:182:1157",
            "exportKey": "variables"
          }
        }
      }
    },
    "desktop": {
      "column": {
        "description": "",
        "type": "dimension",
        "value": "{sizes & numbers primitive.positive.12}",
        "extensions": {
          "org.lukasoppermann.figmaDesignTokens": {
            "collection": "sizes & numbers semantic",
            "scopes": [
              "GAP",
              "FONT_VARIATIONS"
            ],
            "variableId": "VariableID:182:1140",
            "exportKey": "variables"
          }
        }
      },
      "gutter": {
        "description": "",
        "type": "dimension",
        "value": "{sizes & numbers primitive.positive.3}",
        "extensions": {
          "org.lukasoppermann.figmaDesignTokens": {
            "collection": "sizes & numbers semantic",
            "scopes": [
              "GAP",
              "FONT_VARIATIONS"
            ],
            "variableId": "VariableID:182:1141",
            "exportKey": "variables"
          }
        }
      },
      "column count": {
        "description": "",
        "type": "dimension",
        "value": "{sizes & numbers primitive.count.12}",
        "extensions": {
          "org.lukasoppermann.figmaDesignTokens": {
            "collection": "sizes & numbers semantic",
            "scopes": [
              "GAP",
              "FONT_VARIATIONS"
            ],
            "variableId": "VariableID:182:1158",
            "exportKey": "variables"
          }
        }
      }
    }
  }
};
