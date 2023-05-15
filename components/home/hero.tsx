import { Box, Heading, Text, Flex, Center, Container } from "@chakra-ui/react";
import Image from "next/image";
import Button from "./button";

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
      <Center flexDirection={"column"} pt={"136px"} pb={"84px"}>
        <Image
          src={"/assets/lp/banner.png"}
          width={681}
          height={358}
          alt={"hero banner"}
        />
        <Heading mb={"31px"} textAlign={"center"} as={"h2"} maxW={700}>
          10 Alasan Kamu Harus Membuat Aplikasi di Serpul.co.id
        </Heading>
        <Text maxW={"753px"} textAlign={"center"} mb={"40px"}>
          Nikmati manfaat dan kemudahan dalam membuat aplikasi sesuka hati
          dengan beragam fitur, add-on dan template yang kami sediakan
        </Text>
        <Button>Buat Aplikasi Sekarang!</Button>
      </Center>
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
