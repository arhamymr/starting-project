import { Badge, Box, useColorModeValue, Text, Link } from '@chakra-ui/react';

interface IProps {
  item: {
    title: string;
    description: string;
    tag: {
      name: string;
    };
    link: string;
  }
}
const Project = ({ item }: IProps) => {
  console.log(item, "item")
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
      <Box p={4} cursor="pointer">
        <Link href={item.link} target={"_blank"}>
          <Box id={'expand'}>
            <Text id={'expand'} noOfLines={3} fontSize={'2xl'} mb={3} fontWeight={'bold'}>{item.title}</Text>
            <Text id={'expand'} noOfLines={4} fontSize={'lg'} mb={3}>{item.description}</Text>
            <Badge my={2} id={'expand'} mr={2}>{item.tag.name}</Badge>
          </Box>
        </Link>
      </Box>
    </Box >

  )
}

export default Project;