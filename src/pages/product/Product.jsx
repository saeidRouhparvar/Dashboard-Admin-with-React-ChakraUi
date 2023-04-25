import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Select,
  SelectField,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as ReachLink, Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productsData } from "../../datas";
import { Label } from "recharts";

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
      <Flex flexDirection={"column"}>
        <Flex>
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
        <Flex >
          <Flex
            w="100%"
            my={12}
            p={6}
            justifyContent={"space-between"}
            boxShadow={"0 0 15px -10px rgba(0,0,0,.75)"}
          >
            <Flex flexDirection={"column"}>
              <Text mb={8} fontSize={22} fontWeight={"bold"}>
                Product Name
              </Text>
              <FormControl>
                <Input
                  placeholder="Dell Laptop"
                  variant="flushed"
                  borderBottom={"2px"}
                />
                <Text mt={8} color={"gray.500"} ms={4}>
                  In Stock
                </Text>
                <Select variant="outline" mt={2}>
                  <option value="option1">Yes</option>
                  <option value="option2">No</option>
                </Select>
                <Text mt={4} color={"gray.500"} ms={4}>
                  Active
                </Text>
                <Select variant="outline" mt={2}>
                  <option value="option1">Yes</option>
                  <option value="option2">No</option>
                </Select>
              </FormControl>
            </Flex>
            <Flex flexDirection={'column'} justifyContent={'space-around'}>
              <Box>
                <Image src="/img/lap.jpg" w={"200px"} />
              </Box>
              <Button>Upload (Edit)</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
