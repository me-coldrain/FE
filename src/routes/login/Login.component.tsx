import React from "react";
import Head from "next/head";
import { usePageData, usePageDetails } from "hooks/page";
import RouterButton from "components/RouterButton";
import styles from "./Login.module.scss";
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

  return (
    <>
      <Head>
        {addTitleTags(title)}
        {addDescriptionTag(description)}
        <meta name="robots" content="INDEX,FOLLOW" />
      </Head>
      <main className={user}>
        <section>
          <h1>로고</h1>
          <div className={inputBox}>
            <input placeholder="아이디" type="id"></input>
            <input placeholder="비밀번호" type="password"></input>
            <RouterButton url="/" bigSquare>
              로그인
            </RouterButton>
          </div>
          <div className={signup}>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
