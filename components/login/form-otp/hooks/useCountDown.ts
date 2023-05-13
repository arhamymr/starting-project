import { useState, useEffect } from "react";

function useCountdown(initialCount, onFinish) {
  const [count, setCount] = useState(initialCount);

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
  const formattedCount = count.toString().padStart(2, "0");

  return {
    count: formattedCount,
    startCountdown,
  };
}

export default useCountdown;
