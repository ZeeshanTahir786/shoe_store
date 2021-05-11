import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/home";
import Launch from "../components/Launch";
import LaunchIndex from "../components/launchIndex";
import LaunchShoe from "../components/launchShoe";
import NotFound from "../components/notFound";
import NavBar from "./navBar";

const RouteConfig = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch" element={<Launch />}>
          <Route exact path="/" element={<LaunchIndex />} />
          <Route exact path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default RouteConfig;
