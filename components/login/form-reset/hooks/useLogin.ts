import { useState } from "react";

function useLogin() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const procedLogin = async () => {
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

  return {
    loading,
    setLoading,
    procedLogin,
    showPassword,
    setShowPassword,
  };
}

export default useLogin;
