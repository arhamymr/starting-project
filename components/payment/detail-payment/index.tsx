import { useContext } from "react";
import { Box, Button } from "@chakra-ui/react";
import StepperComp from "./stepper";
import { PaymentContext } from "contents/payment/context";
import CountDown from "./countdown";
import Detail from "./detail";
import usePayment from "./hooks/usePayment";

export default function DetailPayment() {
  const { context, setContext } = useContext(PaymentContext);
  const { pay } = usePayment();

  const handleNextPayment = () => {
    setContext({ ...context, currentStep: context.currentStep + 1 });
  };

  const handlePay = async () => {
    try {
      await pay(context?.paymentDetail.package);
      handleNextPayment();
    } catch (error) {
      window.alert("cause:" + error);
    }
  };

  const stepRender = (step) => {
    switch (step) {
      case 1:
        return <Detail />;
      case 2:
        return <Detail />;
      case 3:
        return <CountDown />;
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
        <Button w={"full"} onClick={handleNextPayment}>
          Lanjut ke Pembayaran
        </Button>
      )}
      {context.currentStep === 2 && (
        <Button w={"full"} onClick={handlePay}>
          Bayar Sekarang
        </Button>
      )}
    </Box>
  );
}
