import React, { useState } from "react";

// hook
import router from "next/router";

// component
import StatusButton from "@components/statusButton";
import Icon from "@components/icon";

// style
import styles from "./Join.module.scss";

const {
  teams,
  team,
  upperBox,
  lowerBox,
  location,
  lowerBoxLeft,
  lowerBoxRight,
  lowerBoxRightContent,
  lowerBoxRightContentPercent,
  lowerBoxRightContentTotal,
  lowerBoxRightContentWin,
  lowerBoxRightContentDraw,
  lowerBoxRightContentLose,
} = styles;

export default function MyTeam(): JSX.Element {
  //state
  const [active, setActive] = useState(true);
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <>
      <main className={teams}>
        <div
          className={team}
          onClick={() => {
            router.push("/myteam/match");
          }}
        >
          <div className={upperBox}>
            <div>
              <p>서울FC</p>
              <div className={location}>
                <div>
                  <Icon asset="Location"></Icon>
                  <p>서울특별시</p>
                </div>
                <div>
                  <Icon asset="People"></Icon>
                  <p>42명</p>
                </div>
              </div>
            </div>
            <div>
              <StatusButton join></StatusButton>
            </div>
          </div>
          <div className={lowerBox}>
            <div className={lowerBoxLeft}>
              <p>승점</p>
              <p>230</p>
            </div>
            <div className={lowerBoxRight}>
              <p>승률</p>
              <div className={lowerBoxRightContent}>
                <div className={lowerBoxRightContentPercent}>
                  <p>40%</p>
                </div>
                <div>
                  <div className={lowerBoxRightContentTotal}>10</div>
                  <div className={lowerBoxRightContentWin}>3</div>
                  <div className={lowerBoxRightContentDraw}>5</div>
                  <div className={lowerBoxRightContentLose}>2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
/**
 *
 * @ToDo fetch with team ids
 * params: teamname, 팀 전적, 선호지역, 멤버 수
 *
 */
