import React, { useState, useEffect } from "react";
// hooks
import { useRouter } from "next/router";
import Link from "next/link";
import { makeRequest } from "services/makeRequest";
// component
import Apply from "./apply";
import Join from "./join";
import Image, { ImageWithHeader } from "@components/image";
import Icon from "@components/icon";
import { PlaceholderWithJSX } from "@components/PlaceholderWithTitle";
// style
import Footer, { RegisterFooter } from "@components/footer";
import styles from "./MyTeam.module.scss";

type PageProps = {
  data?: any;
  decodedData?: any;
};

type ITeam = {
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

type IInfo = ITeam[];

const { myTeam, team, activeTeam } = styles;

export default function MyTeam(props: PageProps): JSX.Element {
  console.log(props);
  const router = useRouter();
  console.log(router.query);

  //state
  const [active, setActive] = useState(true);
  const [joinTeamInfo, setJoinTeamInfo] = useState<IInfo>([]);
  const [applyTeamInfo, setApplyTeamInfo] = useState<IInfo>([]);
  const handleActive = () => {
    setActive(!active);
  };

  const myId = props?.data?.decodedData?.memberId;
  useEffect(() => {
    makeRequest({
      endpoint: `members/${myId}/matches`,
      // endpoint: `members/12/matches`,
      method: "GET",
      auth: true,
    })
      .then((res: IInfo) => {
        console.log(res);
        setJoinTeamInfo(res);
      })
      .catch((error: any) => console.log(error));
  }, []);

  useEffect(() => {
    makeRequest({
      endpoint: `teams/apply`,
      method: "GET",
      auth: true,
    })
      .then((res: IInfo) => {
        console.log(res);
        setApplyTeamInfo(res);
      })
      .catch((error: any) => console.log(error));
  }, []);

  return (
    <main className={myTeam}>
      <section className={team}>
        <div
          className={active ? activeTeam : ""}
          onClick={() => handleActive()}
        >
          <p>소속팀</p>
        </div>
        <div
          className={active ? "" : activeTeam}
          onClick={() => handleActive()}
        >
          <p>신청한팀</p>
        </div>
      </section>
      {active ? (
        <Join data={joinTeamInfo}></Join>
      ) : (
        <Apply data={applyTeamInfo}></Apply>
      )}
    </main>
  );
}
/**
 *
 * @ToDo fetch with team ids
 * params: teamname, 팀 전적, 선호지역, 멤버 수
 *
 */
