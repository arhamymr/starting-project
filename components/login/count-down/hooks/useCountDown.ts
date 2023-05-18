import { useState, useEffect } from "react";

function useCountdown(initialCount, onFinish) {
  const [count, setCount] = useState(initialCount);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (count > 0) {
      timeoutId = setTimeout(() => setCount(count - 1), 1000);
    } else {
      onFinish();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count, onFinish]);

  function startCountdown() {
    setCount(initialCount);
  }

  const handleCountDown = async (payload) => {
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      });
      startCountdown();
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
  const formattedCount = count.toString().padStart(2, "0");

  return {
    isLoading,
    handleCountDown,
    count: formattedCount,
    startCountdown,
  };
}

export default useCountdown;
