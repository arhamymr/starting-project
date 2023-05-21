import React, { useRef } from "react";
import { Box, Heading, Text, Flex, Center, Container } from "@chakra-ui/react";
import Image from "next/image";
import Button from "./button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { redirect } from "next/dist/server/api-utils";

const texts = Array.from(
  [
    {
      text: "Aplikasi Pulsa",
      color: "linear-gradient(180deg, #595FEB 0%, #2125A7 100%)",
    },
    {
      text: "Aplikasi Koperasi",
      color: "linear-gradient(180deg, #595FEB 0%, #2125A7 100%)",
    },
    {
      text: "Aplikasi Travel dan Haji",
      color: "linear-gradient(180deg, #595FEB 0%, #2125A7 100%)",
    },
    {
      text: "Aplikasi Komunitas",
      color: "linear-gradient(180deg, #595FEB 0%, #2125A7 100%)",
    },
    {
      text: "Aplikasi Pendidikan",
      color: "linear-gradient(180deg, #595FEB 0%, #2125A7 100%)",
    },
    {
      text: "Aplikasi HRIS",
      color: "linear-gradient(180deg, #595FEB 0%, #2125A7 100%)",
    },
  ],
  (x) => (
    <Box as={"span"} key={x.text}>
      <Box as={"span"} bg={x.color} backgroundClip={"text"}>
        {x.text}
      </Box>{" "}
      Sendiri
    </Box>
  )
);

function AnimatedTextSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box as={"span"}>
      <Slider ref={sliderRef} {...settings}>
        {texts.map((item, index) => (
          <Box as={"span"} key={index}>
            {item}
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

const data = [
  "kioser.png",
  "serpay.png",
  "indosat.png",
  "kiosfin.png",
  "indopay.png",
];
export default function Hero() {
  return (
    <Box>
      <Container maxW="1350px" p={"65px"}>
        <Center flexDirection={"column"} pt={"136px"} pb={"84px"}>
          <Image
            src={"/assets/lp/banner.png"}
            width={681}
            height={358}
            alt={"hero banner"}
          />

          <Flex
            mb={"31px"}
            w={"full"}
            fontWeight={"bold"}
            textAlign={"center"}
            maxW={1200}
            flexDirection={"column"}
            fontSize={"34px"}
          >
            Semua Bisa Memiliki Brand <AnimatedTextSlider />
          </Flex>
          <Text maxW={"753px"} textAlign={"center"} mb={"40px"}>
            Nikmati kemudahan buat aplikasi custom tanpa harus ngoding dengan
            6.000+ pilihan Produk PPOB, Add-on dan beragam template keren
            lainnya
          </Text>
          <Button>Buat Aplikasi Sekarang!</Button>
        </Center>
      </Container>
      <Box bg={"brand.100"}>
        <Container maxW="1150px" p={"65px"}>
          <Center flexDirection={"column"}>
            <Text mb="45px" textAlign={"center"} maxW={"690px"}>
              {" "}
              Berpengalaman Selama 7 Tahun dan dipercaya Oleh 800.000+ Agen{" "}
              <br />
              dengan 600+ Aplikasi yang telah kami buat untuk pebisnis pulsa dan
              lainnya
            </Text>
            <Flex
              w={"full"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexWrap={"wrap"}
              gap={"20px"}
            >
              {data.map((item) => (
                <Center key={item} w={"120px"} h={"30px"}>
                  <Image
                    src={"/assets/lp/" + item}
                    alt={item}
                    width={120}
                    height={27}
                  />
                </Center>
              ))}
            </Flex>
          </Center>
        </Container>
      </Box>
    </Box>
  );
}
