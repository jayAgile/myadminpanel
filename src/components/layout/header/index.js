import React, { useState } from "react";
import css from "./header.module.scss";
import { Link } from "react-router-dom";
import { SidebarList, sidebarList } from "../../../constants/data";
import { toAbsoluteUrl } from "../../../utils";
import { CircleAvatar } from "../../common/CircleAvatar";

const Header = () => {
  const [selectedRoute, setSelectedRoute] = useState();

  const sideBarHandler = (id) => {
    switch (id) {
      case "mycloud":
        return "/";
      case "sharefile":
        return "/shared-files";
      case "favourite":
        return "/favorites";
      case "uploadfile":
        return "/upload-file";
      default:
        return "/";
    }
  };

  return (
    <section className={` bg-secondary ${css.wrapper}`}>
      <div className={css.container}>
        <div className={`${css.upperElements}`}>
          <CircleAvatar img="person.png" />

          {SidebarList.upperList.map((obj) => {
            return (
              <div
                style={
                  selectedRoute == obj.id
                    ? {
                        width: "100%",
                        backgroundColor: "rgba(0,0,0,0.8)",
                        zIndex: 1,
                      }
                    : {}
                }
              >
                <Link
                  className={css.list}
                  onClick={() => setSelectedRoute(obj.id)}
                  to={sideBarHandler(obj.id)}
                >
                  <span>{obj.icon}</span>
                  <span>{obj.title}</span>
                </Link>
              </div>
            );
          })}
        </div>

        <div className={`bottomPadding ${css.lowerElements}`}>
          {SidebarList.lowerList.map((obj) => {
            return (
              <div
                style={
                  selectedRoute == obj.id
                    ? {
                        width: "100%",
                        backgroundColor: "rgba(0,0,0,0.8)",
                        zIndex: 1,
                      }
                    : {}
                }
              >
                <Link
                  className={css.list}
                  onClick={() => {
                    setSelectedRoute(obj.id);
                  }}
                  to={sideBarHandler(obj.id)}
                >
                  <span>{obj.icon}</span>
                  <span>{obj.title}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Header;
