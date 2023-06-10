import { Flex, Stack, Image } from "@chakra-ui/react";
import Carousel from "components/register/form-register/carousel";

export default function SplitScreen({ children, isCarousel = false }) {
  return (
    <Stack minH={"100vh"} direction={{ base: "column-reverse", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        {children}
      </Flex>
      <Flex flex={1}>
        {!isCarousel ? (
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
          />
        ) : (
          <Carousel />
        )}
      </Flex>
    </Stack>
  );
}
