import React, { useState } from "react";

const initialData: any = {
  currentStep: 1,
  paymentDetail: {
    package: [],
    paymentMethod: {
      segment: "",
      bankName: "",
    },
    discount: 0,
  },
};

export const PaymentContext = React.createContext(initialData);

interface IProps {
  children?: React.ReactNode;
}

const PaymentProvider = ({ children }: IProps) => {
  const [context, setContext] = useState(initialData);

  return (
    <PaymentContext.Provider value={{ context, setContext }}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentProvider;
