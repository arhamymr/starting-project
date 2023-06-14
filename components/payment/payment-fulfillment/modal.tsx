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
import Link from "next/link";
import usePayment from "./hooks/usePayment";
import { useToast } from "@chakra-ui/react";

function ModalComp() {
  const { payInvoice, loading } = usePayment();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handlePay = async () => {
    try {
      await payInvoice();
      onOpen();
    } catch (error) {
      toast({
        // title: "",
        description: error.data.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Button isLoading={loading} w={"full"} onClick={handlePay}>
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
              <Link href={"/"}>
                <Button width={"252px"} onClick={onClose}>
                  Ok, Mengerti
                </Button>
              </Link>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComp;
