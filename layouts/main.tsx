import { Container, Box } from "@chakra-ui/react";
import Navbar from "components/navbar";
import Footer from "components/footer";

export default function Main({ children }) {
  return (
    <Box overflow={"hidden"}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
