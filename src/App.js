import "./App.css";
import { React } from "react";
import Header from "./Components/Header";
import AnimRoutes from "./Components/AnimRoutes";
import Headroom from 'react-headroom'

import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
    <Router>
      <Header />
      <AnimRoutes />

    </Router>
    </>
  );
}

export default App;
