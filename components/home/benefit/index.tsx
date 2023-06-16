import { Box, Heading, Text, Center, Container } from "@chakra-ui/react";
import CardBenefit from "./card";
import Slider from "../slider";

const data = [
  {
    title: "Bebas Costum Aplikasi Tanpa Coding",
    image: "/assets/lp/benefit/ben-1.png",
    description:
      "Buat aplikasi dengan merek, logo, icon, dan warna yang dapat kamu costum sendiri",
  },
  {
    title: "Tersedia Dashboard Manajemen",
    image: "/assets/lp/benefit/ben-2.png",
    description:
      "Atur transaksi, deposit, member,  buat promo dan pengaturan  lainnya dalam satu dashboard",
  },
  {
    title: "Pilihan Produk PPOB Terlengkap",
    image: "/assets/lp/benefit/ben-3.png",
    description:
      "Tersedia 6.000+ produk prabayar dan pascabayar dengan harga termurah Langsung siap di dalam aplikasi",
  },
  {
    title: "Layanan Customer Service 24 Jam",
    image: "/assets/lp/benefit/ben-4.png",
    description:
      "Tersedia layanan customer service yang siap membantu keluhanmu kapanpun dan dimanapun",
  },
  {
    title: "Bebas Costum Aplikasi Tanpa Coding",
    image: "/assets/lp/benefit/ben-5.png",
    description:
      "Buat aplikasi dengan merek, logo,icon, dan warna yang dapat kamu costum sendiri",
  },
  {
    title: "Bebas Terhubung Terkait Produk di Suplier Lain",
    image: "/assets/lp/benefit/ben-6.png",
    description:
      "Dengan fitur multivendor memungkinkan kamu menambahkan produk dari supplier lainnya",
  },
  {
    title: "Bergabung di Grup Member",
    image: "/assets/lp/benefit/ben-7.png",
    description:
      "Bergabung lewat Telegram untuk berbagi informasi menarik dengan member aktif lainnya.",
  },
  {
    title: "Bimbingan Seputar Bisnis Lewat ZOOM Meeting",
    image: "/assets/lp/benefit/ben-8.png",
    description:
      "Bergabung lewat ZOOM untuk mengikuti bimbingan materi bisnis lewat pemateri yang handal dibidangnya.",
  },
  {
    title: "Transaksi dan Deposit Otomatis 24 Jam",
    image: "/assets/lp/benefit/ben-9.png",
    description:
      "Bisa ditinggal tidur, semua serba otomatis dengan  metode deposit terlengkap",
  },
  {
    title: "Tersedia Beragam Pilihan Add-On Menarik",
    image: "/assets/lp/benefit/ben-10.png",
    description:
      "Tersedia beragam Add-On menarik yang siap digunakan untuk kebutuhan bisnismu",
  },
];

export default function Benefit() {
  return (
    <Box pb={"30px"} id={"benefit"}>
      <Center flexDirection={"column"} pt={"100px"}>
        <Heading
          fontSize={{ base: "25px", md: "28px" }}
          mb={{ base: "20px", md: "31px" }}
          textAlign={"center"}
          as={"h2"}
          p={"16px"}
          maxW={700}
        >
          10 Alasan Kamu Harus Membuat Aplikasi di Serpul.co.id
        </Heading>
        <Text
          maxW={"753px"}
          textAlign={"center"}
          fontSize={"20px"}
          mb={{ base: "40px", md: "90px" }}
        >
          Kami telah berpengalaman Lebih dari 7 Tahun dan telah dipercaya Oleh
          1.000.000+ Agen dengan 600+ Aplikasi yang telah kami buat untuk
          pebisnis pulsa dan lainnya
        </Text>
      </Center>
      <Container maxW={"1439px"}>
        <Slider>
          {data.map((item, index) => (
            <CardBenefit key={index} data={item} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
