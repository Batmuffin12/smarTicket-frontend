import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExplainPage from "../components/ExplainPage";
import HomePage from "../components/HomePage";
import NotFound from "../components/NotFound";
import LoginModal from "../components/loginModal";
const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/explainPage" element={<ExplainPage />} />
        <Route path="/contactUs" element={<HomePage />} />
        <Route path="/buyTicket" element={<HomePage />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;
