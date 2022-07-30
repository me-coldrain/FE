import React, { useState, useEffect } from "react";
import Head from "next/head";
import { usePageData, usePageDetails } from "hooks/page";
import { useRouter } from "next/router";
import { makeRequest } from "services/makeRequest";
import { RegisterFooter } from "@components/footer";
import UserProfile from "@components/userProfile";

//dummy data
import { dummy } from "dummyData";

import styles from "./Substitute.module.scss";

// interface teamMembers {
//   memberId: 1,
// memberProfileUrl: "url…",
// nickName: "nickName1"
// }

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

  const { title = "", description = "" } = usePageDetails();
  const { content = "" } = usePageData();

  //state
  const [teamMembers, setTeamMembers] = useState<any>();
  const [selectedMember, setSelectedMember] = useState<string[]>([""]);

  const handleMembers = (text: string) => {
    if (selectedMember.find((x) => x === text) !== undefined) {
      setSelectedMember(selectedMember.filter((x) => x !== text));
    } else {
      setSelectedMember([...selectedMember, text]);
    }
  };

  const handleSubs = () => {
    router.push({
      pathname: "/endmatch/mvp",
      query: { substitutes: selectedMember },
    });
  };

  useEffect(() => {
    // setTeamMembers(dummy.members);
    // setSelectedMember
    // makeRequest({
    // 필드멤버를 제외한 소속팀 멤버 받아오는 api
    //   endpoint: `matches/${matchId}/score`,
    //   method: "GET",
    //   auth: true,
    // }).then((res: any) => {
    //   console.log(res);
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
    // });
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
            <p>교체자 명단을 선택해주세요.</p>
          </div>
          <div className={upperBoxSub}>
            <p>개인점수가 부여됩니다.</p>
          </div>
          <div className={upperBoxSelect}>
            {selectedMember?.map((x, i) => {
              <UserProfile nickname="닉네임" src="">
                <div
                  className={xButton}
                  onClick={() => {
                    setSelectedMember(
                      selectedMember.filter((x) => x !== "nickname1")
                    );
                  }}
                >
                  x
                </div>
              </UserProfile>;
            })}
            {/* <UserProfile nickname="닉네임" src="">
              <div
                className={xButton}
                onClick={() => {
                  setSelectedMember(
                    selectedMember.filter((x) => x !== "닉네임")
                  );
                }}
              >
                x
              </div>
            </UserProfile> */}
          </div>
        </div>
        <div className={lowerBox}>
          {/* {teamMembers.map((x: any, i: any) => {
            <UserProfile
              nickname={x.nickName}
              src={x.memberProfileUrl}
              // selected={selectedMember.find((i) => i.nickName === x.nickName) ? true : false}
              onClick={() => handleMembers(x)}
            ></UserProfile>;
          })} */}
          {/* <UserProfile
            nickname="닉네임"
            src=""
            selected={selectedMember.find((x) => x === "닉네임") ? true : false}
            onClick={() => handleMembers("닉네임")}
          ></UserProfile>
          <UserProfile
            nickname="닉네임"
            src=""
            selected={selectedMember.find((x) => x === "닉네임") ? true : false}
            onClick={() => handleMembers("닉네임")}
          ></UserProfile>
          <UserProfile
            nickname="닉네임"
            src=""
            selected={selectedMember.find((x) => x === "닉네임") ? true : false}
            onClick={() => handleMembers("닉네임")}
          ></UserProfile>
          <UserProfile
            nickname="닉네임"
            src=""
            selected={selectedMember.find((x) => x === "닉네임") ? true : false}
            onClick={() => handleMembers("닉네임")}
          ></UserProfile>
          <UserProfile
            nickname="닉네임"
            src=""
            selected={selectedMember.find((x) => x === "닉네임") ? true : false}
            onClick={() => handleMembers("닉네임")}
          ></UserProfile> */}
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
