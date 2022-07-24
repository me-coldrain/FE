import React, { useEffect, useState } from "react";
import Head from "next/head";
import Landing from "routes/page/landing";
// component
import Icon from "@components/icon";
import { ButtonRound } from "@components/button";
// hooks
import { usePageData, usePageDetails } from "hooks/page";
import { injectClassNames } from "utils/css";
import router from "next/router";
import Link from "next/link";

import styles from "./Page.module.scss";
import { browserStorage } from "utils/browser";

interface Teams {
  createdDate: string;
  drawCount: number;
  headCount: number;
  loseCount: number;
  mainArea: string;
  match: boolean;
  modifiedDate: string;
  preferredArea: string;
  recruit: boolean;
  teamId: number;
  teamName: string;
  time: string[];
  totalGameCount: number;
  weekdays: string[];
  winCount: number;
  winRate: number;
}

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

  const teams: Teams[] = data?.content;

  const classNames = injectClassNames(page, [pageLanding, isLanding]);

  const [homePage, setHomePage] = useState<boolean>(true);

  //temp code --------------
  // browserStorage.setCookie(
  //   "token",
  //   "eyJ0eXBlIjoidG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiVVNFUiIsInN1YiI6ImFkbWluQG5hdmVyLmNvbSIsIm5pY2tuYW1lIjpudWxsLCJleHAiOjE2NjA3MDg2MzEsImlhdCI6MTY1ODExNjYzMSwibWVtYmVySWQiOjEyfQ.Fh58ow2E1n7QrG8UMBmtUu4axmrRtPQ_LevxW9XUKj4",
  //   3
  // );
  // browserStorage.setCookie(
  //   "token",
  //   "eyJ0eXBlIjoidG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBuYXZlci5jb20iLCJvcGVuVGVhbUlkIjo4LCJyb2xlIjoiVVNFUiIsIm5pY2tuYW1lIjoi6rSA66as7J6QIiwiZXhwIjoxNjYxMDY0ODQyLCJpYXQiOjE2NTg0NzI4NDIsIm1lbWJlcklkIjoxMn0._dicdwpYs8mk87WhWI66iTzauTZgQKKmLBjW9Xzsjj4",
  //   3
  // );
  // -----------------------

  // 로그인 되어있지 않을 시 온보딩페이지로 이동시킴
  useEffect(() => {
    if (data === false) {
      router.replace("/introduction");
    }
  }, []);

  return (
    <>
      <Head>
        {addTitleTags(title)}
        {addDescriptionTag(description)}
        <meta name="robots" content="INDEX,FOLLOW" />
      </Head>
      <main className={classNames}>
        {isLanding && <Landing homePage={homePage} setHomePage={setHomePage} />}
        <section>
          <div className={safeArea}>
            {teams?.map((item, index) => {
              return (
                <Link
                  key={`teamCard-${index}`}
                  href={{
                    pathname: "/team/[teamName]",
                    query: {
                      teamId: item.teamId,
                      teamName: item.teamName,
                      status: homePage,
                    },
                  }}
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
                        <p>{item.mainArea}</p>
                      </div>
                      <div className={teamCardInfo}>
                        <Icon asset="Location" className={teamCardIcon} />

                        <p>
                          {item.preferredArea === "home"
                            ? "홈구장 선호"
                            : "어웨이 가능"}
                        </p>
                      </div>
                      <div className={teamCardInfo}>
                        <Icon asset="Calendar" className={teamCardIcon} />
                        {item.weekdays.map((weekday, index) => (
                          <p key={`weekday=${index}`}>{weekday + "."} </p>
                        ))}
                        {item.time.map((times, index) => (
                          <p key={`time-${index}`}>{times + "/"}</p>
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
