import { Box, Heading, Center, Text, Link } from "@chakra-ui/react";
import FormReset from "components/login/form-reset";
import SplitScreen from "layouts/split-screen";
import Logo from "../logo";

import NextLink from "next/link";

const Login = () => {
  return (
    <SplitScreen>
      <Box width={"full"} maxW={"414px"}>
        <Logo />
        <Heading as="h1" size="md">
          Atur Ulang Password
        </Heading>
        <Text mb={"24px"}>Silahkan atur ulang password baru</Text>
        <FormReset />
        <Center>
          <Link as={NextLink} href="/login">
            Kembali Ke Login
          </Link>
        </Center>
      </Box>
    </SplitScreen>
  );
};

export default Login;
