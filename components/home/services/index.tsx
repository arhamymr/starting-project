import { Box, Heading, Text, Flex, Center } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const [active, setActive] = useState(router.query.s || 0);
  const menu = ["Product", "Add-On", "Template", "Deposit"];

  const disableList = (menu) => {
    if (menu === "Template" || menu === "Deposit") {
      return false;
    }
    return true;
  };
  return (
    <Box id={"services"}>
      <Center
        maxW={"full"}
        pt={"46px"}
        pb={"30px"}
        bg={"linear-gradient(180deg, #6B6FE1 0%, #5559D0 100%)"}
      >
        <Flex
          px={{ base: 5, md: 0 }}
          gap={{ base: "20px", md: "100px" }}
          overflowX={"auto"}
          whiteSpace={"nowrap"}
        >
          {menu.map((item, index) => (
            <Text
              p={"8px 16px"}
              rounded={"40px"}
              bg={active === index && "white"}
              key={item}
              onClick={() => disableList(item) && setActive(index)}
              color={active !== index && "white"}
              opacity={disableList(item) ? "1" : "0.5"}
              cursor={disableList(item) ? "pointer" : "not-allowed"}
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
