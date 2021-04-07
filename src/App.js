import React, { useState } from "react";

import CountriesSection from "./layouts/CountriesSection";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

function App() {
  const [regionSearch, setRegionSearch] = useState();

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <CountriesSection
        toggleTheme={toggleTheme}
        theme={theme}
        setRegionSearch={setRegionSearch}
        regionSearch={regionSearch}
      />
    </ThemeProvider>
  );
}

export default App;
