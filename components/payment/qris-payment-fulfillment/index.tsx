import {
  ListItem,
  OrderedList,
  Box,
  Text,
  Flex,
  Center,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import { formatPrice, copyToClipboard } from "helpers/payment";
import { CopyIcon } from "@chakra-ui/icons";
import { data } from "./data";
import Modal from "./modal";

const content = [
  {
    label: "Invoice ID",
    value: "NB2346791",
  },
  {
    label: "Nominal Tagihan",
    value: 1549000,
  },
  {
    label: "Lakukan Pembayaran Sebelum",
    value: "10 April 2023 (05:30)",
  },
  {
    label: "Kode QR",
    value: "Silahkan scan kode QR di bawah",
  },
];

export default function PaymentFulfilment() {
  return (
    <Box>
      <Center>
        <Text mb={"26px"} maxW={579} textAlign={"center"} fontSize={"16px"}>
          Terima kasih! Setelah pembayaran berhasil dilakukan, <br />
          kami akan mengirimkan link dashboard dalam 1x24 jam untuk kebutuhan
          custom aplikasi ke email dan nomor whatsappmu
        </Text>
      </Center>
      <Divider mb={"28px"} />
      <Box fontSize={"16px"} position={"relative"}>
        <Box position={"absolute"} right={0} top={0}>
          <Image
            src={"/assets/payment/logo-qris.png"}
            width={113}
            height={35}
            alt={"qr-code"}
          />
        </Box>
        {content?.map((item, index) => (
          <Flex
            alignItems={"center"}
            mb={"16px"}
            key={item.label}
            justifyContent={"space-between"}
          >
            <Text flex={1}>{item.label}</Text>
            <Text flex={1}>{item.value}</Text>
          </Flex>
        ))}
        <Flex
          alignItems={"center"}
          mb={"16px"}
          justifyContent={"space-between"}
        >
          <Box flex={1} />
          <Text flex={1}>
            <Image
              src={"/assets/payment/qr-code.png"}
              width={203}
              height={203}
              alt={"qr-code"}
            />
          </Text>
        </Flex>
      </Box>
      <Text mb={"15px"} fontSize={"17px"} fontWeight={600}>
        Petunjuk Pembayaran
      </Text>
      <Text fontSize={"13px"} mb={"10px"}>
        Pembayaran dapat dilakukan disemua bank, eWallet, ataupun provider yang
        menyediakan fitur QRIS. Adapun cara melakukan pembayarannya yaitu:
      </Text>

      <OrderedList mb={"28px"} fontSize={"13px"}>
        {data.map((item, index) => {
          return (
            <>
              <ListItem key={index}>{item}</ListItem>
            </>
          );
        })}
      </OrderedList>
      <Modal />
    </Box>
  );
}
