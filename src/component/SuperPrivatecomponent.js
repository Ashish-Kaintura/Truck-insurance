import React from "react";
import { Navigate, Outlet } from "react-router-dom";
export default function SuperPrivatecomponent() {
  const isAdmin = localStorage.getItem("masteruser");
  return isAdmin ? <Outlet /> : <Navigate to={"/MasterLogin"} />;
}
