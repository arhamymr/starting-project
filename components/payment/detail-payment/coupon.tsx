import { useState, useContext } from "react";
import { Input, Flex, Button, Text, IconButton } from "@chakra-ui/react";
import { CouponFailedIcon } from "icons/coupon-failed";
import { CouponSuccesIcon } from "icons/coupon-success";

import { CheckIcon } from "@chakra-ui/icons";
import useCoupon from "./hooks/useCoupon";
import { PaymentContext } from "contents/payment/context";

const Coupon = () => {
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState("");
  const { validateCoupon } = useCoupon();
  const { context, setContext } = useContext(PaymentContext);

  const handleChange = (e) => {
    setValue(e.target.value.toUpperCase());
  };

  const handleCoupon = async () => {
    const formData = new FormData();
    formData.append("voucher", value);
    try {
      const data = await validateCoupon(formData);
      setContext({
        ...context,
        paymentDetail: {
          ...context.paymentDetail,
          discount: data,
        },
      });
      setValidated(true);
    } catch (error) {
      setValidated(false);
    }
  };

  return (
    <>
      <Flex mb={"16px"} gap={"14px"} justifyContent={"space-between"}>
        <Input
          placeholder={"Kode Kupon (Opsional)"}
          fontSize={"14px"}
          fontWeight={!value ? "normal" : "bold"}
          onChange={handleChange}
          value={value}
        />
        {!validated ? (
          <Button onClick={handleCoupon} fontSize={"14px"} width={"155px"}>
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
      {!validated ? (
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
      ) : (
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
      )}
    </>
  );
};

export default Coupon;
