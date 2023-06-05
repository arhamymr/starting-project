import { useContext } from "react";
import PaymentLayout from "layouts/payment";
import DetailPayment from "components/payment/detail-payment";
import ConfigPackage from "./config-package";
import PaymentMethod from "components/payment/payment-method";
// import PaymentFulfilment from "components/payment/payment-fulfillment";
// import QrisPaymentFulfillment from "components/payment/qris-payment-fulfillment";
import PaymentProvider, { PaymentContext } from "./context";

const SelectStep = (step) => {
  switch (step) {
    case 1:
      return <ConfigPackage />;
    case 2:
      return <PaymentMethod />;
    // case 3:
    //   return <PaymentFulfilment />;
    default:
      return <ConfigPackage />;
  }
};

const SelectTitle = (step) => {
  switch (step) {
    case 1:
      return "Konfigurasi Paket";
    case 2:
      return "Pilih Metode Pembayaran";
    case 3:
      return "Selesaikan Pembayaran";
    default:
      return "Not Spesified";
  }
};

const PaymentWrapper = () => {
  return (
    <PaymentProvider>
      <Payment />
    </PaymentProvider>
  );
};

const Payment = () => {
  const { context } = useContext(PaymentContext);

  return (
    <PaymentLayout
      title={SelectTitle(context.currentStep)}
      main={SelectStep(context.currentStep)}
      sidebar={<DetailPayment />}
    />
  );
};

export default PaymentWrapper;
