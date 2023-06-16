import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Center,
  Card,
} from "@chakra-ui/react";
import ButtonComp from "./button";
import Image from "next/image";

const data = [
  {
    title: "Daftar Gratis",
    image: "/assets/lp/steps/step-1.png",
    description:
      "Mulai buat aplikasimu dengan daftar secara mudah di Serpul.co.id tanpa harus ribut.",
  },
  {
    title: "Custom Aplikasi",
    image: "/assets/lp/steps/step-2.png",
    description:
      "Mulai custom aplikasi kamu dengan Produk PPOB, Add-On dan Template Desain Aplikasi sesuai dengan kebutuhan bisnismu",
  },
  {
    title: "Selesai",
    image: "/assets/lp/steps/step-3.png",
    description:
      "Aplikasi kamu sudah siap di publikasikan ke google playstore dan di download oleh jutaan orang diseluruh indonesia",
  },
];

export default function Steps() {
  return (
    <Box pb={"60px"} bg={"linear-gradient(180deg, #FFFFFF 0%, #B9C0FD 100%)"}>
      <Container maxW="1350px" p={"65px"}>
        <Center flexDirection={"column"} pt={"60px"}>
          <Heading
            fontSize={{ base: "25px", md: "28px" }}
            mb={{ base: "20px", md: "31px" }}
            textAlign={"center"}
            as={"h2"}
            maxW={700}
          >
            3 Langkah Mudah Membuat Aplikasi di Serpul.co.id
          </Heading>
          <Text
            maxW={"753px"}
            fontSize={"20px"}
            textAlign={"center"}
            mb={"90px"}
          >
            Siapapun bisa buat aplikasi dengan mudah, hanya dengan 3 Langkah
            saja!
          </Text>

          <Flex
            gap={"33px"}
            mb={"77px"}
            p={{ base: 5, md: "16px" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            {data.map((item, index) => (
              <Card
                color={"white"}
                bg={"linear-gradient(180deg, #7D81EC 0%, #2D32AE 100%)"}
                rounded={"12px"}
                key={item.title}
                w={{ base: "300px", md: "390px" }}
                p={"55PX"}
                position={"relative"}
                overflow={"hidden"}
              >
                <Center
                  rounded={"full"}
                  w={"106px"}
                  h={"106px"}
                  bg={"white"}
                  position={"absolute"}
                  top={"-53px"}
                  left={"calc(50% - 53px)"}
                >
                  <Text
                    mt={"50px"}
                    color={"brand.700"}
                    fontSize={"30px"}
                    fontWeight={"bold"}
                  >
                    {index + 1}
                  </Text>
                </Center>
                <Image
                  quality={100}
                  src={item.image}
                  width={281}
                  height={172}
                  alt={item.title}
                />
                <Text
                  mt={"21px"}
                  textAlign={"center"}
                  mb={"22px"}
                  fontWeight={"bold"}
                  fontSize={"20px"}
                >
                  {item.title}
                </Text>
                <Text textAlign={"center"} fontSize={"16px"}>
                  {item.description}
                </Text>
              </Card>
            ))}
          </Flex>
          <ButtonComp isDisabled={true}>Akses Demo Aplikasi</ButtonComp>
        </Center>
      </Container>
    </Box>
  );
}
