import React from "react";
import Head from "next/head";
import { usePageDetails } from "hooks/page";
import { useRouter } from "next/router";
import { RegisterFooter } from "@components/footer";
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
  const router = useRouter();
  const { introduction, logo, footerBox } = styles;
  const { title = "", description = "" } = usePageDetails();
  const handleLink = () => {
    router.push("/login");
  };

  return (
    <>
      <Head>
        {addTitleTags(title)}
        {addDescriptionTag(description)}
        <meta name="robots" content="INDEX,FOLLOW" />
      </Head>
      <main className={introduction}>
        <div className={logo}>로고</div>
        <section>
          <h1>
            함께할수록
            <br />
            더욱 즐거워질
            <br />
            90분
          </h1>
          <p>
            함께 할 팀원이나 대결상대를 찾고
            <br />
            경기 후 경기결과를 기록해보세요.
          </p>
        </section>
        <div className={footerBox}>
          <RegisterFooter
            content="시작하기"
            handleClick={() => {
              handleLink();
            }}
            activeStyle={false}
          ></RegisterFooter>
        </div>
      </main>
    </>
  );
}
