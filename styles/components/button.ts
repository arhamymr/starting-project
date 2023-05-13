import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {},
  // Two sizes: sm and md
  sizes: {},
  // Two variants: outline and solid
  variants: {
    // outline: {
    //   border: "2px solid",
    //   borderColor: "purple.500",
    //   color: "purple.500",
    // },
    solid: {},
  },

  // The default size and variant values
  defaultProps: {
    variant: "solid",
    colorScheme: "brand",
  },
});
