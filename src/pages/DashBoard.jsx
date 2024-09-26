import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

function DashBoard() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default DashBoard;
