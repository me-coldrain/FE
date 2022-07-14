import React from "react";
import Head from "next/head";
import { usePageData, usePageDetails } from "hooks/page";
import Input from "components/Input";
import RouterButton from "components/RouterButton";
import Link from "next/link";
import styles from "./Login.module.scss";

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
  const { user, inputBox, signup, kakao } = styles;
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
            <Input placeholder="아이디" type="id" normal></Input>
            <Input placeholder="비밀번호" type="password" normal></Input>
            <RouterButton url="/" bigSquare bgc="#4B72F1">
              로그인
            </RouterButton>
          </div>
          <div className={signup}>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </div>
          <div className={kakao}>
            <p>SNS계정으로 간편 로그인</p>
            <a href="/">kakao</a>
          </div>
        </section>
      </main>
    </>
  );
}
