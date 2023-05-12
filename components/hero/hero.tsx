import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { HERO_TEXT } from "./hero.constants";
import Image from "next/image";

const SideImage = () => (
  <Box pos={"absolute"} right={-220}>
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
        <Text mb={50} fontSize={"2xl"} color={"gray.500"} maxW={700}>
          {HERO_TEXT.description}
        </Text>
        <Button>button</Button>
      </Box>
    </Flex>
  );
}
