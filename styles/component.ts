import { defineStyleConfig } from "@chakra-ui/react";

const Link = defineStyleConfig({
  baseStyle: {
    _hover: {
      textDecoration: "none",
    },
  },
});

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: 600,
  },
});

export { Link, Heading };
