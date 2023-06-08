import { useContext } from "react";
import { Text, Box, Progress, Flex } from "@chakra-ui/react";
import { PaymentContext } from "contents/payment/context";

export default function StepperComp() {
  const steps = ["Konfigurasi Paket", "Pembayaran", "Custom Apps"];

  const { context } = useContext(PaymentContext);
  const max = steps.length - 1;
  const progressPercent = ((context.currentStep - 1) / max) * 100;

  return (
    <Box mb={"22px"} position={"relative"}>
      <Flex justifyContent={"space-between"} position={"relative"} zIndex={3}>
        {steps.map((item, index) => (
          <Box
            key={item}
            h={"10px"}
            w={"10px"}
            rounded={"full"}
            bg={context.currentStep <= index ? "gray.500" : "brand.500"}
          />
        ))}
      </Flex>

      <Progress
        value={progressPercent}
        position="absolute"
        height="1px"
        width="full"
        colorScheme="brand"
        top="4.5px"
        zIndex={2}
      />
      <Flex mt={"7px"} justifyContent={"space-between"}>
        {steps.map((item, index) => (
          <Text
            minW={"90px"}
            textAlign={steps.length - 1 === index ? "right" : "center"}
            key={item}
            fontSize={"11px"}
            color={context.currentStep <= index ? "gray.500" : "brand.500"}
          >
            {item}
          </Text>
        ))}
      </Flex>
    </Box>
  );
}
