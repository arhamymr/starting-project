import { useState } from "react";
import fetchData from "config/axios";

function usePackage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ last_page: 1, data: [] });

  const getPackage = async (page = 1) => {
    try {
      const options = {
        method: "GET",
        url: "/product?size=3&page=" + page,
      };
      const response = await fetchData(options);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
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
