import { Grid, Box, Text, Flex, Center } from "@chakra-ui/react";

import { useState } from "react";
import AddOnCard from "./add-on-card";

const data = [
  {
    name: "Laporan Keuangan Internal",
    image: "/assets/lp/add-on/Addons-06.jpg",
    description:
      "Kamu dapat memperoleh laporan harian setiap pemasukan dan pengeluaran",
  },
  {
    name: "Downline",
    image: "/assets/lp/add-on/Addons-05.jpg",
    description:
      "Promosikan aplikasi dengan lebih mudah menggunakan fitur downline",
  },
  {
    name: "Transfer Saldo Antar Member",
    image: "/assets/lp/add-on/Addons-03.jpg",
    description: "Rasakan kemudahan dalam melakukan transfer antar member ",
  },
  {
    name: "Notifikasi Aplikasi",
    image: "/assets/lp/add-on/Addons-02.jpg",
    description:
      "Nyalakan notifikasi aplikasimu agar tidak kehilangan informasi",
  },
  {
    name: "Produk Manual & Voucher",
    image: "/assets/lp/add-on/Addons-09.jpg",
    description:
      "Kamu dapat memperoleh laporan harian setiap pemasukan dan pengeluaran",
  },
  {
    name: "Print Struk Bluetooth",
    image: "/assets/lp/add-on/Addons-01.jpg",
    description:
      "Catat setiap bukti transaksi dengan print struk lewat bluetooth",
  },
  {
    name: "Multi Vendor",
    image: "/assets/lp/add-on/Addons-11.jpg",
    description:
      "Aktifkan add-on multivendor untuk memilih beragam tempat suplier produk",
  },
  {
    name: "OTP Sender",
    image: "/assets/lp/add-on/Addons-07.jpg",
    description:
      "Kirim kode verifikasi kini semakin mudah lewat OTP sender WhatsApp dan SMS",
  },
];

const RenderProduct = () => {
  return (
    <Center>
      <Box maxW={"1440px"}>
        <Grid
          mb={"127px"}
          templateColumns={{
            base: "1fr",
            xl: "repeat(3, 1fr)",
            "2xl": "repeat(4, 1fr)",
          }}
          gap={{ base: "16px", md: "31px" }}
          p={4}
        >
          {data.map((item, index) => (
            <AddOnCard data={item} key={index} />
          ))}
        </Grid>
      </Box>
    </Center>
  );
};

const Product = () => {
  const [active, setActive] = useState(0);
  const menu = [
    "Semua",
    "Koperasi",
    "Travel",
    "HRIS",
    "Pendidikan",
    "Organisasi",
  ];

  const enableList = (menu) => {
    if (menu === "Semua") {
      return true;
    }
    return false;
  };

  return (
    <Box>
      <Center w={"100vw"} pt={"46px"} pb={"30px"}>
        <Flex gap={"69px"} overflowX={"auto"} whiteSpace={"nowrap"}>
          {menu.map((item, index) => (
            <Text
              p={"8px 16px"}
              rounded={"40px"}
              fontWeight={active === index && "bold"}
              key={item}
              opacity={enableList(item) ? "1" : "0.5"}
              cursor={!enableList(item) ? "not-allowed" : "pointer"}
              onClick={() => enableList(item) && setActive(index)}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </Center>
      <RenderProduct />
    </Box>
  );
};

export default Product;
