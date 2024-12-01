import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import Image from 'next/image';
import { WhatsappFillIcon } from 'icons/whatsapp';
import { EmailIcon } from 'icons/email-fill';

import { InstagramIcon } from 'icons/ig';
import { FacebookIcon } from 'icons/fb';
import { TelegramIcon } from 'icons/telegram';
import { LinkedinIcon } from 'icons/linkedin';
import Link from 'next/link';

const Logo = () => {
  return (
    <Image
      src={'/assets/logo-white.png'}
      alt={'logo'}
      width={133}
      height={28}
    />
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={'brand.500'} color={'white'}>
      <Container as={Stack} maxW={'6xl'} py={10} fontSize={'14px'}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Text fontSize={'sm'}>
              Selamat datang di MyHealthDiet, platform bisnis konsultasi online
              yang dirancang untuk membantu Anda mencapai tujuan diet gizi yang
              optimal. Di sini, kami menyajikan layanan profesional yang
              integratif, termasuk resep modifikasi makanan yang lezat dan
              sehat, serta rekomendasi aktivitas fisik yang efektif.
            </Text>
          </Stack>

          <Stack align={'flex-start'} gap={1}>
            <ListHeader>Hubungi Kami</ListHeader>
            <HStack>
              <WhatsappFillIcon />
              <a
                href={
                  'https://api.whatsapp.com/send/?phone=6281936654547&text=selamat pagi/siang/malam, saya ingin berkonsultasi tentang diet saya. Nama saya (nama anda)=selamat pagi/siang/malam, saya ingin berkonsultasi tentang diet saya. Nama saya (nama anda)=&type=phone_number&app_absent=0'
                }
                target="_blank"
              >
                +6281936654547
              </a>
            </HStack>
            <HStack>
              <EmailIcon />
              <a target="_blank" href={'mailto:myhealth.diet28@gmail.com'}>
                myhealth.diet28@gmail.com
              </a>
            </HStack>

            <HStack>
              <InstagramIcon />
              <a
                href={'https://www.instagram.com/myhealth_diet/'}
                target="_blank"
              >
                {' '}
                myhealth_diet
              </a>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
