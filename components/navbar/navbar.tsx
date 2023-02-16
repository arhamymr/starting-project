import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Switch from "components/switch";
import { IconSpeakerphone, IconSquareArrowRight } from "@tabler/icons-react";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Box
        bg={useColorModeValue("rgba(255,255,255,.2)", "rgba(23,25,35, .2)")}
        borderColor={useColorModeValue("gray.100", "gray.700")}
        width={"full"}
        backdropFilter={"blur(10px)"}
        zIndex={900}
      >
        <Container maxW={"container.xl"}>
          <Flex py={{ base: 2 }} minH={"60px"} align={"center"}>
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
            <Flex flex={{ base: 1 }} align={"center"}>
              <Link href={"/"} passHref>
                <Flex gap={2} align={"center"} cursor={"pointer"}>
                  <Box bg={"yellow.400"} p={1} rounded={"sm"} color={"black"}>
                    <IconSpeakerphone />
                  </Box>

                  <Text ml={15}>
                    <b>Resume</b>, Here
                  </Text>
                  <IconSquareArrowRight />
                </Flex>
              </Link>
            </Flex>
            <Switch />
          </Flex>
        </Container>
      </Box>
      <Container maxW={"container.xl"}>
        <Flex
          gap={16}
          mb={100}
          mt={2}
          align={"center"}
          justify={"space-between"}
        >
          <Link href={"/"}>
            <Flex align={"center"} cursor={"pointer"}>
              <Text
                id="expand"
                fontFamily={"MigraExtrabold"}
                fontSize={"18px"}
                color={useColorModeValue("gray.800", "white")}
                _hover={{
                  color: "pink.300",
                }}
              >
                boxinterface
              </Text>
            </Flex>
          </Link>
          <Flex gap={7} align={"center"}>
            <Link href={"/store"}>
              <Flex align={"center"} cursor={"pointer"}>
                <Box
                  p={1.5}
                  bg={"yellow.200"}
                  rounded={"md"}
                  color={"blackAlpha.800"}
                />
                <Text ml={1.5}> Store </Text>
              </Flex>
            </Link>

            <Link href={"/playground"}>
              <Flex align={"center"} cursor={"pointer"}>
                <Box
                  p={1.5}
                  bg={"blue.200"}
                  rounded={"md"}
                  color={"blackAlpha.800"}
                />
                <Text ml={1.5}> Playground </Text>
              </Flex>
            </Link>

            <Link href={"/blog"}>
              <Flex align={"center"} cursor={"pointer"}>
                <Box
                  p={1.5}
                  bg={"red.200"}
                  rounded={"md"}
                  color={"blackAlpha.800"}
                />
                <Text ml={1.5}> Blogs </Text>
              </Flex>
            </Link>

            <Link href={"/blog"}>
              <Flex align={"center"} cursor={"pointer"}>
                <Box
                  p={1.5}
                  bg={"purple.200"}
                  rounded={"md"}
                  color={"blackAlpha.800"}
                />
                <Text ml={1.5}> About Me </Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
