import Image from 'next/image'
import { Badge, Box, useColorModeValue, Text } from '@chakra-ui/react';
import moment from 'moment';

const Card = ({ item }) => {
  console.log(item)
  return (
    <Box id="expand" cursor="pointer" boxShadow={'md'} rounded="md" bg={useColorModeValue('white', 'gray.700')}>
      <Box pos='relative' height={250} pointerEvents={'none'}>
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
        <Badge>{item.category}</Badge>
        <Text fontSize="sm" color="gray.500">
          {moment(item.created_date?.toDate()).format('MMMM Do YYYY')}
        </Text>
        <Text noOfLines={2} fontSize={'xl'} fontWeight={'bold'}>{item.title}</Text>
        <Text noOfLines={3} overflow="hidden">{item.description}</Text>
      </Box>
    </Box >



  )
}

export default Card;