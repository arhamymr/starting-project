import {
  Box,
  Heading,
  Text,
  Center,
  Container,
  Divider,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const data = [
  {
    ask: "Apa itu serpul.co.id?",
    answer:
      "PT Serpul Teknologi Indonesia merupakan perusahaan yang bergerak  dibidang  H2H Payment Point Online Bank yang menyediakan  produk digital dan PPOB terlengkap dengan harga termurah. Seperti pulsa, paket data, token PLN, voucher game, BPJS,  indihome, dan lainnya.",
  },
  {
    ask: "Apakah ada biaya lain yang harus saya siapkan selain biaya upgrade dan berlangganan?",
    answer:
      "Ada, apabila kamu menambahkan Add-On atau template maka akan dikenakan biaya tambahan.  Terkait dengan Add-On dan template yang tersedia di Serpul.co.id dapat kamu akses disini.",
  },
  {
    ask: "Siapa saja yang bisa menggunakan serpul.co.id?",
    answer:
      "Semua pihak dapat menggunakan serpul.co.id. Baik itu secara perorangan, organisasi, startup, ataupun perusahaan yang dapat disesuaikan dengan kebutuhan.  Contohnya apabila kamu berasal dari perusahaan yang bergerak dibidang travel, maka kamu dapat membuat aplikasi dengan menambahkan Add-On jadwal shalat, panduan haji dan umroh, ataupun lainnya. Kemudian setiap aplikasi yang kamu buat telah terintegrasi dengan produk PPOB (Pulsa, paket data, voucher, dan lain-lain) di dalamnya. Sehingga dapat kamu manfaatkan hal tersebut untuk memperoleh keuntungan melalui proses jual beli.",
  },
  {
    ask: "Bagaimana cara membuat aplikasi di serpul.co.id?",
    answer:
      "Hal pertama yang harus kamu lakukan untuk membuat aplikasi adalah melakukan proses pendaftaran terlebih dahulu di halaman website serpul.co.id. Kemudian melakukan proses pembayaran dengan biaya berlangganan sebesar Rp. 49.000/bulan. Setelah proses pembayaran sukses dilakukan, nantinya kamu akan di arahkan ke halaman dashboard. Nah di halaman ini, kamu bisa memilih menu aplikasi di bagian sidebar untuk melakukan proses pembuatan aplikasi. Informasi lebih lanjut terkait pembuatan aplikasi dapat kamu akses melalui video demo disini.",
  },
  {
    ask: "Setelah saya melakukan customize aplikasi di serpul.co.id, apakah sudah langsung terunggah di playstore?",
    answer:
      "Tidak, kamu harus mengunggah sendiri atau menggunakan jasa agar aplikasi yang telah kamu buat di serpul.co.id dapat diunggah di Playsote. Namun kamu tidak perlu khawatir, karena kami menyediakan jasa untuk mengunggah aplikasi di Playstore yaitu “Digitalkan”.  Terkait informasi lebih lanjut mengenai “Digitalkan” dapat kamu akses disini.",
  },
  {
    ask: "Bagaimana cara menjual dan memperoleh keuntungan lewat aplikasi yang telah saya buat di serpul.co.id?",
    answer: (
      <Box>
        <Text fontWeight={"bold"}>1. Cara Menjual Pulsa </Text>
        <Text>
          Hal pertama yang harus dilakukan untuk menjual pulsa lewat aplikasi
          yang telah kamu buat di serpul.co.id adalah memilih dan menentukan
          server pulsa. Server pulsa merupakan penyedia deposit saldo dan yang
          akan mengisi pulsa ke nomor pelanggan kamu. Setelah menentukan server,
          silahkan melakukan proses pendaftaran dan deposit. Salah satu penyedia
          server pulsa dengan kualitas terbaik yang dapat kami tawarkan yaitu
          Yuscom, yang dapat kamu akses lebih lanjut informasinya melalui link
          berikut...... Setelah selesai melakukan deposit saldo di server pulsa,
          selanjutnya adalah menentukan harga untuk produk pulsa yang kamu
          tawarkan. Terakhir, jangan lupa untuk melakukan promosi agar kamu
          dapat menjangkau pelanggan lebih banyak. Apabila terkendala dalam hal
          promosi secara online, kamu dapat memanfaatkan “Digitalkan” sebagai
          media promosi digital marketing terbaik.{" "}
        </Text>
        <Text fontWeight={"bold"}>
          2. Cara memperoleh Keuntungan Keuntungan
        </Text>
        <Text>
          dapat diperoleh melalui hasil transaksi sukses yang di lakukan oleh
          pengguna diaplikasi kamu. Sistem keuntungannya didapatkan melalui
          margin perproduk yang bisa kamu tentukan sendiri sesuai keinginan.
        </Text>
      </Box>
    ),
  },
];
export default function FAQ() {
  return (
    <Box pb={"60px"} id={"faq"}>
      <Center flexDirection={"column"} pt={"136px"}>
        <Heading
          fontSize={{ base: "25px", md: "28px" }}
          mb={"31px"}
          textAlign={"center"}
          as={"h2"}
          maxW={700}
        >
          Pertanyaan yang Sering Diajukan
        </Heading>
      </Center>
      <Container pb={"60px"} maxW="1150px" position={"relative"}>
        <Accordion allowMultiple>
          {data.map((item) => (
            <AccordionItem
              p={"10px"}
              mb={"16px"}
              bg={"brand.100"}
              rounded={"md"}
              key={item.ask}
            >
              <h2>
                <AccordionButton>
                  <Flex w={"full"} align={"center"}>
                    <Text as={"div"} textAlign="left" fontWeight={700}>
                      {item.ask}
                    </Text>
                    <Spacer />
                    <AccordionIcon fontSize={"30"} color={"brand.500"} />
                  </Flex>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Divider my={2} />
                <Text as={"div"}>{item.answer}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
}
