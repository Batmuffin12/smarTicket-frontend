import paths from "appConstants/paths";
import { useAdminData } from "hooks/useAdminData";
import UserPage from "pages/Admin/UserPage";
import ContactUs from "pages/ContactUsPage";
import ExplainPage from "pages/ExplainPage";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import NotFound from "pages/NotFoundPage";
import SignUpPage from "pages/SignUpPage";
import ViewTrainsPage from "pages/ViewTrainsPage";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { convertToInt } from "utils/themeUtils";

const calcProperHeight = (theme) => {
  const { footerHeight, headerHeight, mainPadding } = theme.sizes;
  const calc =
    convertToInt(footerHeight) +
    convertToInt(headerHeight) +
    convertToInt(mainPadding) * 2;
  return calc;
};

const RouterWrapper = styled.div`
  height: calc(100vh - ${({ theme }) => calcProperHeight(theme)}px);
  overflow: auto;
`;

const AppRoutes = () => {
  useAdminData();

  return (
    <RouterWrapper>
      <Routes>
        <Route exact path={paths.homePage} element={<HomePage />} />
        <Route path={paths.explainPage} element={<ExplainPage />} />
        <Route path={paths.contactUsPage} element={<ContactUs />} />
        <Route path={paths.viewTrainsPage} element={<ViewTrainsPage />} />
        <Route path={paths.loginPage} element={<LoginPage />} />
        <Route path={paths.signUpPage} element={<SignUpPage />} />
        <Route path={paths.admin}>
          <Route path={paths.adminPages.users} exact element={<UserPage />} />
        </Route>
        <Route path={paths.notFound} element={<NotFound />} />
      </Routes>
    </RouterWrapper>
  );
};

export default AppRoutes;
