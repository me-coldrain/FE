import React from "react";
import Head from "next/head";
import Link from "next/link";
import { usePageData, usePageDetails } from "hooks/page";
import { useRouter } from "next/router";
import { makeRequest } from "services/makeRequest";
import styles from "./EndMatch.module.scss";

const {
  end,
  upperBox,
  upperBoxTitle,
  upperBoxSub,
  lowerBox,
  lowerBoxCompleteButton,
  lowerBoxCancelButton,
} = styles;

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
  // hooks
  const router = useRouter();
  const { teamId, matchId, teamName } = router.query;

  console.log(router.query);

  const { title = "", description = "" } = usePageDetails();
  const { content = "" } = usePageData();

  //state

  const handleMatch = () => {
    makeRequest({
      endpoint: `matches/${matchId}`,
      method: "POST",
      auth: true,
    }).then((res: any) => {
      console.log(res);
      // if (res !== undefined) {
      //   if (res?.first) {
      //     router.replace("/");
      //   } else {
      //     router.replace("/");
      //   }
      // } else {
      //   window.alert("팀 정보 입력에 실패하였습니다.");
      // }
    });
  };
  const handleCancel = () => {
    makeRequest({
      endpoint: `matches/${matchId}`,
      method: "DELETE",
      auth: true,
    }).then((res: any) => {
      console.log(res);
    });
  };

  return (
    <>
      <Head>
        {addTitleTags(title)}
        {addDescriptionTag(description)}
        <meta name="robots" content="INDEX,FOLLOW" />
      </Head>
      <div className={end}>
        <div className={upperBox}>
          <div className={upperBoxTitle}>
            <p>경기 종료 되셨나요?</p>
          </div>
          <div className={upperBoxSub}>
            <p>경기가 취소된 경우 다시 일정을 잡아주세요.</p>
          </div>
        </div>
        <div className={lowerBox}>
          <Link
            href={{
              pathname: "/endmatch/score",
              query: {
                teamId: teamId,
                matchId: matchId,
              },
            }}
            as="/endmatch/score"
          >
            <div
              className={lowerBoxCompleteButton}
              onClick={() => {
                handleMatch();
              }}
            >
              <p>경기 점수 입력</p>
            </div>
          </Link>
          <div
            className={lowerBoxCancelButton}
            onClick={() => {
              handleCancel();
            }}
          >
            <p>경기 취소</p>
            <p>경기를 진행하지 못함</p>
          </div>
        </div>
      </div>
    </>
  );
}
