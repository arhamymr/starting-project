import { Breadcrumb, BreadcrumbItem, Text, Flex, Box } from "@chakra-ui/react";
import Link from "next/link";
import { IconGrain } from "@tabler/icons-react";

const BreadCrumbComp = ({ data }) => {
  return (
    <Breadcrumb mb={9}>
      <BreadcrumbItem>
        <Link href={`/`}>
          <Flex align={"center"}>
            <Box bg={"blue.200"} p={1} mr={2} rounded={"sm"} color={"black"}>
              <IconGrain width={12} height={12} />
            </Box>
            <Text>Home</Text>
          </Flex>
        </Link>
      </BreadcrumbItem>
      {data.map((item, index) => (
        <BreadcrumbItem key={index}>
          <Link href={item.link}>
            <Text fontWeight={data.length === index + 1 ? "bold" : "normal"}>
              {item.name}
            </Text>
          </Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumbComp;
