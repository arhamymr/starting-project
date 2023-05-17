import { Text, Card } from "@chakra-ui/react";
import Image from "next/image";

export default function AddOnCard({ data }) {
  return (
    <Card
      maxW={"330px"}
      minH={"381px"}
      p={"12px 14px"}
      rounded={"15px"}
      boxShadow={"0px 5px 20px 5px #C7C7C740"}
      mb={"49px"}
    >
      <Image
        quality={100}
        src={data.image}
        width={298}
        height={202}
        alt={data.title}
      />
      <Text mt={"21px"} mb={"22px"} fontSize={"22px"}>
        {data.name}
      </Text>
      <Text>{data.description}</Text>
    </Card>
  );
}
