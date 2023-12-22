import React from "react";
import "./App.css";
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Footer from "./component/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
