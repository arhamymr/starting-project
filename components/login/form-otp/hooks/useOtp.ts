import { useState } from "react";
import { fetcher } from "helpers/fetcher";
// Custom hook for login
export function useOTP() {
  const [isLoading, setLoading] = useState(false);

  function setFirstTimeAccess() {
    localStorage.setItem("firstTimeAccess", "true");
  }

  const handleOTP = async (payload) => {
    setLoading(true);

    try {
      const response = await fetcher("/api/login", {
        method: "POST",
        body: payload,
      });

      setFirstTimeAccess();
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

  const handleResendOTP = async (payload) => {
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
    handleOTP,
    handleResendOTP,
    isLoading,
  };
}

export default useOTP;
