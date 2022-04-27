import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
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
import { Switch } from "molecules";

import { NAV_ITEMS_TEXT } from './navbar.constants';
import { INavItem } from './navbar.types';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      bg={useColorModeValue('rgba(255,255,255,.2)', 'rgba(23,25,35, .2)')}
      boxShadow={'sm'}
      pos={'fixed'}
      width={'full'}
      backdropFilter={'blur(5px)'}
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
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Link href={'/'} passHref>
              <Flex gap={2}>
                <Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'MigraExtrabold'}
                  fontSize={'18px'}
                  color={useColorModeValue('gray.800', 'white')}>
                  Arhamymr
                </Text>
                <Text> UI DESIGNER, DEVELOPER</Text>
              </Flex>
            </Link>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <Switch />
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>

  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS_TEXT.map((navItem) => (
        <Box key={navItem.label}>
          <Link href={navItem.href} passHref>
            <Text cursor="pointer">
              {navItem.label}
            </Text>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};


const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS_TEXT.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: INavItem) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Link href={href} passHref>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
        </Link>
      </Flex>
    </Stack>
  );
};