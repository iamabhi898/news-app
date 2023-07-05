import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";

import PageLayout from "./pages/PageLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import BookmarkPage from "./pages/BookmarkPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="bookmark" element={<BookmarkPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
