import React, { useState } from "react";
import "./files.scss";
import { RenderInput } from "../FormField";
import { Card } from "../Card";
import { categories, files, recentFilesArr } from "../../../constants/data";
import { toAbsoluteUrl } from "../../../utils";
import { RenderSvg } from "../RenderSvg";
import { AddCardBtn } from "../Card/PlusCard";
import { BiMenu } from "react-icons/bi";

export const Files = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState("show");

  const Categories = () => {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          gap: "2rem",
        }}
      >
        {categories.map((obj) => {
          return (
            <Card
              keyvalue={obj.id}
              className={`card${obj.title}`}
              disabled={true}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // height: "55%",
                }}
              >
                {/* images */}
                <button className={`img-container`}>
                  <div className={` img-${obj.img}`} />
                </button>
                {obj.favorite == true && (
                  <button className={`flexCenter starBtn`}>
                    <img
                      className="star"
                      src={toAbsoluteUrl("Images/star.png")}
                    ></img>
                  </button>
                )}
              </div>
              <div>{obj.title}</div>
              <div>{obj.subtitle}</div>
            </Card>
          );
        })}
      </div>
    );
  };

  const Files = () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {files.map((obj) => {
          return (
            <>
              <Card keyvalue={obj.id} className="cardfiles" lineEnable={true}>
                {/* images */}
                <button className="img-container">
                  <RenderSvg
                    className={`imagesBg-${obj.title}`}
                    imgString={obj.img}
                  />
                </button>
                <div>{obj.title}</div>
                <div>{obj.subtitle}</div>
                {/* <div className="line" /> */}
              </Card>
            </>
          );
        })}
        <AddCardBtn />
      </div>
    );
  };

  const RecentFiles = () => {
    return (
      <div className="recent-files">
        {recentFilesArr.map((obj) => (
          <Card keyvalue={"0"} className="card">
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                width: "20%",
                alignItems: "center",
              }}
            >
              <button className={`img-${obj.colors}`}>
                <div className={`recent-imgStyle img-${obj.img}`} />
              </button>
              <span>{obj.title}</span>
            </div>
            <span>{obj.subtitle}</span>
            <span>{obj.size}</span>
            <button className="recent-share" />
            <button className="recent-more" />
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className={`wrapper`}>
      {/* medium and small screen */}
      <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
        {/* <div className={`menuIcon`} onClick={() => setSideMenuOpen("close")}>
          <BiMenu size={30} />
        </div> */}
        <div style={{ display: "flex", width: "100%" }}>
          <RenderInput title="Search" placeholder="Search" />
        </div>
      </div>
      {/* category */}
      <div className={`categories`}>
        <h2>Categories</h2>
        <Categories />
      </div>

      {/* files */}
      <div className="files">
        <h2>Files</h2>
        <Files />
      </div>

      {/* recent Files */}
      <div className="recentFiles">
        <h2>Recent Files</h2>
        <RecentFiles />
      </div>
    </div>
  );
};
