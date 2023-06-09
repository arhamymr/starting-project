import { useState } from "react";
import fetchData from "config/axios";

function useRegister() {
  const [loading, setLoading] = useState(false);

  const procedRegister = async (formData) => {
    try {
      const options = {
        method: "POST",
        data: formData,
        url: "/auth/register",
      };
      const response = await fetchData(options);
      return response.data;
    } catch (error) {
      throw error.response;
    }
  };

  return {
    loading,
    setLoading,
    procedRegister,
  };
}

export default useRegister;
