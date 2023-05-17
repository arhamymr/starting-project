import { Card, Center } from "@chakra-ui/react";
import Image from "next/image";

export default function DepositCard({ image }) {
  return (
    <Card
      maxW={"215px"}
      minH={"207px"}
      p={"12px 14px"}
      rounded={"15px"}
      boxShadow={"0px 5px 20px 5px #C7C7C740"}
      mb={"49px"}
    >
      <Center h={"full"} w={"full"}>
        <Image
          quality={100}
          src={image}
          width={298}
          height={202}
          alt={"image"}
        />
      </Center>
    </Card>
  );
}
