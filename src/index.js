import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorite-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/AllMeetups" element={<AllMeetupsPage />} />
          <Route path="/NewMeetup" element={<NewMeetupPage />} />
          <Route path="/Favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </FavoritesContextProvider>
);
