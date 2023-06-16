import { Box, Heading, Text, Center, Container } from "@chakra-ui/react";
import TestimonialCard from "./card";
import Slider from "../slider";

const data = [
  {
    text: "Tim IT dari Serpul sangat baik dalam melayani setiap permasalahan, dan sejauh ini tidak ada kendala yang berarti",
    image: "/assets/lp/testimonial/tes-1.png",
    name: "Serpay - Dody Alfayed",
    bg: "linear-gradient(180deg, #989BF1 0%, #6667AA 100%)",
  },
  {
    text: "Tim CS sangat luar biasa dalam memberikan arahan dan bimbingan saat pembuatan aplikasi  di web serpul. Kemudian sistemnya sangat stabil",
    image: "/assets/lp/testimonial/tes-2.png",
    name: "Stored - Emir Dyfan",
    bg: "linear-gradient(180deg, #5DABE8 0%, #2675B3 100%)",
  },
  {
    text: "Sebagai member, saya sudah sangat puas terhadap pelayanan yang diberikan oleh serpul. Khususnya untuk tim CS",
    image: "/assets/lp/testimonial/tes-3.png",
    name: "Multi Payment - Yatemant",
    bg: "linear-gradient(180deg, #02A59C 0%, #06837B 100%)",
  },
  {
    text: "Terima kasih serpul dengan layanan PPOB terlengkap, tercepat, dan sangat rsponsif.  Saya sangat terbantu dalam berjualan di desa",
    image: "/assets/lp/testimonial/tes-4.png",
    name: "Kiosdes - Hamdani",
    bg: "linear-gradient(180deg, #626262 0%, #454646 100%)",
  },
  {
    text: "Sudah hampir dua tahun saya menggunakan serpul, dan sampai saat ini sangat aman dan memuaskan dari segi pelayanan yang diberikan",
    image: "/assets/lp/testimonial/tes-5.png",
    name: "WNI Pulsa - Wilson",
    bg: "linear-gradient(180deg, #F85555 0%, #AF1423 100%)",
  },
  {
    text: "Sepengalamanku dalam bermitra dengan Serpul.co.id ini cukup bagus untuk H2H . Produknya makin lengkap dan transaksi super cepat.",
    image: "/assets/lp/testimonial/tes-6.png",
    name: "KIOSKU- Krismanto",
    bg: "linear-gradient(180deg, #D6A440 0%, #8F650E 100%)",
  },
  {
    text: "Secara keseluruhan dari segi layanan di Serpul sangat memuaskan. Tinggal penambahan fitur-fitur aja supaya lebih maksimal dan powerful",
    image: "/assets/lp/testimonial/tes-7.png",
    name: "AksenPay - Helmy Ardian",
    bg: "linear-gradient(180deg, #606CDE 0%, #313C9E 100%)",
  },
  {
    text: "Saya sangat puas menggunakan Serpul. Serpul memiliki layanan CS 24 jam yang siap membantu setiap komplain dan memberikan penyelesaian yang baik.",
    image: "/assets/lp/testimonial/tes-8.png",
    name: "MSaldo - Rizki Fadillah",
    bg: "linear-gradient(180deg, #51AE67 0%, #228839 100%)",
  },
  {
    text: "Pelayanan bagus dan sangat responsif. Setiap permasalahan selalu terselesaikan dengan baik. Terima kasih serpul",
    image: "/assets/lp/testimonial/tes-9.png",
    name: "Raja Zone- Frengki Akbar ",
    bg: "linear-gradient(180deg, #DE3ED8 0%, #96028F 100%)",
  },
];

export default function Testimonial() {
  return (
    <Box pb={"60px"} id={"testimonial"}>
      <Center flexDirection={"column"} pt={"136px"}>
        <Heading
          fontSize={{ base: "25px", md: "28px" }}
          mb={{ base: "20px", md: "31px" }}
          textAlign={"center"}
          as={"h2"}
          maxW={700}
        >
          Apa Kata Mereka Tentang Serpul.co.id?
        </Heading>
        <Text
          maxW={"753px"}
          textAlign={"center"}
          fontSize={"20px"}
          p={"16px"}
          mb={{ base: "40px", md: "90px" }}
        >
          Berbekal pengalaman selama lebih dari 7 tahun dalam melayani ratusan
          tenant mulai dariperorangan hingga corporasi, sehingga kepuasan
          pelanggan adalah prioritas utama kami.
        </Text>
      </Center>
      <Container maxW={"1709px"}>
        <Slider slide={3}>
          {data.map((item, index) => (
            <TestimonialCard key={index} data={item} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
