import { Box } from "@chakra-ui/react";
import Navbar from "components/navbar";
import Footer from "components/footer";
import FloatingButton from "./floating-button";

export default function Main({ children }) {
  return (
    <Box overflow={"hidden"}>
      <Navbar />
      <Box id={"hero"} />
      {children}
      <Footer />
      <FloatingButton />
    </Box>
  );
}
