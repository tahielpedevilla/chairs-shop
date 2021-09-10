import {ChakraProvider} from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";

import theme from "./theme";
import App from "./App";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
