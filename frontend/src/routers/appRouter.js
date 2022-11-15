import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExplainPage from "../pages/ExplainPage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFoundPage";
// import LoginModal from "../pages/LoginModal";
const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/explainPage" element={<ExplainPage />} />
        <Route path="/contactUs" element={<HomePage />} />
        <Route path="/buyTicket" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginModal />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;
