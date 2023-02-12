import { defineStyleConfig } from "@chakra-ui/react";

const Link = defineStyleConfig({
  baseStyle: {
    _hover: {
      textDecoration: "none",
    },
  },
});

export { Link };
