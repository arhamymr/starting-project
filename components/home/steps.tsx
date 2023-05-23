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
        <Center flexDirection={"column"} pt={"136px"}>
          <Heading
            fontSize={{ base: "12px", md: "30px" }}
            mb={{ base: "12px", md: "51px" }}
            textAlign={"center"}
            as={"h2"}
            maxW={700}
          >
            3 Langkah Mudah Membuat Aplikasi di Serpul.co.id
          </Heading>
          <Text
            maxW={"753px"}
            fontSize={{ base: "9px", md: "20px" }}
            textAlign={"center"}
            mb={{ base: "32px", md: "90px" }}
          >
            Tidak perlu skill koding hanya klik dan klik, siapapun bisa buat
            aplikasi dengan serpul.co.id. Yuk mulai dengan 3 langkah mudah!
          </Text>

          <Flex
            gap={"33px"}
            mb={{ base: "40px", md: "77px" }}
            p={"16px"}
            flexDirection={{ base: "column", md: "row" }}
          >
            {data.map((item, index) => (
              <Card
                color={"white"}
                bg={"linear-gradient(180deg, #7D81EC 0%, #2D32AE 100%)"}
                rounded={"12px"}
                key={item.title}
                w={{ base: "181px", md: "390px" }}
                p={{ base: "12px", md: "55px" }}
                position={"relative"}
                overflow={"hidden"}
              >
                <Center
                  rounded={"full"}
                  w={{ base: "35px", md: "106px" }}
                  h={{ base: "35px", md: "106px" }}
                  bg={"white"}
                  position={"absolute"}
                  top={{ base: "-17px", md: "-53px" }}
                  left={{ base: "calc(50% - 17px)", md: "calc(50% - 53px)" }}
                >
                  <Text
                    mt={{ base: "15px", md: "50px" }}
                    color={"brand.700"}
                    fontSize={{ base: "12px", md: "30px" }}
                    fontWeight={"bold"}
                  >
                    {index + 1}
                  </Text>
                </Center>
                <Center>
                  <Box
                    width={{ base: "110px", md: "281px" }}
                    height={{ base: "110px", md: "172px" }}
                    position={"relative"}
                  >
                    <Image
                      quality={100}
                      fill
                      style={{ objectFit: "contain" }}
                      src={item.image}
                      alt={item.title}
                    />
                  </Box>
                </Center>

                <Text
                  mt={{ base: 0, md: "21px" }}
                  textAlign={"center"}
                  mb={{ base: "10px", md: "22px" }}
                  fontWeight={"bold"}
                  fontSize={{ base: "14px", md: "20px" }}
                >
                  {item.title}
                </Text>
                <Text
                  textAlign={"center"}
                  mb={"10px"}
                  fontSize={{ base: "9px", md: "16px" }}
                >
                  {item.description}
                </Text>
              </Card>
            ))}
          </Flex>
          <ButtonComp>Akses Demo Aplikasi</ButtonComp>
        </Center>
      </Container>
    </Box>
  );
}
