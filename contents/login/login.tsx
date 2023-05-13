import { Box, Heading, Center } from "@chakra-ui/react";
import FormLogin from "components/login/form-login";
import SplitScreen from "layouts/split-screen";
import Image from "next/image";

const Login = () => {
  return (
    <SplitScreen>
      <Box width={"full"} maxW={"414px"}>
        <Center mb={"46px"}>
          <Image src="/assets/logo.png" width={205} height={42} alt="logo" />
        </Center>
        <Heading as="h1" size="md" mb={"32px"}>
          Masuk Ke Dashboard
        </Heading>
        <FormLogin />
      </Box>
    </SplitScreen>
  );
};

export default Login;
