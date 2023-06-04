import { useState, useContext } from "react";
import {
  Box,
  Input,
  Text,
  Flex,
  Button,
  IconButton,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import StepperComp from "./stepper";
import { Divider } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { PaymentContext } from "contents/payment/context";
import Coupon from "./coupon";

function formatPrice(price) {
  const formattedPrice = new Intl.NumberFormat("id-ID").format(price);
  return formattedPrice;
}

export default function DetailPayment() {
  const { context } = useContext(PaymentContext);

  const getTotalPrice = () => {
    return context?.paymentDetail?.package?.reduce(
      (accumulator, currentObject) => {
        console.log(accumulator, currentObject, "test");
        return accumulator + currentObject.price;
      },
      0
    );
  };

  return (
    <Box>
      <Text mb={"14px"} fontSize={"17px"} fontWeight={600}>
        Rincian Pembayaran
      </Text>

      {context?.paymentDetail?.package.map((item, index) => {
        return (
          <SimpleGrid key={index} spacing={2} columns={2} mb={1}>
            <Text>{item.name}</Text>
            <Flex justify={"space-between"} align={"flex-end"}>
              <Text>Rp. </Text>
              <Text fontWeight={600}>{formatPrice(item.price)}</Text>
            </Flex>
          </SimpleGrid>
        );
      })}

      <Divider mt={"13px"} mb={"16px"} />
      <Coupon />
      <Flex justifyContent={"space-between"}>
        <Text>Diskon</Text>
        <Text>Rp. -{formatPrice(100000)}</Text>
      </Flex>

      <SimpleGrid spacing={2} columns={2} mb={1}>
        <Text>Metode Pembayaran</Text>
        <Text textAlign={"right"}>
          {context?.paymentDetail?.paymentMethod?.bankName || "Belum Dipilih"}{" "}
        </Text>
      </SimpleGrid>

      <Flex mb={"16px"} fontWeight={600} justifyContent={"space-between"}>
        <Text fontSize={"17px"}>Total Pembayaran</Text>
        <Text fontSize={"17px"}>Rp. {formatPrice(getTotalPrice())}</Text>
      </Flex>

      <Text>
        Dengan melakukan pembayaran, maka saya menyetuji{" "}
        <Link
          fontWeight={500}
          as={NextLink}
          target={"_blank"}
          href={"/terms-and-conditions"}
        >
          Syarat dan Ketentuan
        </Link>{" "}
        yang ditetapkan oleh Serpul.co.id
      </Text>
    </Box>
  );
}
