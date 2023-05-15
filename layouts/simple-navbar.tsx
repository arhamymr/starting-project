import { Container, Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box zIndex={99} bg={"white"} py={5} position={"sticky"} top={0}>
      <Container bg={"white"} maxW="1150px">
        <Link href={"/"}>
          <Image
            height={28}
            width={132}
            src={"/assets/logo.png"}
            alt={"logo"}
          />
        </Link>
      </Container>
    </Box>
  );
};

export default Navbar;
