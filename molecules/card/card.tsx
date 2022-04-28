import Image from 'next/image'
import { Box, Heading, Text } from '@chakra-ui/react';

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const Card = () => {
  return (
    <Box>
      <Image
        loader={myLoader}
        src="me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <Heading>Heading text here</Heading>
      <Text>text description</Text>
    </Box>
  )
}

export default Card;