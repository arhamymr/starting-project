import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Container,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from 'next/image';

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg={'white'}
      zIndex={99}
      w={'full'}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={'gray.100'}
      position={'fixed'}
    >
      <Box>
        <Container maxW="1440px">
          <Flex
            justify={'space-between'}
            bg={'white'}
            minH={'60px'}
            py={{ base: 2 }}
            align={'center'}
          >
            <Link href={'/'}>
              <Image
                src={'/assets/logo.png'}
                width={80}
                height={80}
                alt="logo"
              />
            </Link>

            <Box display={{ base: 'flex', md: 'none' }}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Box>

            <Flex
              flex={{ base: 1, md: 0 }}
              display={{ base: 'none', md: 'flex' }}
              ml={10}
            >
              <DesktopNav />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Flex align={'center'} gap={'48px'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link href={navItem.href}>{navItem.label}</Link>
        </Box>
      ))}
      <Link
        target="_blank"
        href={
          'https://api.whatsapp.com/send/?phone=6281936654547&text&type=phone_number&app_absent=0'
        }
      >
        <Button>Konsultasi Sekarang</Button>
      </Link>
    </Flex>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  onToggle?: any;
  href?: string;
  query?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Beranda',
    href: '/',
  },
  {
    label: 'Resep',
    href: '/resep',
  },
  {
    label: 'Aktivitas',
    href: '#activity',
  },
];
