import { Button } from "@chakra-ui/react";

export default function ButtonComp({ children }) {
  return (
    <Button
      bg={"linear-gradient(180deg, #5055E3 0%, #575BD1 100%)"}
      rounded={"full"}
      fontSize={"16px"}
      _hover={{
        background: "linear-gradient(180deg, #5055E3 0%, #575BD1 100%)",
      }}
    >
      {children}
    </Button>
  );
}
