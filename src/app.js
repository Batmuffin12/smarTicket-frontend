import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./routers/Routes";
import mainTheme from "./theme/mainTheme";
import GlobalStyle from "./components/styles/StyledGlobal";
import Nav from "./components/Nav";
import StyledFooter from "./components/styles/StyledFooter";
// import darkTheme from "./theme/darkTheme";

// TODO: after adding global state, add button to change theme(not here)

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <Nav />
          <AppRoutes />
          <StyledFooter />
        </ThemeProvider>
      </Suspense>
    </Router>
  );
};

export default App;
