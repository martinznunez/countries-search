import React, { useState } from "react";
import CountriesSection from "../layouts/CountriesSection";
import Country from "../layouts/Country";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";

import Header from "./Header";

const Routes = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />

        <Router>
          <Header toggleTheme={toggleTheme} />
          <Switch>
            <Route exact path="/" component={CountriesSection} />
            <Route exact path="/country" component={Country} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default Routes;
