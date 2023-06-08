import { useState } from "react";
import { fetcher } from "helpers/fetcher";
import fetchData from "config/axios";
export function useLogin() {
  const [isLoading, setLoading] = useState(false);

  function checkFirstTimeAccess() {
    return localStorage.getItem("firstTimeAccess") === null;
  }

  const handleLogin = async (formData) => {
    setLoading(true);

    try {
      const response = await fetchData({
        method: "POST",
        data: formData,
        url: "/auth/login",
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
    checkFirstTimeAccess,
    handleLogin,
    isLoading,
  };
}
