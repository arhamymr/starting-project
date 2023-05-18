import { Box, Heading, Text, Flex, Center, Card } from "@chakra-ui/react";
import ButtonComp from "../button";
import Image from "next/image";
import { useState } from "react";
import Product from "./product";
import AddOn from "./add-on";
import Deposit from "./deposit";
import Template from "./template";

const RenderServices = ({ type }) => {
  switch (type) {
    case 0:
      return <Product />;
    case 1:
      return <AddOn />;
    case 2:
      return <Template />;
    case 3:
      return <Deposit />;
    default:
      return <p> product not available </p>;
  }
};
const Navbar = () => {
  const [active, setActive] = useState(0);
  const menu = ["Product", "Add-On", "Template", "Deposit"];

  return (
    <Box id={"services"}>
      <Center
        w={"full"}
        pt={"46px"}
        pb={"30px"}
        bg={"linear-gradient(180deg, #6B6FE1 0%, #5559D0 100%)"}
      >
        <Flex gap={"100px"}>
          {menu.map((item, index) => (
            <Text
              p={"8px 16px"}
              rounded={"40px"}
              bg={active === index && "white"}
              key={item}
              onClick={() => setActive(index)}
              color={active !== index && "white"}
              cursor={"pointer"}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </Center>
      <Center bg={"brand.100"}>
        <RenderServices type={active} />
      </Center>
    </Box>
  );
};
export default function Services() {
  return (
    <Box>
      <Center flexDirection={"column"} pt={"136px"}>
        <Heading
          fontSize={"30px"}
          mb={"51px"}
          textAlign={"center"}
          as={"h2"}
          maxW={700}
        >
          Custom Aplikasi Kamu dengan Ribuan Produk PPOB, Add-On, dan Template
        </Heading>
        <Text maxW={"753px"} fontSize={"20px"} textAlign={"center"} mb={"90px"}>
          Kami menyediakan 6.000+ pilihan Produk PPOB, Add-On dan Template
          Desain Aplikasi yang dapat kamu sesuaikan dengan kebutuhan bisnismu
        </Text>
      </Center>
      <Navbar />
    </Box>
  );
}
