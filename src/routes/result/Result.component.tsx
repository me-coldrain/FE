import React from "react";
import Head from "next/head";
import Landing from "routes/formation/landing";
import UserProfile from "@components/userProfile";
import RouterButton from "@components/RouterButton";
import { usePageData, usePageDetails } from "hooks/page";
import { injectClassNames } from "utils/css";
import Link from "next/link";
import styles from "./Result.module.scss";

const { profiles, selected, selectedMember } = styles;

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

export default function Page(): JSX.Element {
  const { title = "", description = "" } = usePageDetails();
  const { content = "" } = usePageData();

  return (
    <>
      <Head>
        {addTitleTags(title)}
        {addDescriptionTag(description)}
        <meta name="robots" content="INDEX,FOLLOW" />
      </Head>
      <main>
        <section>
          <article>
            <h2>교체자 명단을 선택해주세요</h2>
            <p>
              미리 지정한 포메이션에서 교체된 선수를 선택해주세요.
              <br />
              개인 점수가 부여됩니다.
            </p>
            <div className={selected}>
              <div className={selectedMember}>
                <p>x</p>
                <UserProfile></UserProfile>
              </div>
              <UserProfile></UserProfile>
              <UserProfile></UserProfile>
              <UserProfile></UserProfile>
              <UserProfile></UserProfile>
              <UserProfile></UserProfile>
              <UserProfile></UserProfile>
            </div>
          </article>
          <article>
            <div className={profiles}>
              <UserProfile></UserProfile>
              <UserProfile></UserProfile>
              <UserProfile></UserProfile>
              <UserProfile></UserProfile>
            </div>
          </article>
        </section>
        <RouterButton bigRound>완료</RouterButton>
      </main>
    </>
  );
}
