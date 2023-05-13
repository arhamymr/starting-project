import { defineStyleConfig } from "@chakra-ui/react";
import { Button } from "./components/button";
import { Link } from "./components/link";
import { Input } from "./components/input";
import { Text } from "./components/text";

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: 600,
  },
});

const Styles = { Link, Heading, Button, Input, Text };

export default Styles;
