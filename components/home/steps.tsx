import { Box, Heading, Text, Flex, Center, Card } from "@chakra-ui/react";
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
      <Center flexDirection={"column"} pt={"136px"}>
        <Heading
          fontSize={"30px"}
          mb={"51px"}
          textAlign={"center"}
          as={"h2"}
          maxW={700}
        >
          3 Langkah Mudah Membuat Aplikasi di Serpul.co.id
        </Heading>
        <Text maxW={"753px"} fontSize={"20px"} textAlign={"center"} mb={"90px"}>
          Tidak perlu skill koding hanya klik dan klik, siapapun bisa buat
          aplikasi dengan serpul.co.id. Yuk mulai dengan 3 langkah mudah!
        </Text>

        <Flex gap={"33px"} mb={"77px"}>
          {data.map((item) => (
            <Card
              color={"white"}
              bg={"linear-gradient(180deg, #7D81EC 0%, #2D32AE 100%)"}
              rounded={"12px"}
              key={item.title}
              w={"390px"}
              p={"55PX"}
            >
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
        <ButtonComp>Akses Demo Aplikasi</ButtonComp>
      </Center>
    </Box>
  );
}