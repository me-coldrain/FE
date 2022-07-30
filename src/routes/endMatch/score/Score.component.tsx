import React, { useState } from "react";
import Head from "next/head";
import { usePageData, usePageDetails } from "hooks/page";
import { useRouter } from "next/router";
import { makeRequest } from "services/makeRequest";
import Input from "@components/Input";
import { RegisterFooter } from "@components/footer";
import styles from "./score.module.scss";

const {
  end,
  upperBox,
  upperBoxTitle,
  upperBoxSub,
  lowerBox,
  lowerBoxContent,
  versus,
  buttonBox,
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

export default function score(): JSX.Element {
  // hooks
  const router = useRouter();
  const { teamId, matchId, teamName } = router.query;

  const { title = "", description = "" } = usePageDetails();
  const { content = "" } = usePageData();

  //state
  const [myScore, setMyScore] = useState();
  const [oppositeScore, setOppositeScore] = useState();

  const handleScore = () => {
    const params = { teamScore: myScore, opponentScore: oppositeScore };
    makeRequest({
      endpoint: `matches/${matchId}/score`,
      method: "POST",
      params,
      auth: true,
    }).then((res: any) => {
      // console.log(res);
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
            <p>경기 점수를 입력해주세요</p>
          </div>
          <div className={upperBoxSub}>
            <p>상대 대결팀 승인시 점수가 인정됩니다.</p>
          </div>
        </div>
        <div className={lowerBox}>
          <div className={lowerBoxContent}>
            <Input
              placeholder="득점수를 적어주세요."
              type="text"
              signup
              label="900팀 (마이팀)"
              id="myTeam"
              onChange={(e: any) => {
                setMyScore(e.target.value);
              }}
              value={myScore || ""}
            ></Input>
          </div>
          <div className={versus}>
            <p>VS</p>
          </div>
          <div className={lowerBoxContent}>
            <Input
              placeholder="득점수를 적어주세요."
              type="text"
              signup
              label="900팀 (상대팀)"
              id="myTeam"
              onChange={(e: any) => {
                setOppositeScore(e.target.value);
              }}
              value={oppositeScore || ""}
            ></Input>
          </div>
        </div>
        <div className={buttonBox}>
          <RegisterFooter
            content="확인"
            handleClick={() => {
              handleScore();
            }}
            activeStyle
          ></RegisterFooter>
          <RegisterFooter
            content="다음"
            handleClick={() => {
              router.push("/endmatch/substitute");
            }}
            activeStyle
          ></RegisterFooter>
        </div>
      </div>
    </>
  );
}
