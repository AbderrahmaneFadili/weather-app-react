import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./themes/GlobalStyle";
import theme from "./themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <h1>Weather App</h1>
      </>
    </ThemeProvider>
  );
};

export default App;
