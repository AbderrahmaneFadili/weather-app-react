import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import WeatherContainer from "./components/weather/WeatherContainer/WeatherContainer";
import GlobalStyle from "./themes/GlobalStyle";
import theme from "./themes/theme";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <WeatherContainer />
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
};

export default App;
