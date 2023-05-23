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
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Image from "next/image";

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg={"white"}
      zIndex={99}
      w={"full"}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={"gray.100"}
      position={"fixed"}
    >
      <Box>
        <Container maxW="1440px">
          <Flex
            justify={"space-between"}
            bg={"white"}
            minH={"60px"}
            py={{ base: 2 }}
            align={"center"}
          >
            <Image
              src={"/assets/logo.png"}
              width={132}
              height={28}
              alt="logo"
            />

            <Box display={{ base: "flex", md: "none" }}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Box>

            <Flex
              flex={{ base: 1, md: 0 }}
              display={{ base: "none", md: "flex" }}
              ml={10}
            >
              <DesktopNav />
            </Flex>
          </Flex>
        </Container>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Flex align={"center"} gap={"48px"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color={"gray.500"}
            whiteSpace={"nowrap"}
            _hover={{
              textDecoration: "none",
              color: "black",
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Flex>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"white"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"gray.600"}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"gray.600"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
  },
  {
    label: "Benefit",
    href: "#benefit",
  },
  {
    label: "Product",
    href: "#services",
  },
  {
    label: "Add-On",
    href: "#services",
  },
  {
    label: "Template",
    href: "#services",
  },
  {
    label: "Testimonial",
    href: "#testimonial",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Affiliate Program",
    href: "#",
  },
];
