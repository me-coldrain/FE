import React, { useEffect, useState } from "react";
import Head from "next/head";
import { usePageData, usePageDetails } from "hooks/page";
import { useRouter } from "next/router";
import { makeRequest } from "services/makeRequest";
import { RegisterFooter } from "@components/footer";
import styles from "./Check.module.scss";

type IInfo = {
  matchId: number;
  teamId: number;
  opponentTeamId: number;
  teamScore: number;
  opponentTeamScore: number;
};

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

  const [info, setInfo] = useState<IInfo>();

  const handleAdmit = () => {
    makeRequest({
      endpoint: `matches/${matchId}/score/admit`,
      method: "PATCH",
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

  useEffect(() => {
    makeRequest({
      endpoint: `matches/${matchId}/score`,
      method: "GET",
      auth: true,
    }).then((res: any) => {
      // console.log(res);
      // setInfo(res)
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
  }, []);

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
            <p>경기 점수를 확인 해주세요</p>
          </div>
          <div className={upperBoxSub}>
            <p>인정 시 경기결과에 반영되며 수정할 수 없습니다.</p>
          </div>
        </div>
        <div className={lowerBox}>
          <div className={lowerBoxContent}>
            <div>
              <p>A팀이름</p>
            </div>
            <div>
              <p>4</p>
            </div>
          </div>
          <div className={versus}>
            <p>-</p>
          </div>
          <div className={lowerBoxContent}>
            <div>
              <p>B팀이름</p>
            </div>
            <div>
              <p>3</p>
            </div>
          </div>
        </div>
        <div className={buttonBox}>
          <RegisterFooter
            content="정정요청"
            handleClick={() => {
              router.push("/endmatch/score");
            }}
            activeStyle={false}
          ></RegisterFooter>
          <RegisterFooter
            content="인정"
            handleClick={() => {
              handleAdmit();
            }}
            activeStyle
          ></RegisterFooter>
        </div>
      </div>
    </>
  );
}
