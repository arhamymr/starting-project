import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
  Text,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";

function ModalComp() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button w={"full"} onClick={onOpen}>
        Saya Sudah Bayar
      </Button>
      <Modal size={"md"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Center p={"29px"} flexDirection={"column"}>
              <Text
                textAlign={"center"}
                mb={"16px"}
                fontSize={"17px"}
                fontWeight={"bold"}
              >
                Terimakasih, Telah melakukan konfirmasi pembayaran
              </Text>
              <Image
                src={"/assets/payment/confirm-payment.png"}
                width={77}
                height={81}
                alt={"confirm payment"}
              />
              <Text
                mb={"21px"}
                textAlign={"center"}
                fontSize={"14px"}
                fontWeight={600}
              >
                {" "}
                Setelah pembayaran berhasil masuk, kami akan mengirimkan link
                dashboard tenant paling lambat 1x24 jam di Email dan WhatsAppmu.
                Jangan lupa dicek secara berkala yah!
              </Text>
              <Button width={"252px"} onClick={onClose}>
                Ok, Mengerti
              </Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComp;
