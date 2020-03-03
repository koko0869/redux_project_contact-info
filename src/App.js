import React from "react";
import { Route } from "react-router-dom";
import ContactListPage from "./pages/ContactListPage";
import FavoritePage from "./pages/FavoirtePage";
import RegisterPage from "./pages/RegisterPage";
const App = () => {
  return (
    <>
      <Route component={ContactListPage} path="/" exact />
      <Route component={FavoritePage} path="/favorite" />
      <Route component={RegisterPage} path="/register" />
    </>
  );
};

export default App;
