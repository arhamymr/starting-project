import { Box, Heading, Center, Text } from "@chakra-ui/react";
import FormOTP from "components/login/form-otp";
import SplitScreen from "layouts/split-screen";
import Logo from "../logo";

const LoginOTP = () => {
  return (
    <SplitScreen>
      <Box width={"full"} maxW={"500px"}>
        <Logo />
        <Heading as="h1" size="md">
          Masukkan Kode OTP
        </Heading>
        <Text mb={"32px"}>
          Kami telah mengirimkan kode OTP ke nomor{" "}
          <Box as={"span"} color={"brand.500"}>
            082312921637
          </Box>
        </Text>
        <FormOTP />
      </Box>
    </SplitScreen>
  );
};

export default LoginOTP;
