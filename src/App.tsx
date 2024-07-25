import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ArticleDetails from "./pages/ArticleDetails/ArticleDetails";
import MainAppLayout from "./components/layouts/MainAppLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFoundPage from "./pages/404/404";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainAppLayout>
                <Home />
              </MainAppLayout>
            }
          />
          <Route
            path="/article/:id"
            element={
              <MainAppLayout>
                <ArticleDetails />
              </MainAppLayout>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
