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

  return {
    loading,
    setLoading,
    data,
    payConf,
  };
}

export default usePayment;
