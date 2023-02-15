import { Grid, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  title?: string;
  children: ReactNode;
}

export default function Container({ title, children }: IProps) {
  return (
    <>
      <Heading as={"h2"} mb={12}>
        {" "}
        {title}{" "}
      </Heading>
      <Grid
        mb={12}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={6}
      >
        {children}
      </Grid>
    </>
  );
}
