import { useState } from "react";
import { fetcher } from "helpers/fetcher";
export function useLogin() {
  const [isLoading, setLoading] = useState(false);

  function checkFirstTimeAccess() {
    return localStorage.getItem("firstTimeAccess") === null;
  }

  const handleLogin = async (payload) => {
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
    checkFirstTimeAccess,
    handleLogin,
    isLoading,
  };
}
