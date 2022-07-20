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
  aboutTeamImage,
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
        <ImageWithHeader
          className={aboutTeamImage}
          src="/assets/landing.png"
          alt="Desktop & Mobile PWA Application"
          width="100%"
          height="220px"
          expected
        />

        <div className={scoreBoard}>
          <div className={scoreBoardContentName}>
            <h5>승점</h5>
            <h5>승률</h5>
          </div>
          <div className={scoreBoardDetail}>
            <div
              className={scoreBoardDetailBox}
              style={{ borderRight: "1px solid" }}
            >
              <p>900점</p>
            </div>
            <div className={scoreBoardDetailBox}>
              <p>20%</p>
              <p>12전 10승 2무 3패</p>
            </div>
          </div>
        </div>

        <div className={matchInfo}>
          <h3>대결 정보</h3>
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
        <RouterButton bigRound>경기취소</RouterButton>
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
