import React, { useState } from "react";

const initialData: any = {
  currentStep: 1,
  additional: {
    apps_fee: {
      label: "Biaya Pembuatan Aplikasi",
      value: 0,
    },
    subs_fee: {
      label: "Biaya Langganan/bulan",
      value: 0,
    },
    other_fee: {
      value: 0,
    },
  },
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
