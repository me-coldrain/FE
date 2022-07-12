import React, { useState } from "react";
// hooks
import { useRouter } from "next/router";
// component
import Image, { ImageWithHeader } from "@components/image";
import Icon from "@components/icon";
import { PlaceholderWithJSX } from "@components/PlaceholderWithTitle";
// style
import styled from "styled-components";
import styles from "./Team.module.scss";

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
} = styles;

export default function Team(): JSX.Element {
  const router = useRouter();
  const { teamId } = router.query;
  console.log("fetch with teamId", teamId);

  //state
  const [possible, setPossible] = useState<boolean>();
  const [recruitMember, setRecruitMember] = useState<boolean>();

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
        <div>
          <div className={rowDiv}>
            <PlaceholderWithJSX
              label="경기 히스토리"
              content={
                <div className={matchHistoryContainer}>
                  <div className={matchHistoryContainerWin}>
                    <WinOrLose>승리</WinOrLose>
                  </div>
                  <div className={matchHistoryContainerResult}></div>
                  <div className={matchHistoryContainerLose}></div>
                </div>
              }
              length="long"
              linkType={false}
            />
          </div>
        </div>
        {/* <div style={{ width: "100%" }}>
            <div className={rowDiv}>
              <PlaceholderWithTitle
                length="short"
                label="팀 승점"
                content="900점"
              />
              <PlaceholderWithTitle
                length="short"
                label="팀 승점"
                content="900점"
              />
            </div>
            <div className={rowDiv}>
              <PlaceholderWithTitle
                label="팀 소개"
                content="팀에서 하는 한줄 / 시작 년도팀에서 하는 한줄 / 시작 년도팀에서 하는 한줄 / 시작 년도팀에서 하는 한줄 / 시작 년도팀에서 하는 한줄 / 시작 년도팀에서 하는 한줄 / 시작 년도팀에서 하는 한줄 / 시작 년도팀에서 하는 한줄 / 시작 년도"
                length="long"
              />
            </div>
            <div className={rowDiv}>
              <PlaceholderWithJSX
                arrowLink={{
                  pathname: `/team/${teamId}/members}`,
                  query: { id: teamId },
                }}
                label="멤버 소개(22)"
                content={mostValuableMember}
                length="long"
              />
            </div>
          </div> */}
        <p>
          ximus est vitae, semper erat. Pellentesque dictum in nunc eu
          porttitor. Integer vitae justo sit amet metus malesuada eleifend.
        </p>
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

const WinOrLose = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1px 11px;
  gap: 10px;
  width: 43px;
  height: 20px;

  border-radius: 21px;
  border: 1px solid if (win, #19c649, #c72525);
  p {
    color: if (win, #19c649, #c72525);
  }
`;
