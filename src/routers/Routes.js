import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactUs from "../pages/ContactUsPage";
import ExplainPage from "../pages/ExplainPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFoundPage";

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route path="/explainPage" element={<ExplainPage />} />
    <Route path="/contactUs" element={<ContactUs />} />
    <Route path="/buyTicket" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
