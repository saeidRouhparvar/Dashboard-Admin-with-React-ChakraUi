import React from "react";
import { ViewIcon } from "@chakra-ui/icons";
import { Avatar, Flex, IconButton, Text, VStack } from "@chakra-ui/react";
import { newMembers } from "../../datas";

export default function widgetSm() {
  return (
    <Flex
    w='35%'
      my={12}
      p={6}
      flexDirection={"column"}
      boxShadow={"0 0 15px -10px rgba(0,0,0,.75)"}
    >
      <Text mb={8} fontSize={22} fontWeight={"bold"}>
        New Join Member
      </Text>
      {newMembers.map((member) => (
        <Flex justifyContent={"space-between"} mb={8}>
          <Avatar />
          <VStack>
            <Text fontSize={18}>{member.userName}</Text>
            <Text m={'0 !important'} fontSize={14} color={"gray.500"}>
              {member.title}
            </Text>
          </VStack>
          <IconButton bg={"gray.300"} icon={<ViewIcon />}></IconButton>
        </Flex>
      ))}
    </Flex>
  );
}
