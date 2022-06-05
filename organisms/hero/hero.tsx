import {
  Box,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';
import { HERO_TEXT } from "./hero.constants";

export default function Hero() {
  return (
    <Flex align="center" h={{ base: '600px', md: '100vh' }} >
      <Box>
        <Text
          fontWeight={'bold'}
          fontFamily="MigraExtrabold"
          fontSize={'3xl'}
          color={'pink.300'}
        >
          {HERO_TEXT.name}
        </Text>
        <Heading
          mb={6}
          as={'h1'}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}>
          {HERO_TEXT.title}
        </Heading>
        <Text color={'gray.500'} maxW={600}>
          {HERO_TEXT.description}
        </Text>

      </Box>
    </Flex >

  );
}
