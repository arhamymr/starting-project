import { Container, Box } from "@chakra-ui/react";
import Navbar from "components/navbar";
import Footer from "components/footer";
import FloatingButton from "./floating-button";
import { createContext, useState } from "react";

// Create the navbar context
interface NavbarContextProps {
  activeNavItem: string;
  setActiveNavItem: React.Dispatch<React.SetStateAction<string>>;
}

// Create the navbar context
export const NavbarContext = createContext<NavbarContextProps | undefined>(
  undefined
);

// Create the navbar context provider component
const NavbarContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeNavItem, setActiveNavItem] = useState("#product");

  return (
    <NavbarContext.Provider value={{ activeNavItem, setActiveNavItem }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default function Main({ children }) {
  return (
    <NavbarContextProvider>
      <Box overflow={"hidden"}>
        <Navbar />
        <Box id={"hero"} />
        {children}
        <Footer />
        <FloatingButton />
      </Box>
    </NavbarContextProvider>
  );
}
