import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  Center,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

function ModalComp({ isOpen, onClose }) {
  return (
    <>
      <Modal size={"sm"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={6}>
          <ModalBody>
            <Center flexDirection={"column"}>
              <Text mb={"19px"} fontWeight={"bold"}>
                Yeay! Berhasil Masuk
              </Text>
              <Box mb={"22px"}>
                <Image
                  width={91}
                  height={84}
                  src="/assets/envelope.png"
                  alt="register success"
                />
              </Box>

              <Text mb={"25px"} textAlign={"center"}>
                Kamu telah berhasil masuk, nikmati kemudahan membuat aplikasi
                hanya dengan klik dan klik di serpul.co.id
              </Text>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Center w={"full"}>
              <Link href={"/payment"}>
                <Button w={"full"} onClick={onClose}>
                  Lanjutkan
                </Button>
              </Link>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComp;
