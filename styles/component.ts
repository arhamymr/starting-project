import { defineStyleConfig } from "@chakra-ui/react";
import { Button } from "./components/button";

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

const Styles = { Link, Heading, Button };

export default Styles;
