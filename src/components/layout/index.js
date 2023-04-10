import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import css from "./layout.module.scss";

const Header = lazy(() => import("./header"));
const Footer = lazy(() => import("./footer"));

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ marginLeft: "220px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
