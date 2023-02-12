import { Grid, Heading } from "@chakra-ui/react";

export default function Container({ title, children}) {
  return (
    <>
      <Heading as={"h2"} mb={12}> {title} </Heading>
      <Grid 
        mb={12} 
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} 
        gap={6}>
        {children}
      </Grid>
    </>
  )
}
