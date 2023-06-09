import { useState } from "react";
import fetchData from "config/axios";
import { useRouter } from "next/router";

function usePackage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ last_page: 1, data: [] });
  const router = useRouter();
  const getPackage = async (page = 1) => {
    try {
      const options = {
        method: "GET",
        url: "/product?size=3&page=" + page,
      };
      const response = await fetchData(options);
      setData(response.data.data);
    } catch (error) {
      if (error.response.data.code === 400) {
        router.push("/payment-fullfilment");
      }
    }
  };

  return {
    loading,
    setLoading,
    getPackage,
    data,
  };
}

export default usePackage;
