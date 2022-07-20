import Icon from "@components/icon";
import SafeArea from "@components/safeArea";
import React from "react";

import styles from "./Schedule.module.scss";

const { scheduleCard, scheduleCardContents, scheduleCardIcon, dDay, dDayIcon } =
  styles;

export default function Schedule(): JSX.Element {
  const scheduleMatches: JSX.Element = (
    <div className={scheduleCard}>
      <div className={scheduleCardContents}>
        <h2>서울 FC</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Icon asset="Location" className={scheduleCardIcon} />
          <p>위치</p>
          <p>|</p>
          <p>월드컵 경기장</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Icon asset="CheckBox" className={scheduleCardIcon} />
          <p>경기 일자</p>
          <p>|</p>
          <p>22.06.15(월)</p>
          <div className={dDay}>
            <p>D-23</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            justifyContent: "center",
            alignContent: "center",
            borderRight: "1px solid #f4f4f4",
          }}
        >
          <Icon asset="CheckBox" className={dDayIcon} />
          <p>카카오톡</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Icon asset="Phone" className={dDayIcon} />
          <p>01063640588</p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <SafeArea />
      {/** @map scheduleMatches */}
      <div style={{ padding: "1rem" }}>{scheduleMatches}</div>
    </div>
  );
}
