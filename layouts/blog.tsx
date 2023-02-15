import React, {ReactNode} from 'react';
import { Container } from "@chakra-ui/react";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Breadcrumb from 'components/breadcrumb';

interface IProps {
  children: ReactNode,
  breadcrumb?: {
    link: string;
    name: string;
  }[]
}

export default function Blog({ children, breadcrumb } : IProps) {
  return (
    <>
      <Navbar />
      <Container maxW={'container.lg'} py={100}>
        { !!breadcrumb?.length ? <Breadcrumb data={breadcrumb}/> : null} 
        {children}
      </Container>
      <Footer />
    </>
  )
}
