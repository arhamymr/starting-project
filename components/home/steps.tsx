import {
  Box,
  Container,
  Heading,
  Text,
  Center,
  Card,
  Grid,
  Image,
} from '@chakra-ui/react';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1627466603841-5b0bfa442951?q=80&w=2478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Jalan Santai',
    description:
      'Waktu Tempuh  selama 30 menit. Manfaat yaitu dapat merilekskan tubuh',
  },
  {
    image:
      'https://images.unsplash.com/photo-1590646299178-1b26ab821e34?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Lari',
    description:
      'Waktu Tempuh selama20-30 menit. Manfaat yaitu meningkatkan kebugaran kardiovaskular dan membantu mengurangi stres',
  },
  {
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Yoga',
    description:
      'Waktu Tempuh selama20-30 menit. Manfaat yaitu meningkatkan kebugaran kardiovaskular dan membantu mengurangi stres',
  },
  {
    image:
      'https://plus.unsplash.com/premium_photo-1664304656077-5f40bbcad93f?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Bersepeda',
    description:
      'Waktu Tempuh selama 30-50 menit. Manfaat yaitu dapat meningkatkan daya tahan, membakar kalori, dan menjelajahi lingkungan',
  },
  {
    image:
      'https://plus.unsplash.com/premium_photo-1719501574608-0cf632f7c0f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Renang',
    description:
      'Waktu Tempuh selama 30-45 menit. Manfaat yaitu dapat latihan seluruh tubuh, baik untuk pemulihan cedera',
  },
  {
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Senam Aerobik',
    description:
      'Waktu Tempuh selama 30-45 menit. Manfaat yaitu dapat meningkatkan kebugaran jantung dan membakar kalori dengan cara yang menyenangkan',
  },
  {
    image:
      'https://images.unsplash.com/photo-1603503364272-6e28e046b37a?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Latihan Kekuatan',
    description:
      'Waktu Tempuh selama 30-60 menit. Manfaat yaitu dapat membangun otot, meningkatkan metabolisme, dan memperkuat tulang',
  },
  {
    image:
      'https://plus.unsplash.com/premium_photo-1709829409681-43871ca716a6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'HIIT (High-Intensity Interval Training)',
    description:
      'Waktu Tempuh selama 20-30 menit. Manfaat yaitu dapat membakar lemak dengan cepat dan meningkatkan kebugaran dalam waktu singkat',
  },
  {
    image:
      'https://plus.unsplash.com/premium_photo-1668032739358-5ea4d34cc948?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Tim Olahraga (Sepak Bola, Basket, dll.)',
    description:
      'Waktu Tempuh selama 60-90 menit. Manfaat yaitu dapat meningkatkan kerjasama tim dan keterampilan sosial serta mempelajari keterampilan kardiovaskular',
  },
];

export default function Steps() {
  return (
    <Box
      id="activity"
      pb={'60px'}
      bg={'linear-gradient(180deg, #FFFFFF 0%, #F06788 100%)'}
    >
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
                  objectFit={'cover'}
                  src={item.image}
                  width={281}
                  height={172}
                  alt={item.title}
                  mt={12}
                  rounded={'12px'}
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
        </Center>
      </Container>
    </Box>
  );
}
