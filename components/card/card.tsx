import Image from "next/image";
import { Badge, Box, useColorModeValue, Text } from "@chakra-ui/react";
// import moment from 'moment';
import Link from "next/link";

const Overlay = () => {
  return (
    <Box
      w="100%"
      h="400px"
      background="linear-gradient(0deg, rgba(45,45,45,0.5) 20%, rgba(255,255,255,0) 78%, transparent 100%)"
      position="absolute"
      bottom={0}
      left={0}
      zIndex={1}
      borderRadius={"10px 10px 0 0"}
      transition="all 0.3s ease-in-out"
    />
  );
};

const Card = ({ item }) => {
  return (
    <Link href={`/blog/${item.slug}`}>
      <Box
        pos="relative"
        id="expand"
        cursor="pointer"
        boxShadow={"md"}
        rounded="md"
        bg={useColorModeValue("gray.50", "gray.700")}
      >
        <Box
          pos="relative"
          height={400}
          borderRadius={"xl"}
          overflow={"hidden"}
        >
          <Overlay />
          <Image
            style={{
              objectFit: "cover",
            }}
            src={item.cover}
            alt={item.title}
            sizes="320 640 750"
            fill
          />
          <Box
            p={6}
            pointerEvents={"none"}
            cursor="pointer"
            zIndex={2}
            pos={"absolute"}
            bottom={1}
            color={"white"}
          >
            <Badge mb={2} colorScheme={"green"}>
              {item.tag.name}
            </Badge>
            {/* <Text fontSize="sm" color="gray.500">
              {moment(item.created_date?.toDate()).format('MMMM Do YYYY')}
            </Text> */}
            <Text
              noOfLines={2}
              mb={1}
              minH={59}
              fontSize={"3xl"}
              lineHeight={1.1}
              fontWeight={600}
            >
              {item.title}
            </Text>
            <Text noOfLines={3}>{item.overview}</Text>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
