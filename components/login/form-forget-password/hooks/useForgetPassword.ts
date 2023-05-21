import { useState } from "react";
import { fetcher } from "helpers/fetcher";

export function useForgetPassword() {
  const [isLoading, setLoading] = useState(false);

  const handleForgetPassword = async (payload) => {
    setLoading(true);

    try {
      const response = await fetcher("/api/login", {
        method: "POST",
        body: payload,
      });

      return {
        status: "ok",
        response,
      };
    } catch (error) {
      throw new Error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleForgetPassword,
    isLoading,
  };
}
