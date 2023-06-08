import { useState } from "react";
import fetchData from "config/axios";

function useCoupon() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const validateCoupon = async (formData) => {
    try {
      const options = {
        method: "POST",
        data: formData,
        url: "/validate-discount",
      };
      const response = await fetchData(options);
      setData(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data:", error);
    }
  };

  return {
    loading,
    setLoading,
    validateCoupon,
    data,
  };
}

export default useCoupon;
