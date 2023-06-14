import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import Image from "next/image";
import { WhatsappFillIcon } from "icons/whatsapp";
import { EmailIcon } from "icons/email-fill";

import { InstagramIcon } from "icons/ig";
import { FacebookIcon } from "icons/fb";
import { TelegramIcon } from "icons/telegram";
import { LinkedinIcon } from "icons/linkedin";
import Link from "next/link";
import SmoothScrollLink from "components/navbar/smothlink";

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
            <Text fontSize={"sm"}>
              © 2017 - {new Date().getFullYear()} | PT Serpul Teknologi
              Indonesia <br />
              by Yuscorp Ecosystem
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Perusahaan</ListHeader>
            <a href={"#"}>Tentang</a>
            <a href={"#faq"}>FAQ</a>
            <Link href={"/terms-and-conditions"}>Syarat dan Ketentuan</Link>
            <a href={"#"}>Loker</a>
            <a href={"#"}>Blog</a>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Informasi Produk</ListHeader>
            <SmoothScrollLink targetId={"#product"}>
              <Text>Product</Text>
            </SmoothScrollLink>
            <SmoothScrollLink targetId={"#add-on"}>
              <Text>Add-on</Text>
            </SmoothScrollLink>
          </Stack>
          <Stack align={"flex-start"} gap={1}>
            <ListHeader>Hubungi Kami</ListHeader>
            <HStack>
              <WhatsappFillIcon />
              <a
                href={
                  "https://api.whatsapp.com/send/?phone=6281354444604&text&type=phone_number&app_absent=0"
                }
                target="_blank"
              >
                +6281354444604
              </a>
            </HStack>
            <HStack>
              <EmailIcon />
              <a target="_blank" href={"mailto:serpul@yuscorp.co.id"}>
                serpul@yuscorp.co.id
              </a>
            </HStack>
            <HStack gap={"24px"}>
              <a href={"https://www.instagram.com/serpulcoid/"} target="_blank">
                <InstagramIcon />
              </a>
              <a href={"https://www.facebook.com/serpulcoid/"} target="_blank">
                <FacebookIcon />
              </a>
              <a href={"https://t.me/sahabatserpul"} target="_blank">
                <TelegramIcon />
              </a>
              <a
                href={"https://www.linkedin.com/company/yuscorp"}
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
