import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/layout/Header/Header";
import GlobalStyle from "./themes/GlobalStyle";
import theme from "./themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
      </>
    </ThemeProvider>
  );
};

export default App;
