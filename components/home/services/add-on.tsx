import { Grid, Box, Text, Flex, Center } from "@chakra-ui/react";

import { useState } from "react";
import AddOnCard from "./add-on-card";

const data = [
  {
    name: "Laporan Keuangan Internal",
    image: "/assets/lp/add-on/add-on-1.png",
    description:
      "Kamu dapat memperoleh laporan harian setiap pemasukan dan pengeluaran",
  },
  {
    name: "Downline",
    image: "/assets/lp/add-on/add-on-1.png",
    description:
      "Promosikan aplikasi dengan lebih mudah menggunakan fitur downline",
  },
  {
    name: "Transfer Saldo Antar Member",
    image: "/assets/lp/add-on/add-on-1.png",
    description: "Rasakan kemudahan dalam melakukan transfer antar member ",
  },
  {
    name: "Notifikasi Aplikasi",
    image: "/assets/lp/add-on/add-on-1.png",
    description:
      "Nyalakan notifikasi aplikasimu agar tidak kehilangan informasi",
  },
  {
    name: "Produk Manual & Voucher",
    image: "/assets/lp/add-on/add-on-1.png",
    description:
      "Kamu dapat memperoleh laporan harian setiap pemasukan dan pengeluaran",
  },
  {
    name: "Print Struk Bluetooth",
    image: "/assets/lp/add-on/add-on-1.png",
    description:
      "Catat setiap bukti transaksi dengan print struk lewat bluetooth",
  },
  {
    name: "Multi Vendor",
    image: "/assets/lp/add-on/add-on-1.png",
    description:
      "Aktifkan add-on multivendor untuk memilih beragam tempat suplier produk",
  },
  {
    name: "OTP Sender",
    image: "/assets/lp/add-on/add-on-1.png",
    description:
      "Kirim kode verifikasi kini semakin mudah lewat OTP sender WhatsApp dan SMS",
  },
];

const RenderProduct = ({ type }) => {
  return (
    <Grid
      mb={"127px"}
      templateColumns={{ base: "1fr 1fr", md: "repeat(4, 1fr)" }}
      gap={"31px"}
    >
      {data.map((item, index) => (
        <AddOnCard data={item} key={index} />
      ))}
    </Grid>
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

  return (
    <Box>
      <Center pt={"46px"} pb={"30px"}>
        <Flex gap={"69px"} overflowX={"auto"} whiteSpace={"nowrap"}>
          {menu.map((item, index) => (
            <Text
              p={"8px 16px"}
              rounded={"40px"}
              fontWeight={active === index && "bold"}
              key={item}
              cursor={"pointer"}
              onClick={() => setActive(index)}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </Center>
      <RenderProduct type={active} />
    </Box>
  );
};

export default Product;
