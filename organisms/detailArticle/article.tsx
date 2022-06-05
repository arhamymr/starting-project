import {
  Box,
  Heading,
  Grid,
} from '@chakra-ui/react';
import { SECTION_TEXT } from "./article.constants";
import { useEffect } from 'react';
import { ProjectItem } from 'molecules';
import useArticle from './hooks/useArticle';
import { useRouter } from 'next/router'

export default function Section() {
  const { article, getArticle } = useArticle();
  const router = useRouter();

  useEffect(() => {
    getArticle(router.query.slug);
  }, []);

  console.log(article, "articl")
  return (
    <Box mb={24}>
      <Heading
        fontWeight={'bold'}
        fontSize={'3xl'}
        color={'pink.300'}
        mb={12}
      >
        {SECTION_TEXT.title}
      </Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
        {SECTION_TEXT.data?.map((item, index) => (
          <>
            <ProjectItem key={index} item={item} />
          </>
        ))}
      </Grid>
    </Box>
  );
}
