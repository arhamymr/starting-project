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
        <Flex gap={"35px"} direction={{ base: "column", md: "row" }}>
          <Box
            bg={"white"}
            mb={{ base: 0, md: 300 }}
            rounded={"8px"}
            flex={1}
            p={"27px"}
          >
            {main}
          </Box>
          <Box mb={20} rounded={"8px "} width={{ base: "full", md: "361px" }}>
            {sidebar}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
