import React, { useEffect, useState } from "react";
// hooks
import Link from "next/link";
import { useRouter } from "next/router";
import { makeRequest } from "services/makeRequest";
// component
import Icon from "@components/icon";
import { RegisterFooter } from "@components/footer";
import { PlaceholderWithJSX } from "@components/PlaceholderWithTitle";
// style
import styles from "./Match.module.scss";

const {
  aboutTeam,
  aboutTeamTitleBox,
  scoreBoard,
  scoreBoardDetail,
  scoreBoardDetailBox,
  scoreBoardContentName,
  matchInfo,
  matchInfoContainer,
  matchInfoContainerIcon,
  matchInfoContainerBox,
  matchInfoContainerBoxText,
  rowDiv,
  matchHistoryContainer,
  matchHistoryContainerWin,
  matchHistoryContainerLose,
  matchHistoryContainerResult,
  matchHistoryContainerWinner,
  matchHistoryContainerLoser,
  tabs,
  tabsIcon,
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

export default function Team(): JSX.Element {
  const router = useRouter();
  const { teamId } = router.query;
  console.log("fetch with teamId =", teamId);

  type IInfo = {
    matchId: number;
    teamId: number;
    isCaptain: boolean;
    opposingTeamId: number;
    opposingTeamName: string;
    opposingTeamMemberCount: number;
    opposingTeamPoint: number;
    opposingTeamWinRate: number;
    opposingTeamTotalGameCount: number;
    opposingTeamWinCount: number;
    opposingTeamDrawCount: number;
    opposingTeamLoseCount: number;
    contact: string;
    phone: string;
    matchDate: string;
    matchLocation: string;
    createdDate: string;
    modifiedDate: string;
    matchStatus: true;
    dday: number;
  };

  //state
  const [possible, setPossible] = useState<boolean>();
  const [teamInfo, setTeamInfo] = useState<IInfo>();
  const [isCaptain, setIsCaptain] = useState<boolean>(true);

  const captainHandler = () => {
    console.log("if this team's captain");
  };

  // const handleMatchCancel = () => {
  //   makeRequest({
  //     endpoint: `matches/${teamInfo?.matchId}`,
  //     method: "DELETE",
  //     auth: true,
  //   })
  // };

  useEffect(() => {
    makeRequest({
      endpoint: `teams/${teamId}/matches`,
      method: "GET",
      auth: true,
    })
      .then((res: IInfo) => {
        console.log(res);
        setTeamInfo(res);
      })
      .catch((error: any) => console.log(error));
  }, []);

  return (
    <>
      <main className={aboutTeam}>
        <p>상대팀</p>
        <div className={aboutTeamTitleBox}>
          <div className={team}>
            <div className={upperBox}>
              <div>
                <p>{teamInfo?.opposingTeamName}</p>
                <div className={location}>
                  <div>
                    <Icon asset="Location"></Icon>
                    <p>{teamInfo?.matchLocation}</p>
                  </div>
                  <div>
                    <Icon asset="People"></Icon>
                    <p>{teamInfo?.opposingTeamMemberCount}명</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={lowerBox}>
              <div className={lowerBoxLeft}>
                <p>승점</p>
                <p>{teamInfo?.opposingTeamPoint}</p>
              </div>
              <div className={lowerBoxRight}>
                <p>승률</p>
                <div className={lowerBoxRightContent}>
                  <div className={lowerBoxRightContentPercent}>
                    <p>{teamInfo?.opposingTeamWinRate}%</p>
                  </div>
                  <div>
                    <div className={lowerBoxRightContentTotal}>
                      {teamInfo?.opposingTeamTotalGameCount}
                    </div>
                    <div className={lowerBoxRightContentWin}>
                      {teamInfo?.opposingTeamWinCount}
                    </div>
                    <div className={lowerBoxRightContentDraw}>
                      {teamInfo?.opposingTeamDrawCount}
                    </div>
                    <div className={lowerBoxRightContentLose}>
                      {teamInfo?.opposingTeamLoseCount}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={matchInfo}>
          <p>대결 정보</p>
          <div className={matchInfoContainer}>
            <div>
              <Icon asset="Location" className={matchInfoContainerIcon} />
              <h4>대결장소</h4>
            </div>
            <h5>{teamInfo?.matchLocation}</h5>
          </div>
          <div className={matchInfoContainer}>
            <div>
              <Icon asset="Calendar" className={matchInfoContainerIcon} />
              <h4>날짜/시간</h4>
            </div>
            <h5>{teamInfo?.matchDate}</h5>
          </div>
          <div className={matchInfoContainer}>
            <div>
              <Icon asset="Calendar" className={matchInfoContainerIcon} />
              <h4>주장 연락수단</h4>
            </div>
            <h5>{teamInfo?.contact}</h5>
          </div>
          <div className={matchInfoContainer}>
            <div>
              <Icon asset="Alarm" className={matchInfoContainerIcon} />
              <h4>주장 핸드폰</h4>
            </div>
            <h5>{teamInfo?.phone}</h5>
          </div>
        </div>
        <h3>포메이션</h3>
        <Link href="/formation">
          <div className={matchInfoContainerBox}>
            <div className={matchInfoContainerBoxText}>
              <div>+</div>
              <p>포메이션을 등록해주세요</p>
            </div>
          </div>
        </Link>
        <RegisterFooter
          content="경기취소"
          activeStyle={false}
          handleClick={() => {
            // handleMatchCancel();
          }}
        ></RegisterFooter>
      </main>
    </>
  );
}
/**
 *
 * @ToDo fetch with team id
 * params: teamname, 팀 소개, 팀 이미지
 *
 */
