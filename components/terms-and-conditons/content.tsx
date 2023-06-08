import { ListItem, OrderedList, Box, Text } from "@chakra-ui/react";

import { data } from "./data";
export default function Content() {
  return (
    <Box fontSize={"14px"}>
      <Text fontWeight={"bold"} mb={"14px"}>
        Konten
      </Text>
      <Text mb={"15px"} textAlign={"justify"}>
        Serpul adalah situs yang dikendalikan oleh PT. SERPUL TEKNOLOGI
        INDONESIA dan Holding PT YUSCORP BISNIS INDONESIA (YUSCORP) Dengan
        mengakses dan mendaftar menjadi anggota, Anda menyadari dan menyetujui
        setiap syarat dan ketentuan yang tertera di bawah ini. Harap
        diperhatikan kami dapat menambah, mengubah, dan menghapus syarat dan
        ketentuan sewaktu-waktu tanpa pemberitahuan sebelumnya. syarat dan
        ketentuan ini sekaligus juga mengubah atau memperbaharui pks, mou atau
        syarat dan ketentuan sebelumnya. Syarat dan Ketentuan perlu dibaca
        secara berkala. Selama Anda menggunakan situs www.serpul.co.id setelah
        ada perubahan syarat dan ketentuan, maka penggunaan situs berdasarkan
        kepatuhan pada syarat dan ketentuan terbaru.
      </Text>
      <OrderedList>
        {data.map((item, index) => {
          return (
            <>
              <ListItem
                textAlign={"justify"}
                fontWeight={"bold"}
                key={index}
                mb={"14px"}
              >
                {item.name}
              </ListItem>
              <OrderedList mb={"14px"}>
                {Array.isArray(item.content) ? (
                  item.content.map((item, index) => {
                    return (
                      <>
                        <ListItem
                          textAlign={"justify"}
                          listStyleType="none"
                          key={index}
                          mb={2}
                        >
                          {item}
                        </ListItem>
                      </>
                    );
                  })
                ) : (
                  <Text textAlign={"justify"}>{item.content}</Text>
                )}
              </OrderedList>
            </>
          );
        })}
      </OrderedList>
    </Box>
  );
}
