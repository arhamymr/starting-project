import React, { useRef } from "react";
import { Box, Heading, Text, Flex, Center, Container } from "@chakra-ui/react";
import Image from "next/image";
import Button from "./button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "./marquee";
import Link from "next/link";

const texts = Array.from(
  [
    {
      text: "Aplikasi Pulsa",
      color: "linear-gradient(180deg, #595FEB 0%, #2125A7 100%)",
    },
    {
      text: "Aplikasi Koperasi",
      color: "linear-gradient(180deg, #A843E6 0%, #691DCD 100%)",
    },
    {
      text: "Aplikasi Travel dan Haji",
      color: "linear-gradient(180deg, #5EA9FA 0%, #2C7ACF 100%)",
    },
    {
      text: "Aplikasi Komunitas",
      color: "linear-gradient(180deg, #E3CA10 0%, #D78E02 100%)",
    },
    {
      text: "Aplikasi Pendidikan",
      color: "linear-gradient(180deg, #28A745 0%, #0B8A28 100%)",
    },
    {
      text: "Aplikasi HRIS",
      color: "linear-gradient(180deg, #E66300 0%, #BE5403 100%)",
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
    arrows: false,
  };

  return (
    <Box w={{ base: "370px", md: "550px" }} h={{ base: "35px", md: "50px" }}>
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
  "m-pulsa.png",
  "serpay.png",
  "indosat.png",
  "kiosfin.png",
  "indopay.png",
  "bimasakti.png",
  "dflash.png",
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
            align={"center"}
            fontWeight={"bold"}
            fontSize={{ base: "25px", md: "34px" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Text
              fontSize={{ base: "25px", md: "34px" }}
              whiteSpace={"nowrap"}
              mr={"12px"}
              ml={{ base: 0, md: "100px" }}
              mt={"4px"}
            >
              Semua Bisa Memiliki Brand{" "}
            </Text>
            <AnimatedTextSlider />
          </Flex>
          <Text maxW={"753px"} textAlign={"center"} mb={"40px"}>
            Nikmati kemudahan buat aplikasi custom tanpa harus ngoding dengan
            6.000+ pilihan Produk PPOB, Add-on dan beragam template keren
            lainnya
          </Text>
          <Link href={"/register"}>
            <Button>Buat Aplikasi Sekarang!</Button>
          </Link>
        </Center>
      </Container>
      <Box bg={"brand.100"}>
        <Container maxW="1649px" p={{ base: "40px 0", md: "65px" }}>
          <Center flexDirection={"column"}>
            <Text mb="45px" textAlign={"center"} maxW={"690px"}>
              {" "}
              Berpengalaman Selama 7 Tahun dan dipercaya Oleh 800.000+ Agen{" "}
              <br />
              dengan 600+ Aplikasi yang telah kami buat untuk pebisnis pulsa dan
              lainnya
            </Text>
            <Marquee>
              <Flex
                w={"1440px"}
                justifyContent={"space-between"}
                alignItems={"center"}
                flexWrap={"wrap"}
                gap={"20px"}
              >
                {data.map((item) => (
                  <Center key={item} w={"135px"} h={"54px"}>
                    <Image
                      src={"/assets/lp/" + item}
                      alt={item}
                      width={135}
                      height={54}
                      quality={100}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </Center>
                ))}
              </Flex>
            </Marquee>
          </Center>
        </Container>
      </Box>
    </Box>
  );
}
