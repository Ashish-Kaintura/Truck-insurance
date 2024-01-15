import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Footer from "./component/Footer";
import Conatct from "./pages/Conatct";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Certificates from "./pages/Certificates";
import Profile from "./pages/Profile";
import DashBord from "./pages/DashBord";
import Profile2 from "./pages/Profile2";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact" element={<Conatct />} />
          <Route path="/certificates" element={<Certificates/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/profile2" element={<Profile2/>} />
          <Route path="/dashboard" element={<DashBord/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
