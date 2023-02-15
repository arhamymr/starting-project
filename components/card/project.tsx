import { Badge, Box, useColorModeValue, Text, Link, Flex} from '@chakra-ui/react';
import { IconBrandGithub, IconBrandJavascript } from '@tabler/icons-react';
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
          <Box>
            <Flex gap={2} mb={2}>
              <IconBrandGithub/>
              <IconBrandJavascript/>
            </Flex>
            <Text noOfLines={3} fontSize={'2xl'} mb={1} fontWeight={600}>{item.title}</Text>
            <Text noOfLines={4} fontSize={'lg'} mb={3}>{item.description}</Text>
            <Badge mr={2}>{item.tag.name}</Badge>
          </Box>
        </Link>
      </Box>
    </Box >

  )
}

export default Project;