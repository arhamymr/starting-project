import React, { useEffect } from "react";
import { Center, Text, Flex, Box } from "@chakra-ui/react";
import useCountdown from "./hooks/useCountDown";

const CountDown = () => {
  const callbackCountdown = () => {
    console.log("count end");
  };

  const COUNTDOWN = 30;
  const { count, startCountdown, handleCountDown, isLoading } = useCountdown(
    COUNTDOWN,
    callbackCountdown
  );

  useEffect(() => {
    startCountdown();
  }, []);

  return (
    <Center>
      {count !== "00" ? (
        <Flex justify={"center"} gap={1} align={"center"}>
          <Text>Kirim Ulang Kode dalam </Text>
          <Box>
            <Text
              px={1.5}
              py={1}
              borderRadius={8}
              bgColor={"brand.100"}
              color={"brand.500"}
              fontWeight={"bold"}
              fontSize={"12px"}
            >
              00:{count}
            </Text>
          </Box>
        </Flex>
      ) : (
        <Text
          onClick={handleCountDown}
          cursor={"pointer"}
          fontWeight={"bold"}
          color={"brand.500"}
        >
          {isLoading ? "Mengirim ulang kode" : "Kirim Ulang Kode"}
        </Text>
      )}
    </Center>
  );
};

export default CountDown;
