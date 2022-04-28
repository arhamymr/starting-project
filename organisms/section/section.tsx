import {
  Box,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';
import { SECTION_TEXT } from "./section.constants";

export default function Section() {
  return (
    <Box>
      <Heading
        fontWeight={'bold'}
        fontFamily="MigraExtrabold"
        fontSize={'3xl'}
        color={'pink.300'}
      >
        {SECTION_TEXT.title}
      </Heading>
      <Text color={'gray.500'} maxW={600}>
        {SECTION_TEXT.description}
      </Text>
    </Box>
  );
}
