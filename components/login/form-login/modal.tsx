import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";

// icon
import { WhatsappIcon } from "icons/whatsapp";
import { CheckmarkIcon } from "icons/checkmark";
import { EmailIcon } from "icons/email";

import { useRouter } from "next/router";

function ModalComp({ isOpen, onClose }) {
  const router = useRouter();
  const [switchValue, setSwitchValue] = useState([
    { value: "Whatsapp", active: true },
    { value: "Email", active: false },
  ]);

  function handleToggle(value) {
    const newSwitchValue = switchValue.map((item) => ({
      ...item,
      active: item.value === value,
    }));
    setSwitchValue(newSwitchValue);
  }

  const currentActiveValue = () => {
    return switchValue.filter((item) => item.active);
  };

  const selectIcon = (name) => {
    return name == "Whatsapp" ? <WhatsappIcon /> : <EmailIcon />;
  };

  const handleSelect = () => {
    router.push("/login/otp?type=" + currentActiveValue()[0].value);
  };

  return (
    <>
      <Modal size={"sm"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pilih Metode Verifikasi</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={"16px"}>
              Lorem ipsum dolor sit amet consectetur. Molestie placerat ultrices
              malesuada.
            </Text>

            {switchValue.map(({ value, active }) => (
              <Flex
                key={value}
                p={3}
                mb={2}
                justify={"space-between"}
                align={"center"}
                onClick={() => handleToggle(value)}
                cursor={"pointer"}
                border={"1px solid"}
                borderRadius={"10px"}
                borderColor={active ? "brand.500" : "gray.300"}
                _hover={{
                  borderColor: "brand.500",
                }}
              >
                <Flex gap={2} align={"center"}>
                  {selectIcon(value)}
                  <Text>{value}</Text>
                </Flex>

                {!active ? (
                  <Box
                    w={"20px"}
                    h={"20px"}
                    border={"1px solid"}
                    borderRadius={"50%"}
                    borderColor={"gray.300"}
                  />
                ) : (
                  <CheckmarkIcon />
                )}
              </Flex>
            ))}
          </ModalBody>

          <ModalFooter>
            <Flex gap={4} w={"full"}>
              <Button w={"full"} variant={"outline"} onClick={onClose}>
                Batal
              </Button>
              <Button w={"full"} onClick={handleSelect}>
                Pilih
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComp;
