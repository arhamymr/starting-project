import { Text, Box, Progress, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function CountdownTimer({ hours }) {
  const [timeRemaining, setTimeRemaining] = useState(hours * 3600 * 1000); // Convert hours to milliseconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1000); // Subtract one second from timeRemaining every second
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function to clear the interval when the component unmounts
  }, []);

  const remainingHours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const remainingMinutes = Math.floor(
    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
  );
  const remainingSeconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <Flex gap={"27px"} alignItems={"center"}>
      <Center flexDirection={"column"}>
        <Text
          fontSize={"24px"}
          fontWeight={"bold"}
          px={4}
          py={1}
          rounded={"md"}
          bg={"gray.100"}
          mb={"7px"}
        >
          {remainingHours}
        </Text>
        <Text fontWeight={600} fontSize={"13px"}>
          Jam
        </Text>
      </Center>
      <Center flexDirection={"column"}>
        <Text
          fontSize={"24px"}
          fontWeight={"bold"}
          px={2}
          py={1}
          rounded={"md"}
          bg={"red.100"}
          color={"red.500"}
          mb={"7px"}
        >
          {remainingMinutes}
        </Text>
        <Text fontWeight={600} fontSize={"13px"}>
          Menit
        </Text>
      </Center>
      <Center flexDirection={"column"}>
        <Text
          fontSize={"24px"}
          fontWeight={"bold"}
          px={2}
          py={1}
          rounded={"md"}
          bg={"red.100"}
          mb={"7px"}
          color={"red.500"}
        >
          {remainingSeconds}
        </Text>
        <Text fontWeight={600} fontSize={"13px"}>
          Detik
        </Text>
      </Center>
    </Flex>
  );
}

export default function CountDown() {
  return (
    <Center flexDirection={"column"}>
      <Image
        src={"/assets/payment/countdown.png"}
        alt={"Countdown"}
        width={230}
        height={180}
      />
      <Text mb={"31px"} fontSize={"15px"} textAlign={"center"} fontWeight={600}>
        Yuk bayar sebelum!
      </Text>
      <CountdownTimer hours={6} />
      <Text mt={"27px"} maxW={"214px"} textAlign={"center"}>
        Harap segera lakukan pembayaran sebelum batas waktu yang ditentukan yah!
      </Text>
    </Center>
  );
}
