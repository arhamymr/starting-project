import { Container } from "@chakra-ui/react";
import Navbar from "components/navbar";
import Footer from "components/footer";

export default function Main({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW={'container.lg'}>
        {children}
      </Container>
      <Footer />
    </>
  )
}
