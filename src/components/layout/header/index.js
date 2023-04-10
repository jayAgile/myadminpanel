import React, { useState } from "react";
import css from "./header.module.scss";
import { Link } from "react-router-dom";
import { SidebarList, sidebarList } from "../../../constants/data";
import { toAbsoluteUrl } from "../../../utils";

const Header = () => {
  const [selectedRoute, setSelectedRoute] = useState();

  return (
    <section className={`paddingY bg-secondary ${css.wrapper}`}>
      <div className={css.container}>
        <div className={`${css.upperElements}`}>
          <div className={`bottomPadding ${css.circleAvatar}`}>
            <img src={toAbsoluteUrl("images/person.png")} />
          </div>

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
                >
                  <span>{obj.icon}</span>
                  <span>{obj.title}</span>
                </Link>
              </div>
            );
          })}
        </div>

        <div className={`${css.lowerElements}`}>
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
                  onClick={() => setSelectedRoute(obj.id)}
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
