import { Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import Image from "next/image";

const icons = ["test", "test"];

const Logo = () => {
  return (
    <Image
      src={"/assets/logo-white.png"}
      alt={"logo"}
      width={133}
      height={28}
    />
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"brand.500"} color={"white"}>
      <Container as={Stack} maxW={"6xl"} py={10} fontSize={"14px"}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize={"sm"}>PT Serpul Teknologi Indonesia</Text>
            <Text fontSize={"sm"}>
              Jln. Puri Asri Raya, Tamalanrea Indah, Kec. Tamalanrea, Kota
              Makassar, Sulawesi Selatan 90245.
            </Text>
            <Text fontSize={"sm"}>2023 | Serpul.co.id by Yuscorp</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Perusahaan</ListHeader>
            <a href={"#"}>Tentang</a>
            <a href={"#"}>FAQ</a>
            <a href={"#"}>Syarat dan Ketentuan</a>
            <a href={"#"}>Loker</a>
            <a href={"#"}>Blog</a>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Informasi Produk</ListHeader>
            <a href={"#"}>Produk</a>
            <a href={"#"}>Add-On</a>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Hubungi Kami</ListHeader>
            <a href={"#"}>+6281354444604</a>
            <a href={"#"}>+serpul@yuscorp.co.id</a>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
