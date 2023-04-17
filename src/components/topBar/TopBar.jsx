import { Search2Icon, BellIcon } from "@chakra-ui/icons";
import {
  Text,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import React from "react";

export default function TopBar() {
  return (
    <Flex
      h="60px"
      bg="white"
      mx="30px"
      my='20px'
      rounded="10px"
      justifyContent={"space-between"}
      alignItems={"center"}
      position="sticky"
    >
      <Box ms={8} bg="white">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input type="tel" placeholder="Search" />
        </InputGroup>
      </Box>
      <Flex alignItems={"center"} me={8}>
        <BellIcon me={8} w={8} h={8} />
        <VStack>
          <Text>Dinky Life Store</Text>
          <Text as="span" fontSize={10} color={"gray.400"} mt="0 !important">
            Saeid Rouhparvar
          </Text>
        </VStack>
        <Avatar ms={8} />
      </Flex>
    </Flex>
  );
}
