import { useContext } from "react";
import { Box, Button } from "@chakra-ui/react";
import StepperComp from "./stepper";
import { PaymentContext } from "contents/payment/context";
import CountDown from "./countdown";
import Detail from "./detail";
import usePayment from "./hooks/usePayment";
import { useRouter } from "next/router";

export default function DetailPayment() {
  const { context, setContext } = useContext(PaymentContext);
  const { pay } = usePayment();
  const router = useRouter();
  const handleNextPayment = (payment = {}) => {
    setContext({ ...context, payment, currentStep: context.currentStep + 1 });
  };

  const getCustomerId = () => {
    return localStorage.getItem("customer_id");
  };

  const handlePay = async () => {
    try {
      const payload = {
        customer_id: getCustomerId(),
        payment_id: context?.paymentDetail?.paymentMethod?.payment_id,
        item: context?.paymentDetail.package,
      };
      // console.log(payload);
      const data = await pay(payload);
      if (data?.invoice_id) {
        router.push("/payment-fullfilment?invoice_id=" + data?.invoice_id);
      }
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
          isDisabled={!context?.paymentDetail?.paymentMethod?.payment_id}
          onClick={handlePay}
        >
          Bayar Sekarang
        </Button>
      )}
    </Box>
  );
}
