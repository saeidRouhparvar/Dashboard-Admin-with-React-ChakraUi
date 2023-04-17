import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router";
import TopBar from "./components/topBar/TopBar";
import { Box, GridItem, Grid } from "@chakra-ui/react";
import SideBar from "./components/sideBar/SideBar";

function App() {
  let router = useRoutes(routes);
  return (
    <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={3}>
        <SideBar />
      </GridItem>
      <GridItem colSpan={9}>
        <TopBar />
        {router}
      </GridItem>
    </Grid>
  );
}

export default App;
