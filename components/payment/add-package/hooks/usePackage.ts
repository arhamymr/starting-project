import { useState } from "react";
import fetchData from "api/axios";

function usePackage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getPackage = async () => {
    try {
      const options = {
        method: "GET",
        url: "/product",
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
