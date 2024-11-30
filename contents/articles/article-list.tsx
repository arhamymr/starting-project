import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  Grid,
  Flex,
} from '@chakra-ui/react';
import { articlesData } from './content';
import Link from 'next/link';
import { use } from 'react';
import { useRouter } from 'next/router';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

interface Props {
  marginTop?: number;
  tags: any[];
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="brand" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const firstArticle = articlesData[0];

const ArticleList = () => {
  const router = useRouter();
  const { token } = router.query;

  return (
    <Container maxW={'7xl'} p="12" mt={24}>
      <Link href={`/resep/${firstArticle.slug}?token=${token}`}>
        <Flex gap={12} mt={6}>
          <Box display="flex" flex="1" position="relative" alignItems="center">
            <Image
              borderRadius="lg"
              src={firstArticle.image}
              alt="some good alt text"
              height={300}
              width={'full'}
              objectFit="cover"
            />
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}
          >
            <BlogTags tags={firstArticle.category} />
            <Heading marginTop="1">{firstArticle.title}</Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg"
            >
              {firstArticle.description}
            </Text>
            <BlogAuthor name="Admin" date={new Date('2021-04-06T19:01:27Z')} />
          </Box>
        </Flex>
      </Link>
      <Heading as="h2" marginTop="20">
        Resep Terbaru
      </Heading>
      <Divider marginTop="5" />
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        {articlesData.map((item, index) => {
          return (
            <Link key={index} href={`/resep/${item.slug}?token=${token}`}>
              <Box w="100%" py={4}>
                <Box borderRadius="lg" overflow="hidden">
                  <Box
                    textDecoration="none"
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Image
                      src={item.image}
                      alt="some text"
                      height={300}
                      width={'full'}
                      objectFit="cover"
                    />
                  </Box>
                </Box>
                <BlogTags tags={item.category} marginTop={3} />
                <Heading fontSize="xl" marginTop="2">
                  <Text
                    textDecoration="none"
                    _hover={{ textDecoration: 'none' }}
                  >
                    {item.title}
                  </Text>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                  {item.description}
                </Text>
                <BlogAuthor
                  name="Admin"
                  date={new Date('2021-04-06T19:01:27Z')}
                />
              </Box>
            </Link>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ArticleList;
