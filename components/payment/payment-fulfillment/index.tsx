import { Box, Text, Flex, Spinner, Center, Button } from "@chakra-ui/react";
import Image from "next/image";
import { formatPrice, copyToClipboard } from "helpers/payment";
import { CopyIcon } from "@chakra-ui/icons";
import Modal from "./modal";
import ReactHtmlParser from "react-html-parser";
import { useState } from "react";
import Link from "next/link";

const content = (data) => {
  console.log(data);
  return [
    // {
    //   label: "Total Pembayaran",
    //   type: "price",
    //   value: 1549000,
    // },
    {
      label: "Metode Pembayaran",
      type: "image",
      value:
        "https://dev-asset.serpul.co.id" + data.payment_method.payment_logo,
    },
    {
      label: "Nomor Rekening",
      type: "copy",
      value: data?.payment_method?.payment_number,
    },
    {
      label: "Atas Nama",
      type: "text",
      value: data?.payment_method?.payment_owner,
    },
  ];
};
const ValueRender = ({ type, value }) => {
  const [copied, setCopied] = useState(false);
  switch (type) {
    case "text":
      return <Text>{value}</Text>;
    case "image":
      return (
        <Box mb={2}>
          <Image src={value} alt={"value"} width={109} height={34} />
        </Box>
      );
    case "copy":
      return (
        <Flex alignItems={"center"} gap={3}>
          <Text>{value}</Text>
          <Flex
            cursor={"pointer"}
            onClick={() => {
              copyToClipboard(value);
              setCopied(true);
            }}
            gap={1}
            p={1.5}
            rounded={"lg"}
            bg={"brand.500"}
            color={"white"}
          >
            <CopyIcon />
            <Box fontSize={"11px"}>{!copied ? "Salin" : "Tersalin"}</Box>
          </Flex>
        </Flex>
      );
    case "price":
      return <Text>Rp. {formatPrice(value)}</Text>;
    default:
      return <p>not spesified</p>;
  }
};

export default function PaymentFulfilment({ data }) {
  console.log(data, "data");
  return (
    <Box>
      {!data.total_price ? (
        <Center h={40}>
          <Spinner />
        </Center>
      ) : (
        <Box>
          <Box
            borderRadius={"20px"}
            flexDirection={"column"}
            mb={"32px"}
            bg={"gray.100"}
            py={"28px"}
            px={"41px"}
            fontSize={"16px"}
            fontWeight={600}
          >
            <Flex
              mb={"16px"}
              alignItems={{ base: "left", md: "center" }}
              justifyContent={"space-between"}
              direction={{ base: "column", md: "row" }}
            >
              <Text flex={1}>Total Pembayaran</Text>
              <Box flex={1}>
                <Text>Rp. {formatPrice(data?.total_price)}</Text>
              </Box>
            </Flex>
            {content(data)?.map((item, index) => (
              <Flex
                alignItems={{ base: "left", md: "center" }}
                mb={index === content.length - 1 ? "0px" : "16px"}
                key={item.label}
                justifyContent={"space-between"}
                direction={{ base: "column", md: "row" }}
              >
                <Text flex={1}>{item.label}</Text>
                <Box flex={1}>
                  <ValueRender type={item.type} value={item.value} />
                </Box>
              </Flex>
            ))}
          </Box>
          <Box px={5} mb={8}>
            {ReactHtmlParser(data?.payment_method?.how_to_use)}
          </Box>
          {!!data?.expired_time ? (
            <Modal />
          ) : (
            <Link href={"/payment"}>
              <Button w={"full"}>Daftar Ulang Paket</Button>
            </Link>
          )}
        </Box>
      )}
    </Box>
  );
}
