import { useContext } from "react";
import { Box, Button } from "@chakra-ui/react";
import StepperComp from "./stepper";
import { PaymentContext } from "contents/payment/context";
import CountDown from "./countdown";
import Detail from "./detail";
import usePayment from "./hooks/usePayment";
import { useRouter } from "next/router";
import { slideUp } from "helpers/dom";
import { useToast } from "@chakra-ui/react";

export default function DetailPayment() {
  const { context, setContext } = useContext(PaymentContext);
  const { loading, pay } = usePayment();
  const toast = useToast();

  const router = useRouter();
  const handleNextPayment = (payment = {}) => {
    slideUp();
    setContext({ ...context, payment, currentStep: context.currentStep + 1 });
  };

  const handlePay = async () => {
    try {
      const payload = {
        payment_id: context?.paymentDetail?.paymentMethod?.payment_id,
        item: context?.paymentDetail.package,
      };

      await pay(payload);
      router.push("/payment-fullfilment");
    } catch (error) {
      toast({
        // title: "",
        description: error.data.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const stepRender = (step) => {
    switch (step) {
      case 1:
        return <Detail />;
      case 2:
        return <Detail />;
      // case 3:
      //   return <CountDown />;
      default:
        return <p>nothing</p>;
    }
  };

  return (
    <Box>
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
        {stepRender(context.currentStep)}
      </Box>
      {context.currentStep === 1 && (
        <Button
          w={"full"}
          // isDisabled={!context?.paymentDetail?.package.length}
          onClick={handleNextPayment}
        >
          Lanjut ke Pembayaran
        </Button>
      )}
      {context.currentStep === 2 && (
        <Button
          w={"full"}
          isLoading={loading}
          loadingText="Loading"
          spinnerPlacement="start"
          isDisabled={!context?.paymentDetail?.paymentMethod?.payment_id}
          onClick={handlePay}
        >
          Bayar Sekarang
        </Button>
      )}
    </Box>
  );
}
