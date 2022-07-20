import React, { Suspense, useEffect, useState } from "react";
// hooks
import { useRouter } from "next/router";
// component
import Image, { ImageWithHeader } from "@components/image";
import Icon from "@components/icon";
import { PlaceholderWithJSX } from "@components/PlaceholderWithTitle";
// style
import Link from "next/link";
import Footer, { RegisterFooter } from "@components/footer";
import { user } from "stores/user";
import Reddot from "@components/reddot";
import styles from "./Team.module.scss";
import { makeRequest } from "services/makeRequest";
import { Teams } from "stores/teams";
import { GetServerSideProps } from "next";

type ITeam = {
  drawCount: number;
  headCount: number;
  introduce: string;
  loseCount: number;
  mainArea: string;
  match: boolean;
  otherCaptain: boolean;
  participate: boolean;
  preferredArea: string;
  recentMatchHistory: null;
  recruit: boolean;
  teamCaptain: boolean;
  teamImageFileUrl: string;
  teamName: string;
  time: string[];
  totalGameCount: boolean;
  weekdays: string[];
  winCount: number;
  winPoint: number;
  winRate: number;
};

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
  const { teamId, teamName } = router.query;
  console.log("fetch with teamId =", teamId, teamName);

  //state
  const [goMatches, setGoMatches] = useState<boolean>();
  const [recruitMember, setRecruitMember] = useState<boolean>();
  const [isCaptain, setIsCaptain] = useState<boolean>(true);
  const [teamData, setTeamData] = useState<ITeam>();

  const teamDetailMakeRequest = async () => {
    await makeRequest({
      endpoint: `home/teams/8`,
      method: "GET",
      auth: true,
    })
      .then((res: ITeam) => setTeamData(res))
      .catch((error: any) => console.log(error));
  };

  useEffect(() => {
    teamDetailMakeRequest();
  }, []);

  //hooks
  const link = {
    pathname: "/team/[teamName]/matches",
    query: { teamId: teamId, teamName: teamName as string },
    as: "/team/[teamName]/matches",
  };

  const captainHandler = () => {
    if (teamData?.teamCaptain) {
      setIsCaptain(true);
    } else {
      setIsCaptain(false);
    }
  };

  useEffect(captainHandler, []);

  // match, recruit 전송 -----------

  const goMatchesApi = async () => {
    if (goMatches) {
      await makeRequest({
        endpoint: `home/teams/${teamId}/match/cancel`,
        method: "POST",
        auth: true,
      })
        .then(() => setGoMatches(false))
        .catch((error: any) => console.log(error));
    } else {
      await makeRequest({
        endpoint: `home/teams/${teamId}/match/regist`,
        method: "POST",
        auth: true,
      })
        .then(() => setGoMatches(true))
        .catch((error: any) => console.log(error));
    }
  };

  const recruitMembers = async () => {
    if (goMatches) {
      await makeRequest({
        endpoint: `home/teams/${teamId}/recruit/end`,
        method: "POST",
        auth: true,
      })
        .then(() => setRecruitMember(false))
        .catch((error: any) => console.log(error));
    } else {
      await makeRequest({
        endpoint: `home/teams/${teamId}/recruit/start`,
        method: "POST",
        auth: true,
      })
        .then(() => setRecruitMember(true))
        .catch((error: any) => console.log(error));
    }
  };

  // ---------------------

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
        {/* <Suspense fallback={<p>Loading...</p>}>
          <ImageWithHeader
            className={aboutTeamImage}
            src={teamData?.teamImageFileUrl}
            alt="Desktop & Mobile PWA Application"
            width="100%"
            height="220px"
            title={teamName}
            content={teamData?.introduce}
          />
        </Suspense>
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
              <p>{teamData?.winPoint}</p>
            </div>
            <div className={scoreBoardDetailBox}>
              <p>{teamData?.winRate}%</p>
              <p>
                {teamData?.totalGameCount}전 {teamData?.winCount}승{" "}
                {teamData?.drawCount}무 {teamData?.loseCount}패
              </p>
            </div>
          </div>
        </div>

        <div className={matchInfo}>
          <h3>대결 정보</h3>
          <div className={matchInfoContainer}>
            <Icon asset="Location" className={matchInfoContainerIcon} />
            <h4>활동 지역</h4>
            <h5>{teamData?.mainArea}</h5>
          </div>
          <div className={matchInfoContainer}>
            <Icon asset="Person-Pin" className={matchInfoContainerIcon} />
            <h4>선호 장소</h4>
            {teamData?.preferredArea === "home" ? (
              <h5>저희 홈구장에서 하고 싶습니다.</h5>
            ) : (
              <h5>어디든 달려갑니다.</h5>
            )}
          </div>
          <div className={matchInfoContainer}>
            <Icon asset="Calendar" className={matchInfoContainerIcon} />
            <h4>가능 요일</h4>
            {teamData?.weekdays?.map((weekday, index) => (
              <h5 key={`weekday-${index}`}>{weekday}. </h5>
            ))}
          </div>
          <div className={matchInfoContainer}>
            <Icon asset="Alarm" className={matchInfoContainerIcon} />
            <h4>가능 시간</h4>
            {teamData?.time.map((times, index) => (
              <h5 key={`times-${index}`}>{times}. </h5>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", width: "100%" }}>
          <div className={rowDiv}>
            <PlaceholderWithJSX
              label="경기 히스토리"
              content={matchContainer}
              length="long"
              linkType={false}
              arrowLink={link}
              arrowLinkAs={link.as}
            />
          </div>
        </div>

        <Link
          href={{
            pathname: "/team/[teamName]/members",
            query: { teamId: 30, teamName: teamName },
          }}
          as="/team/[teamName]/members"
        >
          <div className={tabs}>
            <p>멤버 소개(22)</p>
            <Icon asset="Right-Arrow" className={tabsIcon} />
          </div>
        </Link>
        <Link
          href={{
            pathname: "/team/[teamName]/schedule",
            query: { teamId: teamId, teamName: teamName },
          }}
          as="/team/[teamName]/schedule"
        >
          <div className={tabs}>
            <p>예정된 경기 일정</p>
            <Icon asset="Right-Arrow" className={tabsIcon} />
          </div>
        </Link>
        {isCaptain && (
          <>
            <Link
              href={{
                pathname: "/team/[teamName]/challenges",
                query: { teamId: teamId, teamName: teamName },
              }}
              as="/team/[teamName]/challenges"
            >
              <div className={tabs}>
                <p>대결 요청</p>
                <Icon asset="Right-Arrow" className={tabsIcon} />
              </div>
            </Link>
            <Link
              href={{
                pathname: "/team/[teamName]/accept",
                query: { teamId: teamId, teamName: teamName },
              }}
              as="/team/[teamName]/accept"
            >
              <div className={tabs}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>팀원 수락</p>
                  <Reddot />
                </div>
                <Icon asset="Right-Arrow" className={tabsIcon} />
              </div>
            </Link>
          </>
        )}

        {isCaptain ? (
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", width: "50%" }}>
              <RegisterFooter
                content={goMatches ? "대결등록 취소" : "대결등록"}
                handleClick={goMatchesApi}
                activeStyle={!!goMatches}
              />
            </div>
            <div style={{ display: "flex", width: "50%" }}>
              <RegisterFooter
                handleClick={recruitMembers}
                content={recruitMember ? "팀원 모집 취소" : "팀원모집"}
                activeStyle={!!recruitMember}
              />
            </div>
          </div>
        ) : (
          <RegisterFooter
            handleClick={() => {
              setGoMatches(!goMatches);
            }}
            content={"신청하기"}
            activeStyle={!!recruitMember}
          />
        )} */}
      </main>
    </>
  );
}
/**
 *
 * @ToDo fetch with team id
 * params: teamname, 팀 소개, 팀 이미지
 *
 * 팀원 수락할 때 신규 요청이 있는지
 *
 */
