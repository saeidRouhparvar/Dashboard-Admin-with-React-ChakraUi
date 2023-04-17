import {
  RiAncientPavilionLine,
  RiLineChartFill,
  RiLineChartLine,
  RiAccountBoxLine,
  RiBuilding2Fill,
  RiFolderChartLine,
  RiMailCheckLine,
  RiChat4Line,
  RiBriefcase2Line,
  RiStackLine,
} from "react-icons/ri";
import {
  Box,
  Flex,
  HStack,
  VStack,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const menuStyle = {
    ":hover": {
      bg: "gray.500",
      borderRadius: "5px",
    },
    ":active": {
      bg: "gray.500",
    },
    cursor: "pointer",
  };
  return (
    <Box bg="gray.600" p="10px" color={"white"} position={"sticky"}>
      <Flex flexDirection="column" m={4}>
        <Flex flexDirection="column" mb={3}>
          <Text fontSize={20} color="gray.400">
            Dashboard
          </Text>
          <List m={2} fontSize={18}>
            <Link to="/">
              <ListItem sx={menuStyle} ps={2}>
                <HStack>
                  <RiAncientPavilionLine />
                  <Text p={1}>Home</Text>
                </HStack>
              </ListItem>
            </Link>
            <ListItem sx={menuStyle} ps={2}>
              <HStack fontSize={18}>
                <RiLineChartFill />
                <Text p={1}>Analytics</Text>
              </HStack>
            </ListItem>
            <ListItem sx={menuStyle} ps={2}>
              <HStack>
                <RiLineChartLine />
                <Text p={1}>Sales</Text>
              </HStack>
            </ListItem>
          </List>
        </Flex>
        <Flex flexDirection="column" mb={3}>
          <Text fontSize={20} color="gray.400">
            Quick Menu
          </Text>
          <List m={2} fontSize={18}>
            <Link to="/users">
              <ListItem sx={menuStyle} ps={2}>
                <HStack>
                  <RiAccountBoxLine />
                  <Text p={1}>Users</Text>
                </HStack>
              </ListItem>
            </Link>
            <Link to="/newUser">
              <ListItem sx={menuStyle} ps={2}>
                <HStack fontSize={18}>
                  <RiAccountBoxLine />
                  <Text p={1}>New User</Text>
                </HStack>
              </ListItem>
            </Link>
            <Link to="/products">
              <ListItem sx={menuStyle} ps={2}>
                <HStack>
                  <RiBuilding2Fill />
                  <Text p={1}>Products</Text>
                </HStack>
              </ListItem>
            </Link>
            <ListItem sx={menuStyle} ps={2}>
              <HStack>
                <RiLineChartLine />
                <Text p={1}>Transactions</Text>
              </HStack>
            </ListItem>
            <ListItem sx={menuStyle} ps={2}>
              <HStack>
                <RiFolderChartLine />
                <Text p={1}>Reports</Text>
              </HStack>
            </ListItem>
          </List>
        </Flex>
        <Flex flexDirection="column" mb={3}>
          <Text fontSize={20} color="gray.400">
            Notifications
          </Text>
          <List m={2} fontSize={18}>
            <ListItem sx={menuStyle} ps={2}>
              <HStack>
                <RiMailCheckLine />
                <Text p={1}>Mail</Text>
              </HStack>
            </ListItem>
            <ListItem sx={menuStyle} ps={2}>
              <HStack fontSize={18}>
                <RiStackLine />
                <Text p={1}>Feedback</Text>
              </HStack>
            </ListItem>
            <ListItem sx={menuStyle} ps={2}>
              <HStack>
                <RiChat4Line />
                <Text p={1}>Message</Text>
              </HStack>
            </ListItem>
          </List>
        </Flex>
        <Flex flexDirection="column" mb={3}>
          <Text fontSize={20} color="gray.400">
            Staff
          </Text>
          <List m={2} fontSize={18}>
            <ListItem sx={menuStyle} ps={2}>
              <HStack>
                <RiBriefcase2Line />
                <Text p={1}>Manage</Text>
              </HStack>
            </ListItem>
            <ListItem sx={menuStyle} ps={2}>
              <HStack fontSize={18}>
                <RiLineChartFill />
                <Text p={1}>Analytics</Text>
              </HStack>
            </ListItem>
            <ListItem sx={menuStyle} ps={2}>
              <HStack>
                <RiFolderChartLine />
                <Text p={1}>Reports</Text>
              </HStack>
            </ListItem>
          </List>
        </Flex>
      </Flex>
      {/* <VStack display='flex' justify='start'>
        <Text fontSize={30}>DinkyLife</Text>
        <List>
          <Text as="h1" my={3}>Dashboard</Text>

          <ListItem ms={4}>
            <HStack>
              <RiAncientPavilionLine />
              <Text>Home</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack>
              <RiLineChartFill />
              <Text>Analytics</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack>
              <RiLineChartLine />
              <Text>Sales</Text>
            </HStack>
          </ListItem>
         
        </List>
      </VStack> */}
    </Box>
  );
}
