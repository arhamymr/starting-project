import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import Link from "next/link";
import { Switch } from "components";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      bg={useColorModeValue('rgba(255,255,255,.2)', 'rgba(23,25,35, .2)')}
      borderBottom={`1px solid`}
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      pos={'fixed'}
      width={'full'}
      backdropFilter={'blur(10px)'}
      zIndex={900}
    >
      <Container maxW={'container.lg'}>
        <Flex
          py={{ base: 2 }}
          minH={'60px'}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} align={'center'}>
            <Link href={'/'} passHref>
              <Flex gap={2} align={"center"} cursor={'pointer'}>
                <Text
                  id="expand"
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'MigraExtrabold'}
                  fontSize={'18px'}
                  color={useColorModeValue('gray.800', 'white')}
                  _hover={{
                    color: 'pink.300'
                  }}
                >
                  Arhamymr
                </Text>
              </Flex>
            </Link>

          </Flex>
          <Switch />
        </Flex>
      </Container >
    </Box >

  );
}
