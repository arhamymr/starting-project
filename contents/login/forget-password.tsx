import { Box, Heading, Center, Text, Link } from "@chakra-ui/react";
import FormForgetPassword from "components/login/form-forget-password";
import SplitScreen from "layouts/split-screen";

import Image from "next/image";
import NextLink from "next/link";
const ForgetPassword = () => {
  return (
    <SplitScreen>
      <Box width={"full"} maxW={"414px"}>
        <Center mb={"46px"}>
          <Image src="/assets/logo.png" width={205} height={42} alt="logo" />
        </Center>
        <Heading as="h1" size="md">
          Lupa Password ?
        </Heading>
        <Text mb={"32px"}>
          Masukan nomor Whatsapp atau Email kamu yang terhubung ke akun serpul.
        </Text>
        <FormForgetPassword />
        <Center>
          <Link as={NextLink} href="/login">
            Kembali Ke Login
          </Link>
        </Center>
      </Box>
    </SplitScreen>
  );
};

export default ForgetPassword;
