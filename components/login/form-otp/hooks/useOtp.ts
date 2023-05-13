import { useState } from "react";

function useOTP() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const procedOTP = async () => {
    try {
      // fetch api

      // const response = await fetch(api, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(body),
      // });
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      // const data = await response.json();

      return "fetch data";
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const callbackCountdown = () => {
    console.log("callback");
  };

  return {
    loading,
    setLoading,
    procedOTP,
    showPassword,
    setShowPassword,
    callbackCountdown,
  };
}

export default useOTP;
