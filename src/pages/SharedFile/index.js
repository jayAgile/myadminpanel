import React from "react";
import { RenderInput } from "../../components/common/FormField";
import "./sharedfile.scss";
import { recentFilesArr, yourFiles } from "../../constants/data";
import { Card } from "../../components/common/Card";
import { RenderSvg } from "../../components/common/RenderSvg";
import { AddCardBtn } from "../../components/common/Card/PlusCard";
import { CircleAvatar } from "../../components/common/CircleAvatar";

export const SharedFile = () => {
  const SharedFiles = () => {
    return (
      <div style={{ display: "flex" }}>
        {yourFiles.map((obj) => {
          return (
            <>
              <Card
                keyvalue={obj.id}
                className="paddingX userCards"
                lineEnable={true}
                lineClassName={`line-${obj.color}`}
              >
                {/* images */}
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <CircleAvatar className="img-container1" img="person.png" />
                  <CircleAvatar
                    className="img-container2"
                    img="stevejobs.png"
                  />
                  <CircleAvatar
                    className="img-container3"
                    img="Elon_Musk.jpeg"
                  />
                </div>
                <h4>{obj.title}</h4>
                <span>{obj.subtitle}</span>
              </Card>
            </>
          );
        })}
        <AddCardBtn className="plusStyle" />
      </div>
    );
  };

  const RecentShared = () => {
    return (
      <div className="recent-shared">
        {recentFilesArr.map((obj) => (
          <Card keyvalue={"0"} className="shared-card">
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                width: "20%",
                alignItems: "center",
              }}
            >
              <div className={`img-${obj.colors}`}>
                <button className="shared-imgStyle" />
              </div>
              <span>{obj.title}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <CircleAvatar className="img-container1" img="person.png" />
              <CircleAvatar className="img-container2" img="stevejobs.png" />
              <CircleAvatar className="img-container3" img="Elon_Musk.jpeg" />
            </div>
            <span>{obj.subtitle}</span>
            <span>{obj.size}</span>
            <button className="shared-share" />
            <button className="shared-more" />
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="wrapper">
      <div>
        <RenderInput title="Search" placeholder="Search" />
      </div>
      {/* files */}
      <div className="sharedFiles">
        <h1>Your shared files</h1>
        <SharedFiles />
      </div>

      {/* recent Files */}
      <div className="sharedRecently">
        <h2>Shared Recently</h2>
        <RecentShared />
      </div>
    </div>
  );
};
