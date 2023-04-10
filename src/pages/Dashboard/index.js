import React from "react";
import { Link } from "react-router-dom";
import css from "./dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={css.dashboard}>
      <h2 style={{}}>Dashboard </h2>
      <br />
      <h4 style={{}}>
        <Link to="/my-account">My Account</Link>
      </h4>
    </div>
  );
};

export default Dashboard;
