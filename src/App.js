import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./screens/RootLayout/RootLayout";
import Navigation from "./screens/navigation/Navigation";
import Dictionary from "./screens/dictionary/Dictionary";
import Club from "./screens/club/Club";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
              <Navigation />
            </RootLayout>
          }
        />
        <Route
          path="/dictionary"
          element={
            <RootLayout>
              <Dictionary />
            </RootLayout>
          }
        />
        <Route
          path="/clubs"
          element={
            <RootLayout>
              <Club />
            </RootLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
