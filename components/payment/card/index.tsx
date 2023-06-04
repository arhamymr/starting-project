import { Box, Center, Text, Stack, Button } from "@chakra-ui/react";
import { PaymentContext } from "contents/payment/context";
import { formatPrice, applyDiscount } from "helpers/payment";
import { useContext, useState } from "react";

export default function Card({ name, description, discount, price }) {
  const { context, setContext } = useContext(PaymentContext);
  const [clicked, setClicked] = useState(false);

  const rmPackage = () => {
    setContext({
      ...context,
      paymentDetail: {
        ...context.paymentDetail,
        package: context.paymentDetail.package.filter(
          (item) => item.name !== name
        ),
      },
    });
  };

  const addPackage = () => {
    setContext({
      ...context,
      paymentDetail: {
        ...context.paymentDetail,
        package: [
          ...context.paymentDetail.package,
          {
            name,
            discount,
            price: applyDiscount(price, discount),
          },
        ],
      },
    });
  };

  const handleAdd = () => {
    addPackage();
    setClicked(!clicked);
  };

  const handleRm = () => {
    rmPackage();
    setClicked(!clicked);
  };
  return (
    <Center py={6}>
      <Box
        bg={"white"}
        maxW={"190px"}
        boxShadow={"xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
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
          {!clicked ? (
            <Button
              colorScheme={"brand"}
              size={"sm"}
              onClick={handleAdd}
              w={"full"}
            >
              Pilih Paket
            </Button>
          ) : (
            <Button
              colorScheme={"gray"}
              size={"sm"}
              onClick={handleRm}
              w={"full"}
            >
              Cancel
            </Button>
          )}
        </Box>
      </Box>
    </Center>
  );
}
