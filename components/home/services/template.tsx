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
    name: "Laporan Keuangan Internal",
    image: "/assets/lp/add-on/add-on-1.png",
    description:
      "Kamu dapat memperoleh laporan harian setiap pemasukan dan pengeluaran",
  },
  {
    name: "Laporan Keuangan Internal",
    image: "/assets/lp/add-on/add-on-1.png",
    description:
      "Kamu dapat memperoleh laporan harian setiap pemasukan dan pengeluaran",
  },
  {
    name: "Laporan Keuangan Internal",
    image: "/assets/lp/add-on/add-on-1.png",
    description:
      "Kamu dapat memperoleh laporan harian setiap pemasukan dan pengeluaran",
  },
  {
    name: "Laporan Keuangan Internal",
    image: "/assets/lp/add-on/add-on-1.png",
    description:
      "Kamu dapat memperoleh laporan harian setiap pemasukan dan pengeluaran",
  },
  {
    name: "Laporan Keuangan Internal",
    image: "/assets/lp/add-on/add-on-1.png",
    description:
      "Kamu dapat memperoleh laporan harian setiap pemasukan dan pengeluaran",
  },
  {
    name: "Laporan Keuangan Internal",
    image: "/assets/lp/add-on/add-on-1.png",
    description:
      "Kamu dapat memperoleh laporan harian setiap pemasukan dan pengeluaran",
  },
  {
    name: "Laporan Keuangan Internal",
    image: "/assets/lp/add-on/add-on-1.png",
    description:
      "Kamu dapat memperoleh laporan harian setiap pemasukan dan pengeluaran",
  },
];

const RenderProduct = ({ type }) => {
  return (
    <Grid mb={"127px"} templateColumns="repeat(4, 1fr)" gap={"31px"}>
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
      <Center w={"full"} pt={"46px"} pb={"30px"}>
        <Flex gap={"69px"}>
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
