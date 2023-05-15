import { Box, Heading, Center, Text, Link } from "@chakra-ui/react";
import FormForgetPassword from "components/login/form-forget-password";
import SplitScreen from "layouts/split-screen";
import Logo from "../logo";
import NextLink from "next/link";
const ForgetPassword = () => {
  return (
    <SplitScreen>
      <Box width={"full"} maxW={"414px"}>
        <Logo />
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
