import {
  ListItem,
  OrderedList,
  Box,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { formatPrice, copyToClipboard } from "helpers/payment";
import { CopyIcon } from "@chakra-ui/icons";
import Modal from "./modal";
import { PaymentContext } from "contents/payment/context";
import { useContext } from "react";
import ReactHtmlParser from "react-html-parser";

const content = [
  // {
  //   label: "Total Pembayaran",
  //   type: "price",
  //   value: 1549000,
  // },
  {
    label: "Metode Pembayaran",
    type: "image",
    value: "/assets/payment/BRI_1685497356.png",
  },
  {
    label: "Nomor Rekening",
    type: "copy",
    value: "005001005261301",
  },
  {
    label: "Atas Nama",
    type: "text",
    value: "PT Serpul Teknologi Indonesia",
  },
];

const ValueRender = ({ type, value }) => {
  switch (type) {
    case "text":
      return <Text>{value}</Text>;
    case "image":
      return <Image src={value} alt={"value"} width={109} height={34} />;
    case "copy":
      return (
        <Flex alignItems={"center"} gap={3}>
          <Text>{value}</Text>
          <Flex
            cursor={"pointer"}
            onClick={() => copyToClipboard(value)}
            gap={1}
            p={1.5}
            rounded={"lg"}
            bg={"brand.500"}
            color={"white"}
          >
            <CopyIcon />
            <Box fontSize={"11px"}>Salin</Box>
          </Flex>
        </Flex>
      );
    case "price":
      return <Text>Rp. {formatPrice(value)}</Text>;
    default:
      return <p>not spesified</p>;
  }
};

export default function PaymentFulfilment() {
  const { context } = useContext(PaymentContext);

  const getTotalPrice = () => {
    return (
      49000 +
      context?.paymentDetail?.package?.reduce((accumulator, currentObject) => {
        return accumulator + currentObject.price;
      }, 0)
    );
  };

  return (
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
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text flex={1}>Total Pembayaran</Text>
          <Box flex={1}>
            <Text>Rp. {formatPrice(getTotalPrice())}</Text>
          </Box>
        </Flex>
        {content?.map((item, index) => (
          <Flex
            alignItems={"center"}
            mb={index === content.length - 1 ? "0px" : "16px"}
            key={item.label}
            justifyContent={"space-between"}
          >
            <Text flex={1}>{item.label}</Text>
            <Box flex={1}>
              <ValueRender type={item.type} value={item.value} />
            </Box>
          </Flex>
        ))}
      </Box>

      {/* <Text mb={"15px"} fontSize={"17px"} fontWeight={600}>
        Petunjuk Pembayaran
      </Text> */}

      <Box px={5} mb={2}>
        {ReactHtmlParser(context.paymentMethod[0].how_to_use)}
      </Box>
      {/* <OrderedList mb={"28px"} fontSize={"13px"}>
        {data.map((item, index) => {
          return (
            <>
              <ListItem key={index}>{item}</ListItem>
            </>
          );
        })}
      </OrderedList> */}
      <Modal />
    </Box>
  );
}
