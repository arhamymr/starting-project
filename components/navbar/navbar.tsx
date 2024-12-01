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
import { useRouter } from 'next/router';

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const query = router.query.token ? `?token=${router.query.token}` : '';

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
            <Link href={'/' + query}>
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

        <Collapse in={isOpen} animateOpacity>
          <MobileNav onToggle={onToggle} />
        </Collapse>
      </Box>
    </Box>
  );
}

const MobileNav = ({ onToggle }) => {
  return (
    <Stack bg={'white'} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem onToggle={onToggle} key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, onToggle, href }: NavItem) => {
  const router = useRouter();
  const query = router.query.token ? `?token=${router.query.token}` : '';
  return (
    <Stack spacing={4}>
      <Box
        py={2}
        onClick={() => {
          setTimeout(function () {
            onToggle();
          }, 1000);
        }}
      >
        <Box key={label}>
          <Link href={href + query}>{label}</Link>
        </Box>
      </Box>
    </Stack>
  );
};

const DesktopNav = () => {
  const router = useRouter();
  const query = router.query.token ? `?token=${router.query.token}` : '';
  return (
    <Flex align={'center'} gap={'48px'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link href={navItem.href + query}>{navItem.label}</Link>
        </Box>
      ))}
      <Link
        target="_blank"
        href={
          'https://api.whatsapp.com/send/?phone=6281936654547&text=selamat pagi/siang/malam, saya ingin berkonsultasi tentang diet saya. Nama saya (nama anda)&type=phone_number&app_absent=0'
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
    href: '/activity',
  },
];
