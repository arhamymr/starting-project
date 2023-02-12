import { Container } from "@chakra-ui/react";
import Navbar from "components/navbar";
import Footer from "components/footer";

export default function Blog({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW={'container.lg'} py={100}>
        {children}
      </Container>
      <Footer />
    </>
  )
}
