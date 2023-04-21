import React from "react";
import { RenderInput } from "../../components/common/FormField";
import { Card } from "../../components/common/Card";
import "../../components/common/Files/files.scss";
import "./favorites.scss";
import { categories, gallary } from "../../constants/data";
import { toAbsoluteUrl } from "../../utils";

export const Favorites = () => {
  const Favorite = () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {categories.map((obj) => {
          return obj.favorite == true ? (
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
                <button className="img-container">
                  <div className="imagesBg" />
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
          ) : null;
        })}
      </div>
    );
  };

  const Files = () => {
    return (
      <div className="favFiles">
        {gallary.map((obj) => (
          <Card
            className="favoriteCards"
            style={{ marginLeft: 0 }}
            disabled={false}
          >
            <div className="bg-image" />
            <h3 style={{ fontSize: "20px" }}>{obj.title}</h3>
            <span>{obj.subtitle}</span>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className={`wrapper`}>
      <div>
        <RenderInput title="Search" placeholder="Search" />
      </div>

      {/* category */}
      <div className={`categories`}>
        <h2>Favorites</h2>
        <Favorite />
      </div>

      {/* files */}
      <div className={`newfiles`}>
        <h2>Files</h2>
        <Files />
      </div>
    </div>
  );
};
