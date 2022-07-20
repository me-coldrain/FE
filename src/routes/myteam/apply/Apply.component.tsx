import React, { useState } from "react";

// component
import StatusButton from "@components/statusButton";
import Icon from "@components/icon";

// style
import styles from "./Apply.module.scss";

const { teams, team, upperBox, lowerBox, location } = styles;

export default function MyTeam(): JSX.Element {
  //state
  const [active, setActive] = useState(true);
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <>
      <main className={teams}>
        <div className={team}>
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
              <StatusButton apply></StatusButton>
            </div>
          </div>
          <div className={lowerBox}>
            <div>
              <p>승점</p>
              <p>230</p>
            </div>
            <div>
              <p>승률</p>
              <div>
                <p>10전 3승 5무 2패</p>
                <p>40%</p>
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
