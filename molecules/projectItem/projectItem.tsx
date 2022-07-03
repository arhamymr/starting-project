import { Spacer, Flex, Badge, Box, useColorModeValue, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { IItemProps } from './item.types';

interface IProps {
  item: IItemProps;
}
const ProjectItem = ({ item }: IProps) => {
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
          <Spacer />
          {!!item.github && <Link href={item.github} passHref><Text mr={2}> Github </Text></Link>}
        </Flex>
        <Link href={item.link} passHref>
          <Box >
            <Text noOfLines={3} fontSize={'2xl'} mb={3} fontWeight={'bold'}>{item.title}</Text>
            <Text noOfLines={4} fontSize={'lg'} mb={3}>{item.description}</Text>
            {item.category.map((cat) => <Badge my={2} mr={2} key={cat}>{cat}</Badge>)}
          </Box>
        </Link>
      </Box>
    </Box >

  )
}

export default ProjectItem;