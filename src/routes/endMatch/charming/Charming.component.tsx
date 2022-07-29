import React, { useState, useEffect } from "react";
import Head from "next/head";
import { usePageData, usePageDetails } from "hooks/page";
import { useRouter } from "next/router";
import { makeRequest } from "services/makeRequest";
import { RegisterFooter } from "@components/footer";
import UserProfile from "@components/userProfile";
import styles from "./Charming.module.scss";

const {
  end,
  upperBox,
  upperBoxTitle,
  upperBoxSub,
  upperBoxSelect,
  xButton,
  lowerBox,
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

  console.log(router.query);

  const { title = "", description = "" } = usePageDetails();
  const { content = "" } = usePageData();

  //state
  const [selectedMember, setSelectedMember] = useState<string[]>([""]);

  const handleMembers = (e) => {
    setSelectedMember(e.target.value);
  };

  const handleSubs = () => {
    router.push({
      pathname: "",
      query: { substitutes: selectedMember },
    });
  };

  useEffect(() => {
    makeRequest({
      // 필드멤버를 제외한 소속팀 멤버 받아오는 api
      // endpoint: `matches/${matchId}/score`,
      method: "GET",
      auth: true,
    }).then((res: any) => {
      console.log(res);
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
            <p>분위기 메이커를 선정해주세요 .</p>
          </div>
          <div className={upperBoxSub}>
            <p>팀원들과 상의 후 선택해주세요.(1명)</p>
          </div>
          <div className={upperBoxSelect}>
            {/* {selectedMember?.map((x,i) => {
              <UserProfile nickname={x?.nickname} src="">
                <div className={xButton}
                  onClick={() => {setSelectedMember(selectedMember.filter((x) => x !== text))}}
                >x</div>
              </UserProfile>
            })} */}
          </div>
        </div>
        <div className={lowerBox}>
          {/* <UserProfile nickname="닉네임" src="" selected={selectedMember.find((x) => x === "mon") ? true : false} onClick={() => handleMembers(x)}></UserProfile> */}
        </div>
        <div className={buttonBox}>
          <RegisterFooter
            content="다음"
            handleClick={() => {
              handleSubs();
            }}
            activeStyle
          ></RegisterFooter>
        </div>
      </div>
    </>
  );
}
