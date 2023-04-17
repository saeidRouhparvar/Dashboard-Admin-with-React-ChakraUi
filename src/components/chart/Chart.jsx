import { Box, Text } from "@chakra-ui/react";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Line,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <Box className="chart" w='50%'  mt={12} boxShadow={"0 0 15px -10px rgba(0,0,0,.75)"} p={3}>
      <Text className="chartTitle" fontSize={18} mb={4} fontWeight={'bold'}>{title}</Text>
   
      <ResponsiveContainer width="100%" height='50%' aspect={2}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type='monotone' dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="20" />}
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
