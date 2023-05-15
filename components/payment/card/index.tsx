import { Box, Center, Text, Stack, Button } from "@chakra-ui/react";
import { formatPrice, applyDiscount } from "helpers/payment";

export default function Card({ name, description, discount, price }) {
  return (
    <Center py={6}>
      <Box maxW={"190px"} boxShadow={"xl"} rounded={"md"} overflow={"hidden"}>
        <Center mb={"13px"} p={"10px"} bg={"green.500"} minHeight={"59px"}>
          <Text
            textAlign={"center"}
            fontSize={"13px"}
            color={"white"}
            fontWeight={600}
          >
            {name}
          </Text>
        </Center>

        <Box px={"17px"} mb={"24px"}>
          <Text mb={"12px"} fontSize={"11px"}>
            {description}
          </Text>
          <Text mb={"4px"} fontSize={"11px"}>
            Diskon{" "}
            <Box as={"span"} fontWeight={"bold"} color={"orange.500"}>
              {discount}%{" "}
            </Box>
            <del>({formatPrice(price)})</del>
          </Text>
          <Text mb={"13px"} fontWeight={"bold"} fontSize={16}>
            {" "}
            Rp. {formatPrice(applyDiscount(price, discount))}
          </Text>
          <Button size={"sm"} w={"full"}>
            Pilih Paket
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
