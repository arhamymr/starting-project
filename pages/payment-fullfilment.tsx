import Payment from "contents/payment-fullfilment";
import ProtectedPage from "./protected-page";

export default function PaymentPage() {
  return (
    <ProtectedPage>
      <Payment />;
    </ProtectedPage>
  );
}
