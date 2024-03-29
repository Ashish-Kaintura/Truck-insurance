import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
// import Footer from "./component/Footer";
import Conatct from "./pages/Conatct";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Certificates from "./pages/Certificates";
import Profile from "./pages/Profile";
import DashBord from "./pages/DashBord";
import Profile2 from "./pages/Profile2";
import Practice from "./pages/practice";
import Privatecomponent from "./component/Privatecomponent";
import Update from "./pages/Update";
import SuperPrivatecomponent from "./component/SuperPrivatecomponent";
import MasterLogin from "./pages/MasterLogin";
import MasterProfile from "./pages/MasterPofile";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Privatecomponent />}>
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/users/:id" element={<Profile2 />} />
            <Route path="/dashboard" element={<DashBord />} />
            <Route path="/update/:id" element={<Update/>} /> */}
          </Route>
          <Route element={<SuperPrivatecomponent />}>
            <Route path="/users/:id" element={<Profile2 />} />
            <Route path="/dashboard" element={<DashBord />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/masterprofile" element={<MasterProfile/>} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact" element={<Conatct />} />
          {/* <Route path="/certificates" element={<Certificates />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/MasterLogin" element={<MasterLogin />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}
