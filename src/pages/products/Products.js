import { useState } from "react";
import { userRow } from "../../datas";
import { products } from "../../datas";
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

export default function Products() {
  const [productDatas, setProductDatas] = useState(products);
  const productDelete = productID => {
    setProductDatas(productDatas.filter(product => product.id != productID))
  }
  return (
    <TableContainer>
      <Table variant="simple">
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>

        <Tbody>
          {products.map((productList) => (
            <Tr>
              <Td>{productList.id}</Td>
              <Td display={"flex"}>
                <Avatar />
                <Text as={"span"} m={4}>
                  {productList.title}
                </Text>
              </Td>
              
             
              <Td>{productList.price}</Td>
              <Td>
                <Button me={4} bg={"green.400"}>
                  <Link as={ReachLink} to={`/product/${productList.id}`}>
                    Edit
                  </Link>
                </Button>{" "}
                <Link onClick={() => productDelete(`${productList.id}`)}>
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
