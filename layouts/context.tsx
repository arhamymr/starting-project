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
export const NavbarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeNavItem, setActiveNavItem] = useState("#product");

  return (
    <NavbarContext.Provider value={{ activeNavItem, setActiveNavItem }}>
      {children}
    </NavbarContext.Provider>
  );
};
