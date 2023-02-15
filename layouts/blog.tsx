import React, { ReactNode } from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Breadcrumb from "components/breadcrumb";

interface IProps {
  children: ReactNode;
  size?: string;
  breadcrumb?: {
    link: string;
    name: string;
  }[];
}

export default function Blog({
  children,
  breadcrumb,
  size = "container.xl",
}: IProps) {
  return (
    <>
      <Navbar />
      <Container maxW={size} mb={250}>
        {!!breadcrumb?.length ? <Breadcrumb data={breadcrumb} /> : null}
        {children}
      </Container>
      <Footer />
    </>
  );
}
