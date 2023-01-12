import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactUs from "../pages/ContactUsPage";
import ExplainPage from "../pages/ExplainPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFoundPage";
import SignUpPage from "../pages/SignUpPage";
import ViewTrainsPage from "../pages/ViewTrainsPage";
import styled from "styled-components";
import { convertToInt } from "../utils/themeUtils";

const calcProperHeight = (theme) => {
  const { footerHeight, headerHeight, headerPadding } = theme.sizes;
  const calc =
    convertToInt(footerHeight) +
    convertToInt(headerHeight) +
    convertToInt(headerPadding) * 2;
  return calc;
};

const RouterWrapper = styled.div`
  height: calc(100vh - ${({ theme }) => calcProperHeight(theme)}px);
`;

const AppRoutes = () => (
  <RouterWrapper>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/explainPage" element={<ExplainPage />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/viewTrains" element={<ViewTrainsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </RouterWrapper>
);

export default AppRoutes;
