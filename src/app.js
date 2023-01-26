import PopUp from "components/PopUp";
import Footer from "components/uiKit/Footer";
import { createBrowserHistory } from "history";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import GlobalStyle from "./components/styles/StyledGlobal";
import AppRoutes from "./routers/Routes";
import actions from "./store/actions";
import configureStore from "./store/configureStore";
import mainTheme from "./theme/mainTheme";
// import darkTheme from "./theme/darkTheme";

const history = createBrowserHistory();
const store = configureStore({ history });
store.dispatch(actions.init());

const App = () => {
  return (
    <Provider {...{ store }}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <Nav />
            <PopUp />
            <AppRoutes />
            <Footer />
          </ThemeProvider>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
