import React from "react";
import { Link } from "react-router-dom";
import css from "./dashboard.module.scss";
import { Files } from "../../components/common/Files";
import { AddFiles } from "../../components/common/AddFiles";

const Dashboard = () => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={css.leftElements}>
        <Files />
      </div>
      <div className={css.rightElements}>
        <AddFiles />
      </div>
    </div>
  );
};

export default Dashboard;
