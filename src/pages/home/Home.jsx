import { Box, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Features from "../../components/features/Features";
import Chart from "../../components/chart/Chart";
import { xAxisMData, xAxisYData } from "../../datas";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <Flex ms={30} flexDirection={"column"}>
      <Features />
      <Flex>
        <Chart grid title="Month Sale" data={xAxisMData} dataKey="Sale" />
        <Chart grid title="Year Sale" data={xAxisYData} dataKey="Sale" />
      </Flex>
      <Flex justifyContent={"space-between"}>
        <WidgetSm />
        <WidgetLg />
      </Flex>
    </Flex>
  );
}
