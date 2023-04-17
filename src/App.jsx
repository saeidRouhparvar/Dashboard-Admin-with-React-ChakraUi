import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router";
import TopBar from "./components/topBar/TopBar";
import { Box } from "@chakra-ui/react";

function App() {
  let router = useRoutes(routes);
  return (
    <Box>
      <TopBar/>
      {router}
    </Box>
  );
}

export default App;
