import { Grid, Box, Heading, Text, Flex, Center } from "@chakra-ui/react";

import { useState } from "react";
import ProductCard from "./product-card";

const data = {
  pascabayar: [
    {
      name: "PLN Pascabayar",
      image: "/assets/lp/product/p-prod-1.png",
    },
    {
      name: "Pulsa Pascabayar",
      image: "/assets/lp/product/p-prod-2.png",
    },
    {
      name: "TELKOM",
      image: "/assets/lp/product/p-prod-3.png",
    },
    {
      name: "BPJS",
      image: "/assets/lp/product/p-prod-4.png",
    },
    {
      name: "PDAM",
      image: "/assets/lp/product/p-prod-5.png",
    },
    {
      name: "PGN",
      image: "/assets/lp/product/p-prod-6.png",
    },
    {
      name: "TV Pascabayar",
      image: "/assets/lp/product/p-prod-7.png",
    },
  ],
  prabayar: [
    {
      name: "Pulsa Isi Ulang",
      image: "/assets/lp/product/prod-1.png",
    },
    {
      name: "Pulsa Transfer",
      image: "/assets/lp/product/prod-2.png",
    },
    {
      name: "Pulsa Internasional",
      image: "/assets/lp/product/prod-3.png",
    },
    {
      name: "Paket Data",
      image: "/assets/lp/product/prod-4.png",
    },
    {
      name: "Paket Telepon",
      image: "/assets/lp/product/prod-5.png",
    },
    {
      name: "Paket SMS",
      image: "/assets/lp/product/prod-6.png",
    },
    {
      name: "Token Listrik",
      image: "/assets/lp/product/prod-7.png",
    },
    {
      name: "Voucher Game",
      image: "/assets/lp/product/prod-8.png",
    },
    {
      name: "E-Wallet",
      image: "/assets/lp/product/prod-9.png",
    },
    {
      name: "WIFI.ID",
      image: "/assets/lp/product/prod-10.png",
    },
    {
      name: "TV Kabel",
      image: "/assets/lp/product/prod-11.png",
    },
    {
      name: "Voucher Belanja",
      image: "/assets/lp/product/prod-12.png",
    },
    {
      name: "Voucher Makan",
      image: "/assets/lp/product/prod-13.png",
    },
    {
      name: "Voucher Digital",
      image: "/assets/lp/product/prod-14.png",
    },
    {
      name: "Masa Aktif",
      image: "/assets/lp/product/prod-15.png",
    },
    {
      name: "Token Pertagas",
      image: "/assets/lp/product/prod-16.png",
    },
    {
      name: "Unlock Voucher",
      image: "/assets/lp/product/prod-17.png",
    },
    {
      name: "Unlock Kartu Perdana",
      image: "/assets/lp/product/prod-18.png",
    },
  ],
};

const RenderProduct = ({ type }) => {
  const switchType = !type ? "prabayar" : "pascabayar";
  return (
    <Grid
      mb={"127px"}
      templateColumns={{
        base: "1fr 1fr",
        md: "repeat(3, 1fr)",
        xl: "repeat(5, 1fr)",
      }}
      gap={{ base: "16px", md: "31px" }}
      p={4}
    >
      {data[switchType].map((item, index) => (
        <ProductCard data={item} key={index} />
      ))}
    </Grid>
  );
};

const Product = () => {
  const [active, setActive] = useState(0);
  const menu = ["Prabayar", "Pascabayar"];

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
