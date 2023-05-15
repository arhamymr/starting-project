import { Center, Box, Flex } from "@chakra-ui/react";

import { data } from "./data";
import Card from "../card";

const NavNumber = ({ children, active = false }) => {
  return (
    <Center
      h={"24px"}
      color={active ? "black" : "white"}
      w={"24px"}
      rounded={"md"}
      cursor={"pointer"}
      boxShadow={"md"}
      bg={active ? "white" : "brand.500"}
    >
      {children}
    </Center>
  );
};

export default function CardList() {
  return (
    <Center
      borderRadius={"20px"}
      flexDirection={"column"}
      mb={"32px"}
      bg={"gray.100"}
      py={"28px"}
      px={"41px"}
    >
      <Center gap={12}>
        {data.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            description={item.description}
            discount={item.discount}
            price={item.price}
          />
        ))}
      </Center>

      <Flex gap={"11px"} fontSize={"12px"}>
        <NavNumber active>1</NavNumber>
        <NavNumber>2</NavNumber>
      </Flex>
    </Center>
  );
}
