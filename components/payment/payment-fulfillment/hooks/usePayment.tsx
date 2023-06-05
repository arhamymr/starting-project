import { useState } from "react";
import fetchData from "api/axios";

function usePayment() {
  const [loading, setLoading] = useState(false);

  const payConf = async (payload) => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        data: payload,
        url: "/pay?invoice_id=" + payload.invoice_id,
      };
      const response = await fetchData(options);

      return response.data;
    } catch (error) {
      throw new Error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    payConf,
  };
}

export default usePayment;
