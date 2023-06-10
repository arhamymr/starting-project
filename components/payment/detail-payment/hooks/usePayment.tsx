import { useState } from "react";
import fetchData from "config/axios";

function usePayment() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [fee, setFee] = useState({
    data: {
      apps_fee: 0,
      subs_fee: 0,
      other_fee: 0,
    },
  });

  const getFee = async () => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        url: "/fee",
      };
      const response = await fetchData(options);
      setFee(response.data);
      return response.data;
    } catch (error) {
      throw error.response;
    } finally {
      setLoading(false);
    }
  };

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
      throw error.response;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    pay,
    getFee,
    data,
    fee,
  };
}

export default usePayment;
