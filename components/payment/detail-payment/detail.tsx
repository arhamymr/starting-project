import { useState, useContext } from "react";
import {
  Box,
  Input,
  Text,
  Flex,
  Button,
  IconButton,
  Link,
} from "@chakra-ui/react";
import StepperComp from "./stepper";
import { Divider } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { PaymentContext } from "contents/payment/context";
import { CouponSuccesIcon } from "icons/coupon-success";
import { CouponFailedIcon } from "icons/coupon-failed";

function formatPrice(price) {
  const formattedPrice = new Intl.NumberFormat("id-ID").format(price);
  return formattedPrice;
}

const ButtonCoupon = () => {
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value.toUpperCase());
  };

  return (
    <Flex mb={"16px"} gap={"14px"} justifyContent={"space-between"}>
      <Input
        placeholder={"Kode Kupon (Opsional)"}
        fontSize={"14px"}
        fontWeight={!value ? "normal" : "bold"}
        onChange={handleChange}
        value={value}
      />
      {!validated ? (
        <Button
          onClick={() => setValidated(!validated)}
          fontSize={"14px"}
          width={"155px"}
        >
          {" "}
          Gunakan{" "}
        </Button>
      ) : (
        <IconButton
          onClick={() => setValidated(!validated)}
          width={"180px"}
          colorScheme="green"
          aria-label="validated"
          icon={<CheckIcon />}
        />
      )}
    </Flex>
  );
};

export default function DetailPayment() {
  const { context, setContext } = useContext(PaymentContext);

  console.log(context);
  return (
    <Box>
      <Text mb={"14px"} fontSize={"17px"} fontWeight={600}>
        Rincian Pembayaran
      </Text>

      <Flex justifyContent={"space-between"}>
        <Text>Biaya Pembuatan Aplikasi</Text>
        <Text fontWeight={600}>Rp. {formatPrice(12000000)}</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Text>Biaya Langganan/bulan</Text>
        <Text fontWeight={600}>Rp. {formatPrice(49000)}</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Text>Paket Branding</Text>
        <Text fontWeight={600}>Rp. {formatPrice(1500000)}</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Text>Pajak 11% & Biaya Tambahan</Text>
        <Text fontWeight={600}>Rp. {formatPrice(10000)}</Text>
      </Flex>
      <Divider mt={"13px"} mb={"16px"} />

      <ButtonCoupon />

      <Flex
        alignItems={"center"}
        mb={"16px"}
        bg={"red.100"}
        rounded={"md"}
        py={2.5}
        px={2}
        gap={2}
      >
        <CouponFailedIcon />
        <Text fontSize={"12px"}>
          Kode kupon tidak tersedia. SIlahkan coba lagi!
        </Text>
      </Flex>

      <Flex
        alignItems={"center"}
        mb={"16px"}
        bg={"orange.100"}
        rounded={"md"}
        py={2.5}
        px={2}
        gap={2}
      >
        <CouponSuccesIcon />
        <Text fontSize={"12px"}>
          Yeay! Kamu berhasil menghemat Rp 10.451.000
        </Text>
      </Flex>

      <Flex justifyContent={"space-between"}>
        <Text>Diskon</Text>
        <Text>Rp. -{formatPrice(100000)}</Text>
      </Flex>

      <Flex mb={"16px"} justifyContent={"space-between"}>
        <Text>Metode Pembayaran</Text>
        <Text>Belum Dipilih</Text>
      </Flex>

      <Flex mb={"16px"} fontWeight={600} justifyContent={"space-between"}>
        <Text fontSize={"17px"}>Total Pembayaran</Text>
        <Text fontSize={"17px"}>Rp. {formatPrice(1500000)}</Text>
      </Flex>

      <Text>
        Dengan melakukan pembayaran, maka saya menyetuji{" "}
        <Link
          fontWeight={500}
          as={NextLink}
          target={"_blank"}
          href={"/terms-and-conditions"}
        >
          Syarat dan Ketentuan
        </Link>{" "}
        yang ditetapkan oleh Serpul.co.id
      </Text>
    </Box>
  );
}
