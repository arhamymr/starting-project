import {
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  Container,
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import HTMLRenderer from 'react-html-renderer';
import MainLayout from 'layouts/main';
import { articlesData } from './content';
import { useRouter } from 'next/router';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

interface Props {
  marginTop?: number;
  tags: any[];
}

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

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const ArticleList = () => {
  const router = useRouter();
  const { slug, token } = router.query;

  const findarticle = articlesData.find((article) => article.slug === slug);
  const article = findarticle || articlesData[0];
  console.log(article, 'article');
  return (
    <MainLayout>
      <Container py={'120px'}>
        <Breadcrumb mb={4}>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/?token=${token}`}>Beranda</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href={`/resep?token=${token}`}>
              Resep
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{article.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Image
          transform="scale(1.0)"
          src={article.image}
          alt="some text"
          objectFit="contain"
          width="100%"
          rounded={'md'}
          mb={12}
          transition="0.3s ease-in-out"
        />
        <BlogAuthor name="Admin" date={new Date('2021-04-06T19:01:27Z')} />
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <BlogTags tags={article.category} />
          <Heading as="h2">{article.title}</Heading>
          <HTMLRenderer html={article.content} />
        </VStack>
      </Container>
      {/* ARTICLE DETAIL START HERE */}
    </MainLayout>
  );
};

export default ArticleList;
