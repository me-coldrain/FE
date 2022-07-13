import React, { useState } from "react";
// hooks
import { useRouter } from "next/router";
// component
import Image, { ImageWithHeader } from "@components/image";
import Icon from "@components/icon";
import { PlaceholderWithJSX } from "@components/PlaceholderWithTitle";
// style
import styles from "./Team.module.scss";
import Link from "next/link";
import Footer, { RegisterFooter } from "@components/footer";

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
  const { teamId } = router.query;
  console.log("fetch with teamId", teamId);

  //state
  const [possible, setPossible] = useState<boolean>();
  const [recruitMember, setRecruitMember] = useState<boolean>();

  const matchContainer = (
    <div className={matchHistoryContainer}>
      <div className={matchHistoryContainerWin}>
        <div className={matchHistoryContainerWinner}>
          <p>승리</p>
        </div>
        <p>A팀</p>
      </div>
      <div className={matchHistoryContainerResult}>
        <div className={matchHistoryContainerResult}>
          <p>2022.03.04</p>
        </div>
        <p>4:2</p>
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
            <Icon asset="Location" className={matchInfoContainerIcon} />
            <h4>활동 지역</h4>
            <h5>서울</h5>
          </div>
          <div className={matchInfoContainer}>
            <Icon asset="Person-Pin" className={matchInfoContainerIcon} />
            <h4>선호 장소</h4>
            <h5>저희 홈구장에서 하고 싶습니다.</h5>
          </div>
          <div className={matchInfoContainer}>
            <Icon asset="Calendar" className={matchInfoContainerIcon} />
            <h4>가능 요일</h4>
            <h5>월, 화, 수, 목, 금</h5>
          </div>
          <div className={matchInfoContainer}>
            <Icon asset="Alarm" className={matchInfoContainerIcon} />
            <h4>가능 시간</h4>
            <h5>오전, 오후</h5>
          </div>
        </div>

        <div style={{ display: "flex", width: "100%" }}>
          <div className={rowDiv}>
            <PlaceholderWithJSX
              label="경기 히스토리"
              content={matchContainer}
              length="long"
              linkType={false}
            />
          </div>
        </div>

        <div className={tabs}>
          <p>멤버 소개(22)</p>
          <Icon asset="Right-Arrow" className={tabsIcon} />
        </div>
        <div className={tabs}>
          <p>예정된 경기 일정</p>
          <Icon asset="Right-Arrow" className={tabsIcon} />
        </div>

        <RegisterFooter />
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
