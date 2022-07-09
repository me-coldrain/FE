import React, { useState } from "react";
import Head from "next/head";
import { usePageData, usePageDetails } from "hooks/page";
import Button from "components/button";
import styles from "./signup.module.scss";
import Link from "next/link";

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

export default function User(): JSX.Element {
  const { user, inputBox, signup } = styles;
  const { title = "", description = "" } = usePageDetails();
  const { content = "" } = usePageData();

  return (
    <>
      <Head>
        {addTitleTags(title)}
        {addDescriptionTag(description)}
        <meta name="robots" content="INDEX,FOLLOW" />
      </Head>
      <main className={user}>
        <section>
          <div className={inputBox}>
            <label htmlFor="id">아이디</label>
            <input id="id"></input>
            <label htmlFor="pwd">비밀번호</label>
            <input id="pwd"></input>
            <label htmlFor="pwdchk">비밀번호 재확인</label>
            <input id="pwdchk"></input>
          </div>
          <Button url="/login" bigRound>
            다음
          </Button>
        </section>
      </main>
    </>
  );
}
