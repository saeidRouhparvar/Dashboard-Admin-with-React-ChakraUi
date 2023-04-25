import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link as ReachLink, Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productsData } from "../../datas";

export default function Product() {
  return (
    <Box>
      <Flex justifyContent={"space-between"}>
        <Text fontSize={"60"} fontWeight={"bold"}>
          Product
        </Text>
        <Link as={ReachLink} to={"/newProduct"}>
          <Button mt={7} fontSize={32}>
            Create
          </Button>
        </Link>
      </Flex>
      <Flex >
        <Chart title={"Sale in Month"} data={productsData} dataKey={"sale"} />
        <Flex
          w="50%"
          my={12}
          p={6}
          flexDirection={"column"}
          boxShadow={"0 0 15px -10px rgba(0,0,0,.75)"}
        >
          <Text mb={8} fontSize={22} fontWeight={"bold"}>
            Product Feature
          </Text>
          <Flex justifyContent={"space-between"} fontSize={20}>
            <Text>ID</Text>
            <Text fontWeight={"bold"}>1</Text>
          </Flex>
          <Flex justifyContent={"space-between"} fontSize={20}>
            <Text>Name</Text>
            <Text fontWeight={"bold"}>Dell</Text>
          </Flex>
          <Flex justifyContent={"space-between"} fontSize={20}>
            <Text>Sales</Text>
            <Text fontWeight={"bold"}>$138000</Text>
          </Flex>
          <Flex justifyContent={"space-between"} fontSize={20}>
            <Text>Active</Text>
            <Text fontWeight={"bold"}>Yes</Text>
          </Flex>
          <Flex justifyContent={"space-between"} fontSize={20}>
            <Text>In Stock</Text>
            <Text fontWeight={"bold"}>No</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
