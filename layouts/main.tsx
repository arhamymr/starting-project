import { Container } from "@chakra-ui/react";
import { Navbar } from "organisms";
import { Box } from "@chakra-ui/react";
import Cube from "atoms/cube";

export default function Main({ children }) {
  return (
    <>
      <Navbar />
      <Box pos="absolute" zIndex={-1} w={'50vw'} h={'100vh'} right={0}>
        <Cube />
      </Box>
      <Container maxW={'container.lg'}>
        {children}
      </Container>
    </>
  )
}
