import { Text, Card, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function AddOnCard({ data }) {
  return (
    <Card
      maxW={"full"}
      minH={"381px"}
      p={"12px 14px"}
      rounded={"15px"}
      boxShadow={"0px 5px 20px 5px #C7C7C740"}
      mb={{ base: "0px", md: "49px" }}
    >
      <Box
        overflow="hidden"
        position={"relative"}
        width={"full"}
        height={202}
        rounded={"12px"}
      >
        <Image
          quality={100}
          src={data.image}
          alt={data.title}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Box>

      <Text mt={"21px"} mb={"22px"} fontSize={"20px"}>
        {data.name}
      </Text>
      <Text>{data.description}</Text>
    </Card>
  );
}
