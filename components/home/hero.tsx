import React from "react";
import { Box, HStack, Text, Flex, Center, Container } from "@chakra-ui/react";
import Image from "next/image";
import Button from "./button";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Marquee from "./marquee";
import Link from "next/link";

const data = [
  "media1.png",
  "media2.png",
  "media3.png",
  "media4.png",
  "media5.png",
  "media7.png",
  "media6.png",
];

export default function Hero() {
  return (
    <Box>
      <Container maxW="1350px" p={"65px"}>
        <Center flexDirection={"column"} pt={"50px"} pb={"84px"}>
          <Image
            src={"/assets/lp/banner.png"}
            width={681}
            height={358}
            alt={"hero banner"}
          />

          <Flex
            mb={"20px"}
            align={"center"}
            fontWeight={"bold"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Text fontSize={{ base: "25px", md: "28px" }} textAlign={"center"}>
              Buat
              <Text
                as={"span"}
                fontSize={{ base: "25px", md: "28px" }}
                mx={"12px"}
                bg={"linear-gradient(180deg, #595FEB 0%, #2125A7 100%)"}
                backgroundClip={"text"}
              >
                Aplikasi Pulsa
              </Text>
              Brand Sendiri hanya 10 Menit
            </Text>
          </Flex>
          <Text
            maxW={"753px"}
            fontSize={"20px"}
            textAlign={"center"}
            mb={"30px"}
          >
            Nikmati kemudahan buat aplikasi custom tanpa harus ngoding dengan
            6.000+ pilihan Produk PPOB, Add-on dan beragam template keren
            lainnya
          </Text>
          <HStack spacing={{ base: "16px", md: "44px" }}>
            <Link href={"/register"}>
              <Button size={"lg"}>Buat Aplikasi Sekarang!</Button>
            </Link>

            <Button size={"lg"} isDisabled>
              Demo
            </Button>
          </HStack>
        </Center>
      </Container>
      <Box bg={"brand.100"}>
        <Container maxW="1649px" p={{ base: "40px 0", md: "65px" }}>
          <Center flexDirection={"column"}>
            <Text
              mb="45px"
              textAlign={"center"}
              fontSize={"20px"}
              maxW={"690px"}
              px={"16px"}
            >
              Serpul.co.id telah diliput oleh berbagai Media Besar di Indonesia
            </Text>

            <Flex
              maxW={"1440px"}
              justifyContent={"center"}
              alignItems={"center"}
              flexWrap={"wrap"}
              mx={"20px"}
              gap={"10px"}
            >
              {data.map((item) => (
                <a href={"#"} key={item} target={"_blank"}>
                  <Box w={"142px"} h={"46px"} position={"relative"}>
                    <Image
                      src={"/assets/media/" + item}
                      alt={item}
                      fill
                      quality={100}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </a>
              ))}
            </Flex>
          </Center>
        </Container>
      </Box>
    </Box>
  );
}
