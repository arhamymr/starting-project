import { Container, Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "./simple-navbar";

export default function PaymentLayout({ main, sidebar, title }) {
  return (
    <Box bg={"gray.100"}>
      <Navbar />
      <Container maxW="1150px">
        <Text mt={"20px"} mb={"24px"} fontSize={"20px"} fontWeight={600}>
          {title}
        </Text>
        <Flex gap={"35px"}>
          <Box bg={"white"} flex={1} p={"27px"}>
            {main}
          </Box>
          <Box width={"361px"}>{sidebar}</Box>
        </Flex>
      </Container>
      ;
    </Box>
  );
}
