import { useState } from "react";
import fetchData from "config/axios";

function usePayment() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    total_price: 0,
    expired_time: "",
  });

  const payConf = async (invoice_id) => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        url: "/pay?invoice_id=" + invoice_id,
      };
      const response = await fetchData(options);
      setData(response.data);
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
    data,
    payConf,
  };
}

export default usePayment;
