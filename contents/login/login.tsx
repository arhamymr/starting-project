import { Box, Heading } from "@chakra-ui/react";
import FormLogin from "components/login/form-login";
import SplitScreen from "layouts/split-screen";
import Logo from "../logo";

const Login = () => {
  return (
    <SplitScreen>
      <Box width={"full"} maxW={"414px"}>
        <Logo />
        <Heading as="h1" size="md" mb={"32px"}>
          Masuk Ke Dashboard
        </Heading>
        <FormLogin />
      </Box>
    </SplitScreen>
  );
};

export default Login;
