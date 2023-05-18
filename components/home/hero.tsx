import { useEffect, useState } from "react";
import { Box, Heading, Text, Flex, Center, Container } from "@chakra-ui/react";
import Image from "next/image";
import Button from "./button";
import { motion } from "framer-motion";

const texts = ["First Text", "Second Text", "Third Text"];

const AnimatedTextSlider = ({ texts, duration }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {texts.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

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
      <Container maxW="1150px" p={"65px"}>
        <Center flexDirection={"column"} pt={"136px"} pb={"84px"}>
          <Image
            src={"/assets/lp/banner.png"}
            width={681}
            height={358}
            alt={"hero banner"}
          />
          <Box
            height="100px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <AnimatedTextSlider texts={texts} duration={3000} />
          </Box>
          <Heading mb={"31px"} textAlign={"center"} as={"h2"} maxW={700}>
            Semua Bisa Memiliki Aplikasi Brand{" "}
            <Box as={"span"} color={"brand.500"}>
              {" "}
              Aplikasi Pulsa{" "}
            </Box>
            Sendiri
          </Heading>
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
