import React, { useEffect, useState } from "react";
// hooks
import { useRouter } from "next/router";
// component
import { ImageWithHeader } from "@components/image";
import Icon from "@components/icon";
import { PlaceholderWithJSX } from "@components/PlaceholderWithTitle";
import SafeArea from "@components/safeArea";
// style
import Link from "next/link";
import { InfoFooter, RegisterFooter } from "@components/footer";
import Reddot from "@components/reddot";
import { makeRequest } from "services/makeRequest";
import styles from "./Team.module.scss";
import team from ".";

type PageProps = {
  data?: any;
};

type ITeam = {
  apply: boolean;
  approved: boolean;
  createdDate: string;
  drawCount: number;
  headCount: number;
  introduce: string;
  loseCount: number;
  mainArea: string;
  match: boolean;
  matching: boolean; //todo
  modifiedDate: string;
  otherCaptain: boolean;
  participate: boolean;
  preferredArea: string;
  recentMatchHistory: {
    historyId: number;
    matchDate: string;
    opposingTeam: {
      name: string;
      result: string;
      score: number;
    };
    team: {
      name: string;
      result: string;
      score: number;
    };
  } | null;
  recruit: boolean;
  teamCaptain: boolean;
  teamId: number;
  teamImageFileUrl: string;
  teamName: string;
  time: string[];
  totalGameCount: number;
  weekdays: string[];
  winCount: number;
  winPoint: number;
  winRate: number;
};

type TeamBasicInfo = {
  historyId: number;
  matchDate: string;
  opposingTeam: {
    name: string;
    result: string;
    score: number;
  };
  team: {
    name: string;
    result: string;
    score: number;
  };
} | null;

const {
  aboutTeam,
  aboutTeamImage,
  scoreBoard,
  scoreBoardDetail,
  scoreBoardDetailBox,
  scoreBoardDetailBoxContent,
  scoreBoardDetailBoxContentTotal,
  scoreBoardDetailBoxContentWin,
  scoreBoardDetailBoxContentDraw,
  scoreBoardDetailBoxContentLose,
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

export default function Team(props: PageProps): JSX.Element {
  const router = useRouter();

  const teamData: ITeam = props?.data;

  const { teamId, teamName, status } = router.query;
  //state
  const [teamDetail, setTeamDetail] = useState<ITeam>();
  const [from, setFrom] = useState<boolean>(false);
  const [goMatches, setGoMatches] = useState<boolean | null>(null);
  const [recruitMember, setRecruitMember] = useState<boolean | null>(null);
  const [isTeamCaptain, setIsTeamCaptain] = useState<boolean | null>();
  const [error, setError] = useState<string>();

  //hooks
  const link = {
    pathname: `/team/${teamName}/matches`,
    query: { teamId: teamId as string, teamName: teamName as string },
    as: `/team/${teamName}/matches`,
  };

  // match, recruit 전송 -----------
  useEffect(() => {
    setTeamDetail(teamData);
    if (status === "true") {
      setFrom(true);
    } else {
      setFrom(false);
    }

    if (teamDetail?.match) {
      setGoMatches(true);
    } else {
      setGoMatches(false);
    }
    if (teamDetail?.recruit) {
      setRecruitMember(true);
    } else {
      setRecruitMember(false);
    }
  }, []);

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
    if (recruitMember) {
      await makeRequest({
        endpoint: `home/teams/${teamId}/recruit/end`,
        method: "POST",
        auth: true,
      })
        .then(() => setRecruitMember(false))
        .catch((error: any) => console.log(error));
    } else {
      router.push({
        pathname: `[teamName]/recruit`,
        query: { teamId: teamId, teamName: teamName },
      });
    }
  };
  // ---------------------

  const handleClickFooterParticipate = async () => {
    if (teamDetail?.participate) {
      await makeRequest({
        endpoint: `home/teams/${teamId}/leave`,
        method: "DELETE",
        auth: true,
      });
    } else {
      router.push({
        pathname: `/team/[teamName]/apply/rules`,
        query: { teamId: teamId, teamName: teamName },
      });
    }
  };

  const handleClickFooterChallenge = () => {
    if (teamDetail?.apply) {
      console.log("매치 취소 api");
    } else {
      router.push({
        pathname: `/team/[teamName]/match`,
        query: { teamId: teamId, teamName: teamName },
      });
    }
  };
  const deleteTeam = async () => {
    await makeRequest({
      endpoint: `home/teams/${teamId}/disband`,
      method: "DELETE",
      auth: true,
    }).then(() => router.push("/"));
  };
  const unsubscribe = () => {
    setGoMatches(null);
    setRecruitMember(null);
    setError("");
    setIsTeamCaptain(null);
  };
  useEffect(() => {
    return unsubscribe;
  }, []);

  const MatchContainer = ({
    opposingTeam,
    team,
    matchDate,
  }: TeamBasicInfo): JSX.Element => (
    <div className={matchHistoryContainer}>
      <div className={matchHistoryContainerWin}>
        <div className={matchHistoryContainerWinner}>
          <p>승리</p>
        </div>
        <p>{team.result === "승리" ? team.name : opposingTeam.name}</p>
      </div>
      <div className={matchHistoryContainerResult}>
        <p>{matchDate}</p>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            margin: "0.5rem",
          }}
        >
          {team.result === "승리"
            ? `${team.score} : ${opposingTeam.score}`
            : `${opposingTeam.score} : ${team.score}`}
        </p>
      </div>
      <div className={matchHistoryContainerLose}>
        <div className={matchHistoryContainerLoser}>
          <p>패배</p>
        </div>
        <p>{team.result === "승리" ? opposingTeam.name : team.name}</p>
      </div>
    </div>
  );

  return (
    <>
      <SafeArea />
      <ImageWithHeader
        className={aboutTeamImage}
        src={teamDetail?.teamImageFileUrl}
        alt="Desktop & Mobile PWA Application"
        width="100%"
        // height="220px"
        title={teamName as string}
        content={teamDetail?.introduce}
      />
      <div className={scoreBoard}>
        <div className={scoreBoardDetail}>
          <div
            className={scoreBoardDetailBox}
            style={{ borderRight: "1px solid rgba(200, 200, 200, 1)" }}
          >
            <div className={scoreBoardContentName}>
              <p>승점</p>
            </div>
            <div>
              <p>
                <strong>{teamDetail?.winPoint}</strong>점
              </p>
            </div>
          </div>
          <div className={scoreBoardDetailBox}>
            <div className={scoreBoardContentName}>
              <p>승률</p>
            </div>
            <div className={scoreBoardDetailBoxContent}>
              <p>
                <strong>{teamDetail?.winRate}</strong>%
              </p>
              <div className={scoreBoardDetailBoxContent}>
                <div className={scoreBoardDetailBoxContentTotal}>
                  {teamDetail?.totalGameCount}
                </div>
                <div className={scoreBoardDetailBoxContentWin}>
                  {teamDetail?.winCount}
                </div>
                <div className={scoreBoardDetailBoxContentDraw}>
                  {teamDetail?.drawCount}
                </div>
                <div className={scoreBoardDetailBoxContentLose}>
                  {teamDetail?.loseCount}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={aboutTeam}>
        <div className={matchInfo}>
          <h3>대결 정보</h3>
          <div className={matchInfoContainer}>
            <Icon asset="Location" className={matchInfoContainerIcon} />
            <h4>활동 지역</h4>
            <h5>{teamDetail?.mainArea}</h5>
          </div>
          <div className={matchInfoContainer}>
            <Icon asset="Person-Pin" className={matchInfoContainerIcon} />
            <h4>선호 장소</h4>
            {teamDetail?.preferredArea === "home" ? (
              <h5>저희 홈구장에서 하고 싶습니다.</h5>
            ) : (
              <h5>어디든 달려갑니다.</h5>
            )}
          </div>
          <div className={matchInfoContainer}>
            <Icon asset="Calendar" className={matchInfoContainerIcon} />
            <h4>가능 요일</h4>
            {teamDetail?.weekdays?.map((weekday, index) => (
              <h5 key={`weekday-${index}`}>{weekday}. </h5>
            ))}
          </div>
          <div className={matchInfoContainer}>
            <Icon asset="Alarm" className={matchInfoContainerIcon} />
            <h4>가능 시간</h4>
            {teamDetail?.time?.map((times, index) => (
              <h5 key={`times-${index}`}>{times}. </h5>
            ))}
          </div>
        </div>

        {teamDetail?.recentMatchHistory !== null && (
          <div style={{ display: "flex", width: "100%" }}>
            <Link
              href={{
                pathname: "/team/[teamName]/matches",
                query: { teamId: teamId, teamName: teamName },
              }}
            >
              <div className={rowDiv}>
                {teamDetail?.recentMatchHistory && (
                  <PlaceholderWithJSX
                    label="경기 히스토리"
                    content={
                      <MatchContainer {...teamDetail?.recentMatchHistory} />
                    }
                    length="long"
                    linkType={false}
                    arrowLink={link}
                    arrowLinkAs={link.as}
                    {...teamDetail?.recentMatchHistory}
                  />
                )}
              </div>
            </Link>
          </div>
        )}

        <Link
          href={{
            pathname: "/team/[teamName]/members",
            query: { teamId: teamId, teamName: teamName },
          }}
        >
          <div className={tabs}>
            <p>멤버 소개({teamDetail?.headCount})</p>
            <Icon asset="Right-Arrow" className={tabsIcon} />
          </div>
        </Link>
        <Link
          href={{
            pathname: `/team/${teamName}/schedule`,
            query: { teamId: teamId, teamName: teamName },
          }}
        >
          <div className={tabs}>
            <p>예정된 경기 일정</p>
            <Icon asset="Right-Arrow" className={tabsIcon} />
          </div>
        </Link>
        {teamDetail?.teamCaptain && (
          <>
            <Link
              href={{
                pathname: "/team/[teamName]/challenges",
                query: { teamId: teamId, teamName: teamName },
              }}
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

        {teamDetail?.teamCaptain ? (
          <div style={{ display: "flex", color: "#fff" }}>
            <div style={{ display: "flex", width: "50%" }}>
              <RegisterFooter
                content={goMatches ? "대결등록 중" : "대결등록하기"}
                handleClick={goMatchesApi}
                activeStyle={!!goMatches}
              />
            </div>
            <div style={{ display: "flex", width: "50%" }}>
              <RegisterFooter
                handleClick={recruitMembers}
                content={recruitMember ? "팀원 모집 중" : "팀원모집하기"}
                activeStyle={!!recruitMember}
              />
            </div>
          </div>
        ) : (
          <div style={{ color: "#fff" }}>
            <RegisterFooter
              handleClick={handleClickFooterChallenge}
              content={
                teamData?.participate
                  ? "탈퇴하기"
                  : status
                  ? "대결하기"
                  : "신청하기"
              }
              activeStyle={!!teamData?.recruit}
            />
          </div>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {teamDetail?.teamCaptain && (
          <>
            <InfoFooter
              content={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100vw",
                  }}
                >
                  <h5 onClick={() => router.push(`/founding/edit`)}>
                    수정하기
                  </h5>
                  <h5 onClick={deleteTeam}>팀 해체하기</h5>
                </div>
              }
            />
            <InfoFooter
              content={`창단 일자: ${teamDetail?.createdDate?.split("T")[0]}`}
            />
          </>
        )}
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
 * 신청만 하면 apply가 true로 바뀜
 *
 * 승률 컴포넌트 이상하게 됨
 *
 * css 버튼
 */
