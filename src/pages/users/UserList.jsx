import { useState } from "react";
import { userRow } from "../../datas";
import { Link as ReachLink } from "react-router-dom";

import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
  Button,
  Avatar,
  Text,
  Link,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function UserList(params) {
  const [userDatas, setUserDatas] = useState(userRow);
  const userDelete = userID => {
    setUserDatas(userDatas.filter(user => user.id != userID))
    console.log(userDatas);
  }
  return (
    <TableContainer>
      <Table variant="simple">
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>User</Th>
            <Th>Email</Th>
            <Th>Status</Th>
            <Th>Transaction</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>

        <Tbody>
          {userRow.map((userList) => (
            <Tr>
              <Td>{userList.id}</Td>
              <Td display={"flex"}>
                <Avatar />
                <Text as={"span"} m={4}>
                  {userList.username}
                </Text>
              </Td>
              <Td>{userList.email}</Td>
              <Td>{userList.status}</Td>
              <Td>{userList.transaction}</Td>
              <Td>
                <Button me={4} bg={"green.400"}>
                  <Link as={ReachLink} to={`/user/${userList.id}`}>
                    Edit
                  </Link>
                </Button>{" "}
                <Link onClick={() => userDelete(`${userList.id}`)}>
                  <DeleteIcon fontSize={22} color={"red.400"} />
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
