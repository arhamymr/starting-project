import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedPage = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check authentication status or token validity
    const isAuthenticated = checkAuthentication(); // Replace with your authentication logic

    if (!isAuthenticated) {
      router.push("/register"); // Redirect to login page if not authenticated
    }
  }, []);

  return <div>{children}</div>;
};

const checkAuthentication = () => {
  // Check if the user is authenticated
  const token = localStorage.getItem("at"); // Retrieve the token from localStorage

  // Perform authentication validation
  return token !== null;
};

export default ProtectedPage;
