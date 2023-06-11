import { useContext, useEffect, useState } from "react";
import { Flex, Box, Text, Divider, Center } from "@chakra-ui/react";

// import { data } from "./data";
import Image from "next/image";

import { CheckIcon } from "@chakra-ui/icons";
import { PaymentContext } from "contents/payment/context";
import usePayment from "./hooks/usePayment";

const Item = ({ logo, label, payment_id, service_fee }) => {
  const { context, setContext } = useContext(PaymentContext);

  const handleSelect = () => {
    setContext({
      ...context,
      additional: {
        ...context.additional,
        other_fee: {
          value: service_fee,
        },
      },
      paymentDetail: {
        ...context.paymentDetail,
        paymentMethod: {
          bankName: label,
          payment_id,
        },
      },
    });
  };

  return (
    <Flex
      cursor={"pointer"}
      onClick={handleSelect}
      py={"18px"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Flex gap={3} alignItems={"center"} justifyContent={"center"}>
        <Image quality={100} src={logo} alt={label} width={108} height={40} />
        <Text>{label}</Text>
      </Flex>

      {context?.paymentDetail.paymentMethod.bankName === label ? (
        <Flex width={"60px"} justifyContent={"flex-end"}>
          <CheckIcon color={"green.500"} />
        </Flex>
      ) : (
        <Flex width={"60px"} justifyContent={"flex-end"}>
          <Text>Pilih</Text>
        </Flex>
      )}
    </Flex>
  );
};

// const QRIS = ({ data }) => {
//   const [select, setSelected] = useState(false);

//   console.log(data, "data");
//   return (
//     <>
//       <Text mb={"22px"} fontWeight={600}>
//         {data.title}
//       </Text>
//       <Flex
//         mb={"22px"}
//         bg={"gray.100"}
//         rounded={"lg"}
//         p={6}
//         alignItems={"center"}
//         cursor={"pointer"}
//         onClick={() => setSelected(!select)}
//       >
//         <Box flex={1}>
//           <Box>
//             <Text fontSize={"14px"} mb={3}>
//               Layanan QRIS bisa kamu gunakan untuk semua Bank, eWallet, ataupun
//               layanan provider yang memiliki fitur QRIS.{" "}
//               <Box as={"span"} color={"brand.500"}>
//                 Silahkan klik disini untuk melihat layanan yang menggunakan
//                 QRIS.
//               </Box>
//             </Text>
//             <Flex gap={"11px"} alignItems={"center"}>
//               {data.items.map((item, index) => (
//                 <Image
//                   key={index}
//                   src={item.logo}
//                   alt={item.label}
//                   width={89}
//                   height={32}
//                   style={{ objectFit: "contain" }}
//                 />
//               ))}
//               <Text textAlign={"center"} fontSize={"12px"}>
//                 30+
//                 <br />
//                 Layanan Lainnya
//               </Text>
//             </Flex>
//           </Box>
//         </Box>
//         {select ? (
//           <Flex width={"60px"} justifyContent={"flex-end"}>
//             <CheckIcon color={"green.500"} />
//           </Flex>
//         ) : (
//           <Flex width={"60px"} justifyContent={"flex-end"}>
//             <Text>Pilih</Text>
//           </Flex>
//         )}
//       </Flex>
//     </>
//   );
// };

const PaymentList = () => {
  const { data, getPaymentMethod } = usePayment();
  const { context, setContext } = useContext(PaymentContext);

  useEffect(() => {
    getPaymentMethod((d) => {
      setContext({
        ...context,
        paymentMethod: d,
      });
    });
  }, []);

  return (
    <Box mb={{ base: 0, md: "422px" }}>
      <Text mb={"22px"} fontWeight={600}>
        1. Transfer Bank
      </Text>
      <Box mb={"22px"} bg={"gray.100"} rounded={"lg"} px={6}>
        {data?.map((item, index) => (
          <Box key={index}>
            <Item
              payment_id={item.id}
              logo={item.payment_logo}
              label={item.payment_name}
              service_fee={item.biaya_layanan}
            />
            {/* {index !== data.items.length - 1 && <Divider />} */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default function PaymentMethod() {
  return (
    <Box rounded={"xl"}>
      <Text mb={"22px"}> Silahkan pilih metode pembayaran yang tersedia </Text>
      {/* {data.map((item) => (
        <Box key={item.title}>
          {item.title === "3. QRIS" ? (
            <QRIS data={item} />
          ) : (
            <PaymentList />
          )}
        </Box>
      ))} */}
      <PaymentList />
    </Box>
  );
}
