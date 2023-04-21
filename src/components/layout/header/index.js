import React, { useEffect, useState } from "react";
import css from "./header.module.scss";
import { Link } from "react-router-dom";
import { SidebarList, sidebarList } from "../../../constants/data";
import { toAbsoluteUrl } from "../../../utils";
import { CircleAvatar } from "../../common/CircleAvatar";
import { BiMenu } from "react-icons/bi";
import { RenderInput } from "../../common/FormField";
const Header = (props) => {
  const { drawerHandler, showDrawer } = props;
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
    <>
      {!showDrawer && (
        <div
          className={css.menuIcon}
          onClick={() => {
            drawerHandler(!showDrawer);
          }}
        >
          <BiMenu size={30} />
          {/* <RenderInput title="Search" placeholder="Search" /> */}
        </div>
      )}

      <section
        className={`${css.wrapper}`}
        // style={showDrawer ? { width: "100%" } : {}}
      >
        <div
          className={`bg-secondary ${css.container}`}
          style={showDrawer ? { display: "flex" } : {}}
          onClick={() => {
            drawerHandler(!showDrawer);
          }}
        >
          <div className={`${css.upperElements}`}>
            <CircleAvatar img="person.png" />

            {SidebarList.upperList.map((obj) => {
              return (
                <Link
                  onClick={() => setSelectedRoute(obj.id)}
                  to={sideBarHandler(obj.id)}
                  className={css.listContainer}
                >
                  <div
                    className={css.list}
                    style={
                      selectedRoute == obj.id
                        ? {
                            width: "90%",
                            backgroundColor: "rgba(0,0,0,0.8)",
                            zIndex: 1,
                          }
                        : {}
                    }
                  >
                    <span>{obj.icon}</span>
                    <span>{obj.title}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className={`bottomPadding ${css.lowerElements}`}>
            {SidebarList.lowerList.map((obj) => {
              return (
                <Link
                  onClick={() => setSelectedRoute(obj.id)}
                  to={sideBarHandler(obj.id)}
                  className={css.listContainer}
                >
                  <div
                    className={css.list}
                    style={
                      selectedRoute == obj.id
                        ? {
                            width: "90%",
                            backgroundColor: "rgba(0,0,0,0.8)",
                            zIndex: 1,
                          }
                        : {}
                    }
                  >
                    <span>{obj.icon}</span>
                    <span>{obj.title}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
