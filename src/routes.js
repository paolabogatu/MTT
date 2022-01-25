import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/dashboard";

//custom imports
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";

const RoutesType = () => {
  return (
    <>
      <Router>
        <Menu />
        <Header />
        <Routes>
          <>
            <Route exact path="/home" element={<Dashboard />} />
          </>
        </Routes>
      </Router>
    </>
  );
};

export default RoutesType;
