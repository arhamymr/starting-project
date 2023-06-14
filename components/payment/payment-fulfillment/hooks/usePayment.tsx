import { useState } from "react";
import fetchData from "config/axios";

function usePayment() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    total_price: 0,
    expired_time: "",
  });

  const payConf = async () => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        url: "/pay",
      };
      const response = await fetchData(options);
      setData(response.data.data);
    } catch (error) {
      throw error.response;
    } finally {
      setLoading(false);
    }
  };

  const payInvoice = async () => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        url: "/paid-invoice",
      };
      const response = await fetchData(options);
      setData(response.data.data);
    } catch (error) {
      throw error.response;
    } finally {
      setLoading(false);
    }
  };

  const expiredInvoice = async () => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        url: "/expired-invoice",
      };
      const response = await fetchData(options);
      setData(response.data.data);
    } catch (error) {
      throw error.response;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    data,
    payConf,
    payInvoice,
    expiredInvoice,
  };
}

export default usePayment;
