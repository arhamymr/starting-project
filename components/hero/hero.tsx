import {
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { HERO_TEXT } from "./hero.constants";
import { IconArticle, IconUser} from '@tabler/icons-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <Flex align="center" h={{ base: '600px', md: '100vh' }} >
      <Box>
        <Flex mb={100} gap={16}>
          <Link href={'/'} passHref>
            <Flex align={"center"} cursor={'pointer'}>
              <Text
                id="expand"
                fontFamily={'MigraExtrabold'}
                fontSize={'18px'}
                color={useColorModeValue('gray.800', 'white')}
                _hover={{
                  color: 'pink.300'
                }}
              >
                Arhamymr
              </Text>
            </Flex>
          </Link>
          <Flex gap={7}>
            <Link href={"/blog"}>
              <Flex align={"center"}>
                <IconArticle/>
                <Text ml={1.5}> Blogs </Text>
              </Flex>
            </Link>

            <Link href={"/blog"}>
              <Flex align={"center"}>
                <IconUser/>
                <Text ml={1.5}> About Me </Text>
              </Flex>
            </Link>
          </Flex>
         

        </Flex>

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
        <Text mb={50} color={'gray.500'} maxW={700}>
          {HERO_TEXT.description}
        </Text>
      </Box>
    </Flex >

  );
}
