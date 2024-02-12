import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// import theme from "./theme.ts";

const styles = {
  global: (props: any) => ({
    body: {
      color: mode("black", "white")(props),
      bg: mode(/*"#ff8fa3",*/ "#B5292A", "#03002e")(props),
      // #E2413E, #B5292A, #FF758F, #F56462
    },
  }),
};

const configue = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {};

const theme = extendTheme({ configue, styles, colors });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.configue.useSystemColorMode} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
