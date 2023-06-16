import { Text, Card } from "@chakra-ui/react";
import Image from "next/image";

export default function CardBenefit({ data }) {
  return (
    <Card
      maxW={"215px"}
      minH={"223px"}
      p={"12px 14px"}
      rounded={"15px"}
      boxShadow={"0px 5px 20px 5px #C7C7C740"}
      mb={{ base: 0, md: "49px" }}
    >
      <Image
        quality={100}
        src={data.image}
        width={285}
        style={{ borderRadius: "15px" }}
        height={204}
        alt={data.title}
      />
      <Text
        mt={"21px"}
        textAlign={"center"}
        mb={"22px"}
        fontSize={{ base: "16px", md: "20px" }}
      >
        {data.name}
      </Text>
    </Card>
  );
}
