import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SharedFile } from "../pages/SharedFile";
import { Favorites } from "../pages/Favorites";
import { UploadFiles } from "../pages/UploadFiles";
const Layout = lazy(() => import("../components/layout"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/shared-files" element={<SharedFile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/upload-file" element={<UploadFiles />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Routing;
