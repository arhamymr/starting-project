import { Text, Card, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function CardBenefit({ data }) {
  return (
    <Card
      maxW={{ base: "full", md: "335px" }}
      minH={"445px"}
      p={"22px 26px"}
      bg={"brand.100"}
      m={"0px 16px"}
      rounded={"15px"}
    >
      <Box position={"relative"} w={"full"} h={204}>
        <Image quality={100} src={data.image} fill alt={data.title} />
      </Box>

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
