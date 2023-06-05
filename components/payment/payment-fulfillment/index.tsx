import {
  ListItem,
  OrderedList,
  Box,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { formatPrice, copyToClipboard } from "helpers/payment";
import { CopyIcon } from "@chakra-ui/icons";
import Modal from "./modal";
import { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import usePayment from "./hooks/usePayment";
import { useRouter } from "next/router";
const content = [
  // {
  //   label: "Total Pembayaran",
  //   type: "price",
  //   value: 1549000,
  // },
  {
    label: "Metode Pembayaran",
    type: "image",
    value: "/assets/payment/BRI_1685497356.png",
  },
  {
    label: "Nomor Rekening",
    type: "copy",
    value: "005001005261301",
  },
  {
    label: "Atas Nama",
    type: "text",
    value: "PT Serpul Teknologi Indonesia",
  },
];

const ValueRender = ({ type, value }) => {
  switch (type) {
    case "text":
      return <Text>{value}</Text>;
    case "image":
      return <Image src={value} alt={"value"} width={109} height={34} />;
    case "copy":
      return (
        <Flex alignItems={"center"} gap={3}>
          <Text>{value}</Text>
          <Flex
            cursor={"pointer"}
            onClick={() => copyToClipboard(value)}
            gap={1}
            p={1.5}
            rounded={"lg"}
            bg={"brand.500"}
            color={"white"}
          >
            <CopyIcon />
            <Box fontSize={"11px"}>Salin</Box>
          </Flex>
        </Flex>
      );
    case "price":
      return <Text>Rp. {formatPrice(value)}</Text>;
    default:
      return <p>not spesified</p>;
  }
};

export default function PaymentFulfilment() {
  const { data, payConf } = usePayment();
  const router = useRouter();

  // const getTotalPrice = () => {
  //   return (
  //     49000 +
  //     [].reduce((accumulator, currentObject) => {
  //       return accumulator + currentObject.price;
  //     }, 0)
  //   );
  // };

  useEffect(() => {
    payConf(router.query.invoice_id);
  }, []);

  console.log(data, "data");
  return (
    <Box>
      <Box
        borderRadius={"20px"}
        flexDirection={"column"}
        mb={"32px"}
        bg={"gray.100"}
        py={"28px"}
        px={"41px"}
        fontSize={"16px"}
        fontWeight={600}
      >
        <Flex
          mb={"16px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text flex={1}>Total Pembayaran</Text>
          <Box flex={1}>
            <Text>Rp. {formatPrice(data?.total_price)}</Text>
          </Box>
        </Flex>
        {content?.map((item, index) => (
          <Flex
            alignItems={"center"}
            mb={index === content.length - 1 ? "0px" : "16px"}
            key={item.label}
            justifyContent={"space-between"}
          >
            <Text flex={1}>{item.label}</Text>
            <Box flex={1}>
              <ValueRender type={item.type} value={item.value} />
            </Box>
          </Flex>
        ))}
      </Box>

      {/* <Text mb={"15px"} fontSize={"17px"} fontWeight={600}>
        Petunjuk Pembayaran
      </Text> */}

      <Box px={5} mb={2}>
        {ReactHtmlParser(
          "<p><strong>Cara Pembayaran Melalui Bank Transfer (ATM) :</strong></p><ol><li>ATM BRI terdekat di kota anda.</li><li>Masukkan kartu ATM ke dalam mesin ATM seperti biasa.</li><li>Sesuaikan bahasa yang akan digunakan.</li><li>Masukkan nomor PIN ATM BRI anda.</li><li>Pilih Transaksi Lain.</li><li>Pilih Transfer.</li><li>Pilih BRI.</li><li>Masukkan nomor rekening BRI&nbsp;<strong>005001005261301 </strong>atas nama<strong> CV. Qiosfin Multipayment Indonesia</strong>, lalu pilih benar (jika rekening sudah benar).</li><li>Masukkan nominal transfer yang di minta (nominal transfer harus sesuai dengan yang di minta, termasuk 3 angka untuk di belakang nominal), pilih benar (pastikan jumlah nominal transfersudah benar).</li><li>Akan muncul informasi transfer, jika sudah benar selesaikan pembayaran anda.</li><li>Transfer Sukses.</li><li>Transfer Berhasil,&nbsp;selanjutnya konfirmasi pembayaran anda di detail deposit saldo larakost pulsa anda.</li><li>Saldo Qiosfin anda akan otomatis bertambah.</li></ol><p><strong>Cara Pembayaran Melalui Aplikasi BRIMO :</strong></p><ol><li>Buka Aplikasi Brimo</li><li>Masuk ke Menu “Transfer”</li><li>Pilih “Tambah Penerima”</li><li>Pilih Bank Tujuan “Bank BRI”</li><li>Masukkan nomor rekening BRI&nbsp;<strong>005001005261301 </strong>atas nama<strong> CV. Qiosfin Multipayment Indonesia</strong>, lalu pilih lanjutkan (jika rekening sudah benar).</li><li>Masukkan nominal transfer yang di minta (nominal transfer harus sesuai dengan yang di minta, termasuk 3 angka untuk di belakang nominal), pilih Transfer (pastikan jumlah nominal transfer sudah benar).</li><li>Transfer Sukses.</li><li>Transfer Berhasil,&nbsp;selanjutnya konfirmasi pembayaran anda di detail deposit saldo larakost pulsa anda.</li><li>Saldo Qiosfin anda akan otomatis bertambah.</li></ol><p><strong>Catatan Penting :</strong></p><ol><li>Deposit akan diproses secara otomatis oleh sistem jika dana sudah terbaca di mutasi rekening BRI.</li><li>Rata-rata proses deposit adalah kurang dari 15 menit (Pada Jam Normal Bank).</li><li>Deposit Saldo melalui Mesin EDC / BRILink akan H+1 (Keesokan harinya) setelah mengirimkan bukti pembayaran</li></ol>"
        )}
      </Box>
      {/* <OrderedList mb={"28px"} fontSize={"13px"}>
        {data.map((item, index) => {
          return (
            <>
              <ListItem key={index}>{item}</ListItem>
            </>
          );
        })}
      </OrderedList> */}
      <Modal />
    </Box>
  );
}
