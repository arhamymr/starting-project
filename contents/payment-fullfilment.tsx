import PaymentLayout from "layouts/payment";
import PaymentFulfilment from "components/payment/payment-fulfillment";
import CountDown from "components/payment/detail-payment/countdown";
import { Box, Flex, Text, Progress } from "@chakra-ui/react";
import { useEffect } from "react";
import usePayment from "components/payment/payment-fulfillment/hooks/usePayment";

const PaymentWrapper = () => {
  return <Payment />;
};

function StepperComp() {
  const steps = ["Konfigurasi Paket", "Pembayaran", "Custom Apps"];

  const max = steps.length - 1;
  const progressPercent = ((2 - 1) / max) * 100;

  return (
    <Box mb={"22px"} position={"relative"}>
      <Flex justifyContent={"space-between"} position={"relative"} zIndex={3}>
        {steps.map((item, index) => (
          <Box
            key={item}
            h={"10px"}
            w={"10px"}
            rounded={"full"}
            bg={2 <= index ? "gray.500" : "brand.500"}
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
            color={3 <= index ? "gray.500" : "brand.500"}
          >
            {item}
          </Text>
        ))}
      </Flex>
    </Box>
  );
}

const Payment = () => {
  const { data, payConf, loading } = usePayment();

  useEffect(() => {
    payConf();
  }, []);

  return (
    <PaymentLayout
      title={"Selesaikan Pembayaran"}
      main={<PaymentFulfilment data={data} pageLoading={loading} />}
      sidebar={
        <Box
          mb={"21px"}
          p={"29px"}
          bg={"white"}
          w={"full"}
          boxShadow={"xl"}
          rounded={"md"}
          fontSize={"14px"}
        >
          <StepperComp />
          {!!data.expired_time ? (
            <CountDown expired={data.expired_time} />
          ) : (
            <CountDown expired={0} />
          )}
        </Box>
      }
    />
  );
};

export default PaymentWrapper;
