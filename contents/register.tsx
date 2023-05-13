import { Box, Center, Text } from "@chakra-ui/react";
import FormRegister from "components/register/form-register";
import SplitScreen from "layouts/split-screen";
import Image from "next/image";

const Register = () => {
  return (
    <SplitScreen isCarousel={true}>
      <Box width={"full"} maxW={"500px"}>
        <Center mb={"46px"}>
          <Image src="/assets/logo.png" width={205} height={42} alt="logo" />
        </Center>
        <Center>
          <Text mb={"32px"} textAlign={"center"}>
            Mulai Buat Aplikasi Impianmu Hanya Klik dan Klik
            <Box as={"span"} display={"block"} fontWeight={"bold"}>
              Yuk Isi Data Dirimu Sekarang!
            </Box>
          </Text>
        </Center>
        <FormRegister />
      </Box>
    </SplitScreen>
  );
};

export default Register;
