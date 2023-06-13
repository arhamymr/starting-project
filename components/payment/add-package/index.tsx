import { Center, Flex } from "@chakra-ui/react";

import Card from "../card";
import usePackage from "./hooks/usePackage";
import { useEffect, useState, useContext } from "react";
import { PaymentContext } from "contents/payment/context";

const NavNumber = ({ children, active = false, onClick }) => {
  return (
    <Center
      h={"24px"}
      color={active ? "black" : "white"}
      w={"24px"}
      rounded={"md"}
      cursor={"pointer"}
      onClick={onClick}
      boxShadow={"md"}
      bg={active ? "white" : "brand.500"}
    >
      {children}
    </Center>
  );
};

export default function CardList() {
  const { data, getPackage } = usePackage();
  const [currentPage, setCurrentPage] = useState(1);
  const { context } = useContext(PaymentContext);

  useEffect(() => {
    getPackage(currentPage);
  }, [currentPage]);

  const handleChangePage = (p) => {
    setCurrentPage(p);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= data?.last_page; i++) {
      pageNumbers.push(
        <NavNumber
          key={i}
          onClick={() => handleChangePage(i)}
          active={currentPage === i ? false : true}
        >
          {i}
        </NavNumber>
      );
    }
    return pageNumbers;
  };

  const checkNameExists = (nameToCheck) => {
    return context?.paymentDetail?.package?.some(
      (obj) => obj.name === nameToCheck
    );
  };

  return (
    <Center
      borderRadius={"20px"}
      flexDirection={"column"}
      mb={"32px"}
      bg={"gray.100"}
      py={"28px"}
      px={"41px"}
    >
      <Center
        gap={{ base: 3, md: 12 }}
        flexDirection={{ base: "column", md: "row" }}
      >
        {data?.data?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            discount={item.discount}
            price={item.price}
            selected={checkNameExists(item.title)}
          />
        ))}
      </Center>

      <Flex gap={"11px"} fontSize={"12px"}>
        {renderPageNumbers()?.map((item) => item)}
      </Flex>
    </Center>
  );
}
