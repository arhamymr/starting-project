import {
  Box,
  Heading,
  Text,
  Flex,
  Center,
  Container,
  Card,
} from "@chakra-ui/react";
import Image from "next/image";

export default function CardBenefit({ data }) {
  return (
    <Card minW={"335px"} p={"22px 26px"} bg={"brand.100"}>
      <Image
        quality={100}
        src={data.image}
        width={285}
        height={204}
        alt={data.title}
      />
      <Text
        mt={"21px"}
        textAlign={"center"}
        mb={"22px"}
        fontWeight={"bold"}
        fontSize={"20px"}
      >
        {data.title}
      </Text>
      <Text textAlign={"center"} fontSize={"16px"}>
        {data.description}
      </Text>
    </Card>
  );
}
