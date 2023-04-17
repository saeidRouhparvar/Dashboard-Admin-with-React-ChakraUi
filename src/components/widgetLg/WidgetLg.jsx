import React from "react";
import {
  Flex,
  Text,
  Avatar,
  Badge,
  HStack,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Stack,
} from "@chakra-ui/react";
import { transActions } from "../../datas";

export default function widgetLg() {
  return (
    <Flex
      w="65%"
      my={12}
      p={6}
      flexDirection={"column"}
      boxShadow={"0 0 15px -10px rgba(0,0,0,.75)"}
    >
      <Text mb={8} fontSize={22} fontWeight={"bold"}>
        Latest TransActions
      </Text>

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th fontSize={14} fontWeight={"bold"}>
                Customer
              </Th>
              <Th fontSize={14} fontWeight={"bold"}>
                Date
              </Th>
              <Th fontSize={14} fontWeight={"bold"}>
                Amount
              </Th>
              <Th fontSize={14} fontWeight={"bold"}>
                Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {transActions.map((trans) => (
              <Tr>
                <Td>{trans.userName}</Td>
                <Td>{trans.date} </Td>
                <Td>$ {trans.amount}</Td>
                <Button fontSize={12} mt={2}  colorScheme={trans.color}>{trans.status}</Button>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}
