import Payment from "contents/payment/switcher";
import ProtectedPage from "./protected-page";

export default function PaymentPage() {
  return (
    <ProtectedPage>
      <Payment />
    </ProtectedPage>
  );
}
