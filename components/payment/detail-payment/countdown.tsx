import { Text, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function CountdownTimer({ expired }) {
  const [timeRemaining, setTimeRemaining] = useState(expired); // Convert hours to milliseconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1000); // Subtract one second from timeRemaining every second
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [expired, timeRemaining]);

  useEffect(() => {
    setTimeRemaining(expired);
  }, [expired]);

  let remainingHours = Math.floor(timeRemaining / (1000 * 60 * 60));
  let remainingMinutes = Math.floor(
    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
  );
  let remainingSeconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

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
          color={"brand.500"}
        >
          {!!expired ? remainingHours : "00"}
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
          {!!expired ? remainingMinutes : "00"}
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
          {!!expired ? remainingSeconds : "00"}
        </Text>
        <Text fontWeight={600} fontSize={"13px"}>
          Detik
        </Text>
      </Center>
    </Flex>
  );
}

export default function CountDown({ expired }) {
  return (
    <Center flexDirection={"column"}>
      <Image
        src={"/assets/payment/countdown.png"}
        alt={"Countdown"}
        width={230}
        height={180}
      />
      <Text mb={"31px"} fontSize={"15px"} textAlign={"center"} fontWeight={600}>
        {!!expired ? "Yuk bayar sebelum!" : "Status Pembayaran Expired"}
      </Text>
      <CountdownTimer expired={expired} />
      <Text mt={"27px"} maxW={"214px"} textAlign={"center"}>
        {!!expired
          ? "Harap segera lakukan pembayaran sebelum batas waktu yang ditentukan yah!"
          : "Batas waktu tiket pembayaramu telah berakhir. Yuk daftar ulang paketmu!"}
      </Text>
    </Center>
  );
}
