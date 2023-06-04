import { useState } from "react";
import fetchData from "api/axios";

function usePayment() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const pay = async (payload) => {
    setLoading(true);
    try {
      const options = {
        method: "POST",
        data: payload,
        url: "/pay",
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
    pay,
    data,
  };
}

export default usePayment;
