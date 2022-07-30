import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { usePageDetails } from "hooks/page";
import { makeRequest } from "services/makeRequest";

import styles from "./Kakao.module.scss";

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
  const router = useRouter();
  console.log(router);
  const code = router.query?.code;
  console.log(code);
  const { user } = styles;
  const { title = "", description = "" } = usePageDetails();

  useEffect(() => {
    setTimeout(() => {
      makeRequest({
        endpoint: `members/kakao/login?code=${code}`,
        method: "GET",
        auth: false,
      }).then((res: any) => {
        console.log(res);
        if (res !== undefined) {
          if (res?.first) {
            router.replace("/register/nickname");
          } else {
            router.replace("/");
          }
        }
      }, []);
    }, 10);
  });

  return (
    <>
      <Head>
        {addTitleTags(title)}
        {addDescriptionTag(description)}
        <meta name="robots" content="INDEX,FOLLOW" />
      </Head>
      <main className={user}>
        <section>
          <h2>카카오로그인 중입니다.</h2>
        </section>
      </main>
    </>
  );
}
