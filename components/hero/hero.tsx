import { Box, Heading, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { HERO_TEXT } from "./hero.constants";
import Image from "next/image";

const SideImage = () => (
  <Box pos={"absolute"} right={-220}>
    {/* <Box
      rounded={"lg"}
      w={700}
      h={200}
      pos={"absolute"}
      zIndex={10}
      right={-100}
      bottom={-20}
      boxShadow={"0 2px 12px rgba(0, 0, 0, 0.3)"}
      backdropFilter={"blur(5px)"}
    /> */}
    <Box
      boxShadow={"2px 2px 30px rgba(0, 0, 0, 0.3)"}
      overflow={"hidden"}
      rounded={"lg"}
      pos={"relative"}
      w={700}
      h={500}
    >
      <Image src={"/upload/side.png"} alt={"side image"} fill />
    </Box>
  </Box>
);
export default function Hero() {
  return (
    <Flex pos={"relative"} h={{ base: "600px", md: "600px" }}>
      <SideImage />
      <Box w={"full"}>
        <Heading
          mb={6}
          as={"h1"}
          maxW={700}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        >
          {HERO_TEXT.title}
        </Heading>
        <Text mb={50} color={"gray.500"} maxW={700}>
          {HERO_TEXT.description}
        </Text>
      </Box>
    </Flex>
  );
}
