import { Text, Card } from "@chakra-ui/react";
import Image from "next/image";

export default function CardBenefit({ data }) {
  return (
    <Card
      maxW={"335px"}
      minH={"445px"}
      p={"22px 26px"}
      bg={"brand.100"}
      m={"0px 33px"}
    >
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
