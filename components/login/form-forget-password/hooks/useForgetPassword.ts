import { useState } from "react";
import fetchData from "config/axios";

export function useForgetPassword() {
  const [isLoading, setLoading] = useState(false);

  const handleForgetPassword = async (formData) => {
    setLoading(true);

    try {
      const response = await fetchData({
        method: "POST",
        body: formData,
        url: "/auth/forget-password",
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
