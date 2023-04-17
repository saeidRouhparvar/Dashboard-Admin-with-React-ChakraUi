import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Features from "../../components/features/Features";
import Chart from "../../components/chart/Chart";
import { xAxisMData, xAxisYData } from "../../datas";
import WidgetSm from "../../components/widgetSm/widgetSm";

export default function Home() {
  return (
    <Flex ms={30} flexDirection={"column"}>
      <Features />
      <Flex>
        <Chart grid title="Month Sale" data={xAxisMData} dataKey="Sale" />
        <Chart grid title="Year Sale" data={xAxisYData} dataKey="Sale" />
      </Flex>
      <WidgetSm/>
    </Flex>
  );
}
