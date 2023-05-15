import { Box, Text, Center } from "@chakra-ui/react";
import Benefit from "components/payment/benefit";
import AddPackage from "components/payment/add-package";
import Image from "next/image";

const ConfigPackage = () => {
  return (
    <>
      <Center p={"34px"} flexDirection={"column"}>
        <Image
          width={210}
          height={123}
          src={"/assets/payment/config-package/config-package.png"}
          alt={"head icon"}
        />
        <Text mb={"32px"}>
          Mulai Buat Aplikasi Impianmu Hanya dengan Klik dan Klik
        </Text>
      </Center>
      <Box>
        <Text mb={"25px"} fontSize={"15px"} fontWeight={600}>
          1. Tambah Paket Spesial Khusus Untuk Kamu
        </Text>
        <AddPackage />
      </Box>
      <Box>
        <Text mb={"25px"} fontSize={"15px"} fontWeight={600}>
          2. Benefit yang Kami Tawarkan
        </Text>
        <Benefit />
      </Box>
    </>
  );
};

export default ConfigPackage;
