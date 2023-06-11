import { useState } from "react";
import fetchData from "config/axios";

function usePayment() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getPaymentMethod = async (callback) => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        url: "/payment-method",
      };
      const response = await fetchData(options);
      setData(response.data.data);
      callback(response.data.data);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    getPaymentMethod,
    data,
  };
}

export default usePayment;
