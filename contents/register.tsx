import { Box, Center, Text } from "@chakra-ui/react";
import FormRegister from "components/register/form-register";
import SplitScreen from "layouts/split-screen";
import Logo from "./logo";

const Register = () => {
  return (
    <SplitScreen isCarousel={true}>
      <Box width={"full"} maxW={"500px"}>
        <Logo />
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
