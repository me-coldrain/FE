import React, { useEffect, useState } from "react";
import Head from "next/head";
import Landing from "routes/page/landing";
// component
import Icon from "@components/icon";
// hooks
import { usePageData, usePageDetails } from "hooks/page";
import { injectClassNames } from "utils/css";

import Link from "next/link";
import styles from "./Page.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "stores";

const {
  page,
  pageLanding,
  pageContent,
  placeholder,
  teamCard,
  teamCardFlex,
  teamCardWinRate,
  teamCardInfo,
  teamCardIcon,
  safeArea,
} = styles;

type PageProps = {
  isLanding?: boolean;
};

type Teams = {
  id: number;
  name: string;
  winRate: number;
  games: number;
  win: number;
  draw: number;
  lose: number;
  location: string;
  where: boolean;
  weekday: string[];
  time: string;
};

export const addTitleTags = (title: string): JSX.Element => {
  if (!title) {
    return <></>;
  }

  return (
    <>
      <title>{title}</title>
      <meta name="og:title" content={title} />
    </>
  );
};

export const addDescriptionTag = (description: string): JSX.Element => {
  if (!description) {
    return <></>;
  }

  return (
    <meta name="description" property="og:description" content={description} />
  );
};

export default function Page(props: PageProps): JSX.Element {
  const { isLanding } = props;
  const { title = "", description = "" } = usePageDetails();
  const { content = "" } = usePageData();

  // const [teams, setTeams] = useState<Teams[]>();

  const teams = useSelector((state: RootState) => state.teams);

  const classNames = injectClassNames(page, [pageLanding, isLanding]);

  return (
    <>
      <Head>
        {addTitleTags(title)}
        {addDescriptionTag(description)}
        <meta name="robots" content="INDEX,FOLLOW" />
      </Head>
      <main className={classNames}>
        {isLanding && <Landing />}
        <section>
          <div className={safeArea}>
            {teams?.map((item, index) => {
              return (
                <Link
                  key={`teamCard-${index}`}
                  href={{
                    pathname: "/team/[teamName]",
                    query: { teamId: item.id, teamName: item.name },
                  }}
                  as="/team/[teamName]"
                >
                  <div className={teamCard}>
                    <div className={teamCardFlex}>
                      <h2>{item.name}</h2>
                    </div>
                    <div className={teamCardWinRate}>
                      <p>승률</p>
                      <h3>{item.winRate}%</h3>
                      <h3>|</h3>
                      <h3>
                        {item.games}전 {item.win}승 {item.draw}무 {item.lose}패
                      </h3>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div className={teamCardInfo}>
                        <Icon asset="Location" className={teamCardIcon} />
                        <p>서울특별시</p>
                      </div>
                      <div className={teamCardInfo}>
                        <Icon asset="Location" className={teamCardIcon} />
                        <p>홈구장 선호</p>
                      </div>
                      <div className={teamCardInfo}>
                        <Icon asset="Calendar" className={teamCardIcon} />
                        <p>월.화.수.목.금 - 오전</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

/**
 *
 * @ToDo 무한 스크롤 적용
 */
