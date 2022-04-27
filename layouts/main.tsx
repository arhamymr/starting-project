import { Container } from "@chakra-ui/react";
import { Navbar } from "organisms";

export default function Main({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW={'container.lg'}>
        {children}
      </Container>
    </>
  )
}
