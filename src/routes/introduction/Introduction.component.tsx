import React from "react";
import Head from "next/head";
import { usePageData, usePageDetails } from "hooks/page";
import RouterButton from "components/RouterButton";
import styles from "./Introduction.module.scss";

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

export default function Introduction(): JSX.Element {
  const { introduction } = styles;
  const { title = "", description = "" } = usePageDetails();

  return (
    <>
      <Head>
        {addTitleTags(title)}
        {addDescriptionTag(description)}
        <meta name="robots" content="INDEX,FOLLOW" />
      </Head>
      <main className={introduction}>
        <section>
          <h1>서비스 소개</h1>
          <p>
            팀매칭/ 팀원 모집 어려우셨죠?
            <br />팀 전략/ 개인 전략을 기록해보세요
          </p>
        </section>
        <RouterButton url="/login" bigRound>
          시작하기
        </RouterButton>
      </main>
    </>
  );
}
