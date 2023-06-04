import { useState } from "react";
import { fetcher } from "helpers/fetcher";

function useLogin() {
  const [isLoading, setLoading] = useState(false);

  const handleReset = async (payload) => {
    try {
      const response = await fetcher("/auth/reset", {
        method: "POST",
        body: payload,
      });

      return {
        status: "ok",
        response,
      };
    } catch (error) {
      throw new Error("Error fetching data: " + error);
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    handleReset,
  };
}

export default useLogin;
