import {
  Box,
  Text,
  Flex,
  Spinner,
  Center,
  Button,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Image from "next/image";
import { formatPrice, copyToClipboard } from "helpers/payment";
import { CopyIcon } from "@chakra-ui/icons";
import Modal from "./modal";
import ReactHtmlParser from "react-html-parser";
import { useState } from "react";
import { Accordion } from "@chakra-ui/react";
import usePayment from "./hooks/usePayment";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

const content = (data) => {
  return [
    {
      label: "Metode Pembayaran",
      type: "image",
      value: data?.payment_method?.payment_logo,
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

export default function PaymentFulfilment({ data, pageLoading }) {
  const { expiredInvoice, loading } = usePayment();
  const toast = useToast();
  const router = useRouter();

  const handleRePackage = async () => {
    try {
      await expiredInvoice();
      router.push("/payment");
    } catch (error) {
      toast({
        // title: "",
        description: error.data.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      {!!pageLoading ? (
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

          <Accordion mb={8} defaultIndex={[0]} allowMultiple>
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    fontWeight={600}
                    fontSize={"17px"}
                    flex="1"
                    textAlign="left"
                  >
                    Petunjuk Pembayaran
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box px={5} mb={8}>
                  {ReactHtmlParser(data?.payment_method?.how_to_use)}
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {!data?.expired_time ? (
            <Box w={"full"}>
              <Button
                colorScheme="blackAlpha"
                isLoading={loading}
                w={"full"}
                onClick={handleRePackage}
              >
                Daftar Ulang Paket
              </Button>
            </Box>
          ) : (
            <Flex gap={3}>
              <Box w={"full"}>
                <Button
                  colorScheme="blackAlpha"
                  isLoading={loading}
                  w={"full"}
                  onClick={handleRePackage}
                >
                  Daftar Ulang Paket
                </Button>
              </Box>
              <Modal />
            </Flex>
          )}
        </Box>
      )}
    </Box>
  );
}
