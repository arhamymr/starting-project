import { Container, Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "./simple-navbar";
import Footer from "components/footer";

export default function TACLayout({ main, sidebar, title }) {
  return (
    <Box bg={"gray.100"}>
      <Navbar />
      <Container maxW="1150px">
        <Text mt={"20px"} fontWeight={"bold"} fontSize={"20px"} mb={"24px"}>
          {title}
        </Text>
        <Flex gap={"35px"} direction={{ base: "column", md: "row" }}>
          <Box width={{ base: "full", md: "252px" }}>{sidebar}</Box>
          <Box bg={"white"} flex={1} p={"27px"}>
            {main}
          </Box>
        </Flex>
      </Container>
      ;
      <Footer />
    </Box>
  );
}
