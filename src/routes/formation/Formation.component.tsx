import React from "react";
import Head from "next/head";
import Landing from "routes/formation/landing";
import UserProfile from "@components/userProfile";
import RouterButton from "@components/RouterButton";
import { usePageData, usePageDetails } from "hooks/page";
import { injectClassNames } from "utils/css";
import Link from "next/link";
import styles from "./Formation.module.scss";

const { profiles } = styles;

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
        <Landing />
        <section>
          <article>
            <h3>공격수</h3>
            <hr />
            <div className={profiles}>
              <UserProfile></UserProfile>
              <UserProfile></UserProfile>
              <UserProfile></UserProfile>
              <UserProfile></UserProfile>
            </div>
          </article>
          <article>
            <h3>미드필더</h3>
            <hr />
            <div>
              <UserProfile></UserProfile>
            </div>
          </article>
          <article>
            <h3>수비수</h3>
            <hr />
            <div>
              <UserProfile></UserProfile>
            </div>
          </article>
          <article>
            <h3>골키퍼</h3>
            <hr />
            <div>
              <UserProfile></UserProfile>
            </div>
          </article>
        </section>
        <RouterButton bigRound>완료</RouterButton>
      </main>
    </>
  );
}
