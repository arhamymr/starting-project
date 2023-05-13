import { Box, Heading, Center, Text } from "@chakra-ui/react";
import FormOTP from "components/login/form-otp";
import SplitScreen from "layouts/split-screen";
import Image from "next/image";

const LoginOTP = () => {
  return (
    <SplitScreen>
      <Box width={"full"} maxW={"500px"}>
        <Center mb={"46px"}>
          <Image src="/assets/logo.png" width={205} height={42} alt="logo" />
        </Center>
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
