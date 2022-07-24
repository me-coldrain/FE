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
import styles from "./Player.module.scss";
import { makeRequest } from "services/makeRequest";
import { GetStaticProps, InferGetServerSidePropsType } from "next";

type IPlayer = [
  {
    memberId?: number;
    profileImagerUrl?: string;
    nickname?: string;
    position?: string;
    mvpPoint?: number;
    abilityPoint?: number;
    rank?: number;
  }
];

const {
  aboutTeam,
  aboutTeamImage,
  upperBox,
  top3Teams,
  top3TeamsProfile,
  top3TeamsNum1,
  top3TeamsNum2,
  top3TeamsNum3,
  top3TeamsName,
  top3TeamsRecord,
  top3TeamsRecordScore,
  tabs,
  tabsTitle,
  tabsContent,
  tabsTitlePos,
  tabsTitleTeam,
  tabsTitleScore,
  tabsContentPos,
  tabsContentTeam,
  tabsContentScore,
  active,
} = styles;

export const getStaticProps: GetStaticProps = async () => {
  const data = await makeRequest({
    endpoint: `home/rank/members?ability=mvp`,
    method: "GET",
    auth: true,
    // params: "MVP",
    // "?ability=MVP" 이게 쿼리로 들어가야 정상작동함
  });
  return {
    props: { data },
  };
};

export default function Rank({
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>): JSX.Element {
  console.log(data);
  const router = useRouter();
  const { teamId, teamName } = router.query;
  console.log("fetch with teamId =", teamId, teamName);
  //state
  const [playerData, setPlayerData] = useState<IPlayer>();
  const [found, setFound] = useState<string>("mvp");

  const playerRanking = async () => {
    await makeRequest({
      endpoint: `home/rank/members?ability=${found}`,
      method: "GET",
      auth: true,
    })
      .then((res: IPlayer) => {
        setPlayerData(res), console.log(res);
      })
      .catch((error: any) => console.log(error));
  };

  useEffect(() => {
    playerRanking();
  }, [found]);

  //hooks
  const link = {
    pathname: "/team/[teamName]/matches",
    query: { teamId: teamId, teamName: teamName as string },
    as: "/team/[teamName]/matches",
  };

  const number1 = playerData?.find((x) => (x.rank as number) === 1);
  const number2 = playerData?.find((x) => (x.rank as number) === 2);
  const number3 = playerData?.find((x) => (x.rank as number) === 3);

  return (
    <>
      <main className={aboutTeam}>
        <div className={upperBox}>
          <ImageWithHeader
            className={aboutTeamImage}
            src="/img/RealStadium.png"
          />
          <div className={top3Teams}>
            <div className={top3TeamsNum2}>
              <img
                src={number2?.profileImagerUrl}
                className={top3TeamsProfile}
              ></img>
              <div className={top3TeamsName}>{number2?.nickname}</div>
              <div className={top3TeamsRecord}>
                <div className={top3TeamsRecordScore}>
                  <div>{number2?.abilityPoint}</div>
                </div>
                <img src="/img/top2.png"></img>
              </div>
            </div>
            <div className={top3TeamsNum1}>
              <img
                src={number1?.profileImagerUrl}
                className={top3TeamsProfile}
              ></img>
              <div className={top3TeamsName}>{number1?.nickname}</div>
              <div className={top3TeamsRecord}>
                <div className={top3TeamsRecordScore}>
                  <div>{number1?.abilityPoint}</div>
                </div>
                <img src="/img/top1.png"></img>
              </div>
            </div>
            <div className={top3TeamsNum3}>
              <img
                src={number3?.profileImagerUrl}
                className={top3TeamsProfile}
              ></img>
              <div className={top3TeamsName}>{number3?.nickname}</div>
              <div className={top3TeamsRecord}>
                <div className={top3TeamsRecordScore}>
                  <div>{number3?.abilityPoint}</div>
                </div>
                <img src="/img/top3.png"></img>
              </div>
            </div>
          </div>
        </div>
        <section>
          <h2>Top10 Rank</h2>
          <article>
            <div
              onClick={() => {
                setFound("mvp");
              }}
              className={found === "mvp" ? active : ""}
            >
              MVP
            </div>
            <div
              onClick={() => {
                setFound("charming");
              }}
              className={found === "charming" ? active : ""}
            >
              분위기 메이커
            </div>
            <div
              onClick={() => {
                setFound("striker");
              }}
              className={found === "striker" ? active : ""}
            >
              공격수
            </div>
            <div
              onClick={() => {
                setFound("midfielder");
              }}
              className={found === "midfielder" ? active : ""}
            >
              미드필더
            </div>
            <div
              onClick={() => {
                setFound("defender");
              }}
              className={found === "defender" ? active : ""}
            >
              수비수
            </div>
            <div
              onClick={() => {
                setFound("goalkeeper");
              }}
              className={found === "goalkeeper" ? active : ""}
            >
              골키퍼
            </div>
          </article>
          <div className={tabs}>
            <div className={tabsTitle}>
              <div className={tabsTitlePos}>Pos</div>
              <div className={tabsTitleTeam}>Team</div>
              <div className={tabsTitleScore}>Score</div>
            </div>
            {playerData?.map((playerData: any) => (
              <Link
                key={playerData?.memberId}
                href={{
                  pathname: "/team/[teamName]/members",
                  query: { teamId: 30, teamName: teamName },
                }}
                as="/team/[teamName]/members"
              >
                <div className={tabsContent}>
                  <div className={tabsContentPos}>
                    <div
                      style={{
                        position: "absolute",
                        width: "0px",
                        height: "0px",
                        borderBottom: "6em solid #4b72f1",
                        borderLeft: "3.5em solid #4b72f1",
                        borderRight: "3.5em solid transparent",
                      }}
                    ></div>
                    <span>{playerData?.rank}</span>
                  </div>
                  <div className={tabsContentTeam}>
                    {playerData?.nickname}
                    {playerData?.rank === 1 ? (
                      <span>
                        {" "}
                        <img src="/img/flag1.png"></img>
                      </span>
                    ) : playerData?.rank === 2 ? (
                      <span>
                        {" "}
                        <img src="/img/flag2.png"></img>
                      </span>
                    ) : playerData?.rank === 3 ? (
                      <span>
                        {" "}
                        <img src="/img/flag3.png"></img>
                      </span>
                    ) : null}
                  </div>
                  <div className={tabsContentScore}>
                    {playerData?.abilityPoint}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
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
