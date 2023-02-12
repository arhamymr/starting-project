import { Container } from "@chakra-ui/react";
import { Navbar, Footer } from "views";

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
