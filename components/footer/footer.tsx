import {
  Box,
  Spacer,
  Text,
  Flex,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { FOOTER_TEXT } from "./footer.constants";

export default function Hero() {
  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      py={6}
      justify={"center"}
    >
      <Container w={"full"} maxW={"container.xl"}>
        <Flex mb={6} direction={{ base: "column", sm: "row" }}>
          <Box mb={5}>
            <Text fontSize={"sm"} fontWeight="bold">
              Social Media
            </Text>
            {FOOTER_TEXT.social.map((item, index) => (
              <Text fontSize={"sm"} key={index}>
                {item}
              </Text>
            ))}
          </Box>
          <Spacer />
          <Box>
            {FOOTER_TEXT.contact.map((item, index) => (
              <Text fontSize={"sm"} key={index}>
                {item}
              </Text>
            ))}
            <Text
              mt={12}
              fontFamily={"MigraExtrabold"}
              fontSize={"18px"}
              color={useColorModeValue("gray.800", "white")}
            >
              Arhamymr
            </Text>
            <Text fontSize={"sm"}>{FOOTER_TEXT.title}</Text>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}
