import { useState } from "react";
import fetchData from "api/axios";

function usePayment() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getPaymenyMethod = async () => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        url: "/payment-method",
      };
      const response = await fetchData(options);
      setData(response.data);
    } catch (error) {
      throw new Error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    getPaymenyMethod,
    data,
  };
}

export default usePayment;
