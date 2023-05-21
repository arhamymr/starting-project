import { Grid, Box, Text, Flex, Center } from "@chakra-ui/react";

import { useState } from "react";
import DepositCard from "./deposit-card";

const data = [
  [
    "/assets/payment/bri.png",
    "/assets/payment/bni.png",
    "/assets/payment/mandiri.png",
    "/assets/payment/bca.png",
  ],
  [
    "/assets/payment/bri.png",
    "/assets/payment/bni.png",
    "/assets/payment/mandiri.png",
    "/assets/payment/bca.png",
  ],
  [
    "/assets/payment/bri.png",
    "/assets/payment/bni.png",
    "/assets/payment/mandiri.png",
    "/assets/payment/bca.png",
  ],
  [
    "/assets/payment/bri.png",
    "/assets/payment/bni.png",
    "/assets/payment/mandiri.png",
    "/assets/payment/bca.png",
  ],
];

const RenderDeposit = ({ type }) => {
  return (
    <Grid
      mb={"127px"}
      templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
      gap={"31px"}
    >
      {data[type].map((item, index) => (
        <DepositCard image={item} key={index} />
      ))}
    </Grid>
  );
};

const Product = () => {
  const [active, setActive] = useState(0);
  const menu = ["Transfer Bank", "Virtual Bank", "QRIS", "Gerai Retail"];

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
      <RenderDeposit type={active} />
    </Box>
  );
};

export default Product;
