import React, { lazy, useState } from "react";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import { BiMenu } from "react-icons/bi";

const Header = lazy(() => import("./header"));
const Footer = lazy(() => import("./footer"));

const Layout = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <Header showDrawer={showDrawer} drawerHandler={setShowDrawer} />
      <main className=" mainContainer">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
