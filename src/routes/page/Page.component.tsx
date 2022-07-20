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
import { ButtonRound } from "@components/button";
import router from "next/router";
import { browserStorage } from "utils/browser";
import { useDispatch } from "react-redux";
import { makeRequest } from "services/makeRequest";
import { setTeams, Teams } from "stores/teams";
import { GetServerSideProps, NextPageContext } from "next";

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
  gettingMembers,
} = styles;

type PageProps = {
  isLanding?: boolean;
  data?: any;
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

const Page = (props: PageProps): JSX.Element => {
  const { isLanding, data } = props;
  const { title = "", description = "" } = usePageDetails();
  const { content = "" } = usePageData();

  const teams: Teams[] = data.content;

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
                    query: { teamId: item.teamId, teamName: item.teamName },
                  }}
                  // as={`/team/${item.teamName}`}
                >
                  <div className={teamCard}>
                    <div className={teamCardFlex}>
                      <h2>{item.teamName}</h2>
                    </div>
                    <div className={teamCardWinRate}>
                      <p>승률</p>
                      <h3>{item.winRate}%</h3>
                      <h3>|</h3>
                      <h3>
                        {item.totalGameCount}전 {item.winCount}승{" "}
                        {item.drawCount}무 {item.loseCount}패
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
                        {item.weekdays.map((weekday, index) => (
                          <p key={`weekday=${index}`}>{weekday + "."}</p>
                        ))}
                        {item.time.map((times, index) => (
                          <p key={`time-${index}`}>{times}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className={gettingMembers}>
            <ButtonRound
              handleClick={() => {
                router.push("/create");
              }}
              content="+"
              length="round"
            />
          </div>
        </section>
      </main>
    </>
  );
};

/**
 *
 * @ToDo 무한 스크롤 적용
 */

export default Page;
