import { Center } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const LogoLogin = () => {
  return (
    <Center mb={"46px"}>
      <Link href={"/"}>
        <Image
          src="/assets/logo.png"
          quality={100}
          width={205}
          height={42}
          alt="logo"
        />
      </Link>
    </Center>
  );
};

export default LogoLogin;
