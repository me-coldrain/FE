import React, { useEffect, useState } from "react";
// hooks
import { useRouter } from "next/router";
// component
import Image, { ImageWithHeader } from "@components/image";
import Icon from "@components/icon";
import RouterButton from "@components/RouterButton";
import { PlaceholderWithJSX } from "@components/PlaceholderWithTitle";
// style
import Link from "next/link";
import Footer, { RegisterFooter } from "@components/footer";
import styles from "./Match.module.scss";
import { user } from "stores/user";

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
  const { teamId, teamName } = router.query;
  console.log("fetch with teamId =", teamId, teamName);

  //state
  const [possible, setPossible] = useState<boolean>();
  const [recruitMember, setRecruitMember] = useState<boolean>();
  const [isCaptain, setIsCaptain] = useState<boolean>(true);

  //hooks
  const link = {
    pathname: "/team/[teamName]/matches",
    query: { teamId: teamId, teamName: teamName },
    as: "/team/[teamName]/matches",
  };

  const captainHandler = () => {
    console.log("if this team's captain");
  };

  useEffect(captainHandler, []);

  const matchContainer = (
    <div className={matchHistoryContainer}>
      <div className={matchHistoryContainerWin}>
        <div className={matchHistoryContainerWinner}>
          <p>승리</p>
        </div>
        <p>A팀</p>
      </div>
      <div className={matchHistoryContainerResult}>
        <p>2022.03.04</p>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            margin: "0.5rem",
          }}
        >
          4:2
        </p>
      </div>
      <div className={matchHistoryContainerLose}>
        <div className={matchHistoryContainerLoser}>
          <p>패배</p>
        </div>
        <p>B팀</p>
      </div>
    </div>
  );

  return (
    <>
      <main className={aboutTeam}>
        <p>상대팀</p>
        <div className={aboutTeamTitleBox}>
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
        </div>

        <div className={matchInfo}>
          <p>대결 정보</p>
          <div className={matchInfoContainer}>
            <div>
              <Icon asset="Location" className={matchInfoContainerIcon} />
              <h4>대결장소</h4>
            </div>
            <h5>서울 월드컵경기장</h5>
          </div>
          <div className={matchInfoContainer}>
            <div>
              <Icon asset="Calendar" className={matchInfoContainerIcon} />
              <h4>날짜/시간</h4>
            </div>
            <h5>22.07.17(월) 오후2시</h5>
          </div>
          <div className={matchInfoContainer}>
            <div>
              <Icon asset="Calendar" className={matchInfoContainerIcon} />
              <h4>주장 연락수단</h4>
            </div>
            <h5>ddfesgstd</h5>
          </div>
          <div className={matchInfoContainer}>
            <div>
              <Icon asset="Alarm" className={matchInfoContainerIcon} />
              <h4>주장 핸드폰</h4>
            </div>
            <h5>01012345678</h5>
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
          handleClick={() => {}}
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
