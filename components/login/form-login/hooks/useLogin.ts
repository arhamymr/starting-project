import { useState } from "react";

export function useLogin() {
  const [isLoading, setLoading] = useState(false);

  function checkFirstTimeAccess() {
    return localStorage.getItem("firstTimeAccess") === null;
  }

  const handleLogin = async (payload) => {
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
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
