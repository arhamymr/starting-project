import {
  Box,
  Heading,
  Grid,
} from '@chakra-ui/react';
import { SECTION_TEXT } from "./section.constants";
import { useEffect } from 'react';
import useSection from './hooks/useSection';
import { Card } from 'molecules';

export default function Section() {
  const { articles, getArticles } = useSection();

  useEffect(() => {
    getArticles();
  }, []);

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
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)'
        }}
        gap={6}
      >
        {articles?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Grid>
    </Box>
  );
}
