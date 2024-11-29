import {
  Box,
  Container,
  Heading,
  Text,
  Center,
  Card,
  Grid,
} from '@chakra-ui/react';
import ButtonComp from './button';
import Image from 'next/image';

const data = [
  {
    image: '/images/activities/1.jpg',
    title: 'Jalan Santai',
    description:
      'Waktu Tempuh  selama 30 menit. Manfaat yaitu dapat merilekskan tubuh',
  },
  {
    image: '/images/activities/1.jpg',
    title: 'Lari',
    description:
      'Waktu Tempuh selama20-30 menit. Manfaat yaitu meningkatkan kebugaran kardiovaskular dan membantu mengurangi stres',
  },
  {
    image: '/images/activities/1.jpg',
    title: 'Yoga',
    description:
      'Waktu Tempuh selama20-30 menit. Manfaat yaitu meningkatkan kebugaran kardiovaskular dan membantu mengurangi stres',
  },
  {
    image: '/images/activities/1.jpg',
    title: 'Bersepeda',
    description:
      'Waktu Tempuh selama 30-50 menit. Manfaat yaitu dapat meningkatkan daya tahan, membakar kalori, dan menjelajahi lingkungan',
  },
  {
    image: '/images/activities/1.jpg',
    title: 'Renang',
    description:
      'Waktu Tempuh selama 30-45 menit. Manfaat yaitu dapat latihan seluruh tubuh, baik untuk pemulihan cedera',
  },
  {
    image: '/images/activities/1.jpg',
    title: 'Senam Aerobik',
    description:
      'Waktu Tempuh selama 30-45 menit. Manfaat yaitu dapat meningkatkan kebugaran jantung dan membakar kalori dengan cara yang menyenangkan',
  },
  {
    image: '/images/activities/1.jpg',
    title: 'Latihan Kekuatan',
    description:
      'Waktu Tempuh selama 30-60 menit. Manfaat yaitu dapat membangun otot, meningkatkan metabolisme, dan memperkuat tulang',
  },
  {
    image: '/images/activities/1.jpg',
    title: 'HIIT (High-Intensity Interval Training)',
    description:
      'Waktu Tempuh selama 20-30 menit. Manfaat yaitu dapat membakar lemak dengan cepat dan meningkatkan kebugaran dalam waktu singkat',
  },
  {
    image: '/images/activities/1.jpg',
    title: 'Tim Olahraga (Sepak Bola, Basket, dll.)',
    description:
      'Waktu Tempuh selama 60-90 menit. Manfaat yaitu dapat meningkatkan kerjasama tim dan keterampilan sosial serta mempelajari keterampilan kardiovaskular',
  },
  {
    image: '/images/activities/1.jpg',
    title: 'Latihan Kekuatan',
    description:
      'Waktu Tempuh selama 30-60 menit, 2-3 kali seminggu. Manfaat yaitu dapat meningkatkan massa otot dan kekuatan, meningkatkan kepadatan tulang dan mengurangi risiko cedera',
  },
];

export default function Steps() {
  return (
    <Box pb={'60px'} bg={'linear-gradient(180deg, #FFFFFF 0%, #B9C0FD 100%)'}>
      <Container maxW="1350px" p={'65px'}>
        <Center flexDirection={'column'} pt={'60px'}>
          <Heading
            fontSize={{ base: '25px', md: '28px' }}
            mb={{ base: '20px', md: '31px' }}
            textAlign={'center'}
            as={'h2'}
            maxW={700}
          >
            Aktivitas fisik
          </Heading>
          <Text
            maxW={'753px'}
            fontSize={'20px'}
            textAlign={'center'}
            mb={'90px'}
          >
            Berbagai rekomendasi aktivitas fisik yang dapat dilakukan
            berdasarkan kebutuhan tubuhmu dan hidupmu.
          </Text>

          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={6}
          >
            {data.map((item, index) => (
              <Card
                color={'white'}
                bg={'linear-gradient(180deg, #7D81EC 0%, #2D32AE 100%)'}
                rounded={'12px'}
                key={item.title}
                w={{ base: '300px', md: '390px' }}
                p={'55PX'}
                position={'relative'}
                overflow={'hidden'}
              >
                <Center
                  rounded={'full'}
                  w={'106px'}
                  h={'106px'}
                  bg={'white'}
                  position={'absolute'}
                  top={'-53px'}
                  left={'calc(50% - 53px)'}
                >
                  <Text
                    mt={'50px'}
                    color={'brand.700'}
                    fontSize={'30px'}
                    fontWeight={'bold'}
                  >
                    {index + 1}
                  </Text>
                </Center>
                <Image
                  quality={100}
                  src={item.image}
                  width={281}
                  height={172}
                  alt={item.title}
                />
                <Text
                  mt={'21px'}
                  textAlign={'center'}
                  mb={'22px'}
                  fontWeight={'bold'}
                  fontSize={'20px'}
                >
                  {item.title}
                </Text>
                <Text textAlign={'center'} fontSize={'16px'}>
                  {item.description}
                </Text>
              </Card>
            ))}
          </Grid>
          <ButtonComp isDisabled={true}>Akses Demo Aplikasi</ButtonComp>
        </Center>
      </Container>
    </Box>
  );
}
