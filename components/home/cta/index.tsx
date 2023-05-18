import {
  Box,
  Heading,
  Text,
  Center,
  Button,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";

export default function CTA() {
  return (
    <Box
      id={"cta"}
      color={"white"}
      bg={"linear-gradient(180deg, #6368E0 0%, #494DC9 100%)"}
    >
      <Container pb={"60px"} maxW="1150px" position={"relative"}>
        <Box position={"absolute"} bottom={0} left={-200}>
          <Image src={"/assets/cta.png"} width={707} height={517} alt={"cta"} />
        </Box>
        <Center flexDirection={"column"} pt={"136px"} mr={-600}>
          <Heading
            fontSize={"28px"}
            mb={"26px"}
            fontWeight={"bold"}
            textAlign={"center"}
            as={"h2"}
            maxW={700}
          >
            Tunggu Apa Lagi? <br />
            Yuk Buat Aplikasimu Sekarang!
          </Heading>
          <Text
            maxW={"753px"}
            fontSize={"24px"}
            textAlign={"center"}
            mb={"31px"}
          >
            Biaya Normal Pembuatan Aplikasi: <del>Rp. 12.000.000</del>
          </Text>
          <Text
            maxW={"753px"}
            fontSize={"36px"}
            fontWeight={900}
            textAlign={"center"}
            mb={"40px"}
          >
            Tapi! Khusus Jika Kamu Buat Aplikasi Hari Ini, Maka Cukup Bayar di
            Harga :
          </Text>
          <Text fontSize={"50px"} fontWeight={900} lineHeight={"100%"}>
            Rp. 49.000
          </Text>
          <Text w={"279px"} mb={"30px"} textAlign={"right"} fontSize={"28px"}>
            /bulan
          </Text>
          <Button rounded={"full"} bg={"white"} color={"brand.500"}>
            {" "}
            Buat Aplikasi Sekarang
          </Button>
        </Center>
      </Container>
    </Box>
  );
}
