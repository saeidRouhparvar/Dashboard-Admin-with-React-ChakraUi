import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";

export default function Features() {
  return (
    <Flex w={'100%'} mt={6} justifyContent={'space-between'}>
      <Box
        flexDirection={"column"}
        ps={6}
        py={6}
      w={'31%'}
        boxShadow={"0 0 15px -10px rgba(0,0,0,.75)"}
        rounded={8}
      >
        <Box>
          <Text fontSize={24}>Revanue</Text>
        </Box>
        <HStack>
          <Text fontSize={36} fontWeight={"bold"} pt={2} pe={6}>
            $ 3,345
          </Text>
          <Text fontSize={18}>-8.4 </Text>
          <RiArrowDownLine fontSize={26} color="red" />
        </HStack>
        <Text mt={2} color="gray.500">
          Compared to last month
        </Text>
      </Box>
      <Box
        flexDirection={"column"}
        ps={6}
        py={6}
      w={'31%'}
        boxShadow={"0 0 15px -10px rgba(0,0,0,.75)"}
        rounded={8}
      >
        <Box>
          <Text fontSize={24}>Sales</Text>
        </Box>
        <HStack>
          <Text fontSize={36} fontWeight={"bold"} pt={2} pe={6}>
            $ 1,586
          </Text>
          <Text fontSize={18}>-9.6 </Text>
          <RiArrowDownLine fontSize={26} color="red" />
        </HStack>
        <Text mt={2} color="gray.500">
          Compared to last month
        </Text>
      </Box>
      <Box
        flexDirection={"column"}
        ps={6}
        py={6}
      w={'31%'}
        boxShadow={"0 0 15px -10px rgba(0,0,0,.75)"}
        rounded={8}
      >
        <Box>
          <Text fontSize={24}>Cost</Text>
        </Box>
        <HStack>
          <Text fontSize={36} fontWeight={"bold"} pt={2} pe={6}>
            $ 2,345
          </Text>
          <Text fontSize={18}>+3.8 </Text>
          <RiArrowUpLine fontSize={26} color="green" />
        </HStack>
        <Text mt={2} color="gray.500">
          Compared to last month
        </Text>
      </Box>

    </Flex>
  );
}
