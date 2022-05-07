import { Spacer, Flex, Badge, Box, useColorModeValue, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ProjectItem = ({ item }) => {
  return (
    <Box
      pos="relative"
      cursor="pointer"
      boxShadow={'md'}
      rounded="md"
      bg={useColorModeValue('gray.50', 'gray.700')}
      border={'1px solid'}
      borderColor={'gray.50'}
      _hover={{
        border: '1px solid',
        borderColor: 'pink.500',
      }}
    >
      <Box p={4} cursor="pointer" id="expand">
        <Flex>
          <Spacer /> <ExternalLinkIcon fontSize={20} mb={4} />
        </Flex>


        <Text pointerEvents={'none'} noOfLines={3} fontSize={'2xl'} mb={3} fontWeight={'bold'}>{item.title}</Text>
        <Text pointerEvents={'none'} noOfLines={4} fontSize={'lg'} mb={3}>{item.description}</Text>
        {item.category.map((cat) => <Badge my={2} mr={2} key={cat}>{cat}</Badge>)}
      </Box>
    </Box >
  )
}

export default ProjectItem;