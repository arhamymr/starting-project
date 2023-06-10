import React from "react";
import { Box, Flex, Text, Center } from "@chakra-ui/react";
import { data } from "./data";
import { CheckIcon } from "@chakra-ui/icons";

const Benefit = () => {
  return (
    <Box borderRadius={"20px"} bg={"gray.100"} py={"28px"} px={"41px"}>
      {data.map((item) => (
        <Flex key={item} gap={"17px"} mb={"23px"} alignItems={"center"}>
          <Center
            w={"24px"}
            h={"24px"}
            minW={"24px"}
            bg={"green.500"}
            color={"white"}
            rounded={"full"}
          >
            <CheckIcon fontSize={"11px"} />
          </Center>
          <Text fontSize={"14px"} fontWeight={600}>
            {item}
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default Benefit;
