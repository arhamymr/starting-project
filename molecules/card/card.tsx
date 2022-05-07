import Image from 'next/image'
import { Badge, Box, useColorModeValue, Text } from '@chakra-ui/react';
import moment from 'moment';

const Overlay = () => {
  return (
    <Box
      w="100%"
      h="100%"
      bg="rgb(246,135,179)"
      opacity={'0.2'}
      position="absolute"
      top={0}
      left={0}
      zIndex={888}
      borderRadius={'10px 10px 0 0'}
      transition="all 0.3s ease-in-out"
      _hover={{
        opacity: 0
      }}
    />
  )
}
const Card = ({ item }) => {
  return (
    <Box
      pos="relative"
      id="expand"
      cursor="pointer"
      boxShadow={'md'}
      rounded="md"
      bg={useColorModeValue('gray.50', 'gray.700')}
    >
      <Box pos='relative' height={250}>
        <Overlay />
        <Image
          style={{
            borderRadius: '10px 10px 0 0',
          }}
          src={item.thumbnail}
          alt={item.title}
          objectFit={'cover'}
          sizes="320 640 750"
          layout="fill"
        />
      </Box>
      <Box p={3} pointerEvents={'none'} cursor="pointer">
        <Badge mb={2}>{item.category}</Badge>
        <Text fontSize="sm" color="gray.500">
          {moment(item.created_date?.toDate()).format('MMMM Do YYYY')}
        </Text>
        <Text noOfLines={2} fontSize={'xl'} fontWeight={'bold'}>{item.title}</Text>
        <Text noOfLines={3} >{item.description}</Text>
      </Box>
    </Box >



  )
}

export default Card;