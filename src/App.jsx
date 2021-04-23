import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import WeatherContainer from "./components/weather/WeatherContainer/WeatherContainer";
import SignIn from "./components/auth/SignIn/SignIn";
import SignUp from "./components/auth/SignUp/SignUp";

import GlobalStyle from "./themes/GlobalStyle";
import theme from "./themes/theme";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          {/* Routing Config */}
          <Header />
          <Switch>
            <Route component={SignIn} path="/signin" />
            <Route component={SignUp} path="/signup" />
            <Route component={WeatherContainer} path="/" />
          </Switch>
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
};

export default App;
