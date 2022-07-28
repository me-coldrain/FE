import React, { useState, useEffect } from "react";

// hook
import router from "next/router";
import { makeRequest } from "services/makeRequest";

// component
import StatusButton from "@components/statusButton";
import Icon from "@components/icon";

// style
import styles from "./Apply.module.scss";
import { CenterModal } from "@components/modal";

type PageProps = {
  data?: any;
  decodedData?: any;
};

type IInfo = {
  captain: boolean;
  teamId: number;
  teamName: string;
  headCount: number;
  mainArea: string;
  preferredArea: string;
  weekdays: Array<string>;
  time: Array<string>;
  winPoint: number;
  winRate: number;
  recruit: boolean;
  match: boolean;
  totalGameCount: number;
  winCount: number;
  drawCount: number;
  loseCount: number;
  createdDate: string;
  modifiedDate: string;
};

const {
  teams,
  teamCard,
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

export default function MyTeam(props: PageProps): JSX.Element {
  console.log(props);
  const teamInfo = props?.data;

  // state
  const [checked, setChecked] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <CenterModal
        show={modalOpen}
        verify={true}
        checked={checked}
        setChecked={setChecked}
        onClose={() => setModalOpen(false)}
        handleVerified={() => setModalOpen(false)}
        title={"팀원 신청을 취소하시겠습니까?"}
      >
        <h5>취소하시면 되돌릴 수 없습니다.</h5>
      </CenterModal>
      <main className={teams}>
        {teamInfo.map((x: any, i: any) => (
          <div className={teamCard} key={`teamKey_${i}`}>
            <div
              className={team}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <div className={upperBox}>
                <div>
                  <p>{x?.teamName}</p>
                  <div className={location}>
                    <div>
                      <Icon asset="Location"></Icon>
                      <p>{x?.mainArea}</p>
                    </div>
                    <div>
                      <Icon asset="People"></Icon>
                      <p>{x?.teamMemberCount}</p>
                    </div>
                  </div>
                </div>
                <div>
                  {x?.applyStatus ? <StatusButton apply></StatusButton> : <></>}
                </div>
              </div>
              <div className={lowerBox}>
                <div className={lowerBoxLeft}>
                  <p>승점</p>
                  <p>{x?.teamPoint}</p>
                </div>
                <div className={lowerBoxRight}>
                  <p>승률</p>
                  <div className={lowerBoxRightContent}>
                    <div className={lowerBoxRightContentPercent}>
                      <p>{x?.teamWinRate}%</p>
                    </div>
                    <div>
                      <div className={lowerBoxRightContentTotal}>
                        {x?.teamTotalGameCount}
                      </div>
                      <div className={lowerBoxRightContentWin}>
                        {x?.teamWinCount}
                      </div>
                      <div className={lowerBoxRightContentDraw}>
                        {x?.teamDrawCount}
                      </div>
                      <div className={lowerBoxRightContentLose}>
                        {x?.teamLoseCount}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
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
