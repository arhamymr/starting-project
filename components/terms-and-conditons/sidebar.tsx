import { ListItem, OrderedList, Box, Text } from "@chakra-ui/react";

import { data } from "./data";

export default function Sidebar() {
  return (
    <Box fontSize={"14px"} bg={"white"} p={4} pl={6} rounded={"md"}>
      <Text fontWeight={"bold"} mb={"18px"}>
        {" "}
        Kategori{" "}
      </Text>
      <OrderedList>
        {data.map((item, index) => {
          return (
            <ListItem mb={2} key={index}>
              {item.name}
            </ListItem>
          );
        })}
      </OrderedList>
    </Box>
  );
}
