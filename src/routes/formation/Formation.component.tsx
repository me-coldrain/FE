import React, { useEffect, useState } from "react";
import Head from "next/head";
import Landing from "routes/formation/landing";
import UserProfile from "@components/userProfile";
import RouterButton from "@components/RouterButton";
import { usePageData, usePageDetails } from "hooks/page";
import { injectClassNames } from "utils/css";
import Link from "next/link";
import styles from "./Formation.module.scss";
import { useRouter } from "next/router";
import { makeRequest } from "services/makeRequest";
import { ButtonRound } from "@components/button";
import { useDispatch, useSelector } from "react-redux";
import { setFormation } from "stores/formation";
import { RootState } from "stores";

const { profiles, gettingMembers, active } = styles;

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

type Member = {
  memberId: number;
  nickname: string;
  profileImageUrl: string;
  position: string;
};

type Members = {
  captain: Member;
  defender: Member[] | [];
  midfielder: Member[] | [];
  striker: Member[] | [];
  goalkeeper: Member[] | [];
};

type MemberToPlay = {
  memberId: number | null;
  position: "striker" | "defender" | "midfielder" | "goalkeeper";
  anonymous: boolean;
  memberProfileUrl: string;
  nickName: string | undefined;
};

export default function Page(): JSX.Element {
  // hooks
  const router = useRouter();
  const dispatch = useDispatch();
  const formations = useSelector((state: RootState) => state.formations);
  const { teamId, matchId, teamName } = router.query;

  const { title = "", description = "" } = usePageDetails();
  const { content = "" } = usePageData();

  //state
  const [teamMembers, setTeamMembers] = useState<Members>();
  const [memberToPlay, setMemberToPlay] = useState<MemberToPlay[]>([]);
  const [error, setError] = useState<string>("");

  const members = async () => {
    await makeRequest({
      endpoint: `home/teams/${teamId}/players`,
      method: "GET",
      auth: true,
    }).then((res: any) => setTeamMembers(res));
  };

  const deleteAnonymous = (position: string, index: number) => {
    const _memberToPlayIndex = memberToPlay.findIndex(
      (member, _) => member.position === position && member.anonymous === true
    );

    setMemberToPlay((prev) => prev.filter((_, i) => i !== _memberToPlayIndex));
  };

  const setMember = (
    memberPosition: "striker" | "midfielder" | "defender" | "goalkeeper",
    memberId: number,
    nickName: string,
    memberProfileUrl: string
  ) => {
    const isInclude = memberToPlay.findIndex((e) => e.memberId === memberId);
    if (isInclude !== -1) {
      setMemberToPlay((prev) => prev.filter((e) => e.memberId !== memberId));
    } else {
      setMemberToPlay((prev) => [
        {
          memberId: memberId,
          position: memberPosition,
          anonymous: false,
          nickName: nickName,
          memberProfileUrl: memberProfileUrl,
        },
        ...prev,
      ]);
    }
  };

  useEffect(() => {
    members();
  }, [teamId]);

  return (
    <>
      <Head>
        {addTitleTags(title)}
        {addDescriptionTag(description)}
        <meta name="robots" content="INDEX,FOLLOW" />
      </Head>
      <main>
        <Landing />
        <section>
          <article>
            <h3>주장</h3>
            <hr />
            <div className={profiles}>
              {teamMembers && teamMembers.captain && (
                <div
                  onClick={() => {
                    setMember(
                      "striker",
                      teamMembers.captain.memberId,
                      teamMembers.captain.nickname,
                      teamMembers.captain.profileImageUrl
                    );
                  }}
                >
                  <UserProfile
                    selected={
                      memberToPlay.findIndex(
                        (e) => e.memberId === teamMembers.captain.memberId
                      ) !== -1
                        ? true
                        : false
                    }
                    nickname={teamMembers?.captain?.nickname}
                    src={teamMembers?.captain?.profileImageUrl}
                  />
                </div>
              )}
            </div>
          </article>
          <article>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>공격수</h3>
              <div className={gettingMembers}>
                <ButtonRound
                  handleClick={() => {
                    setMemberToPlay((prev) => [
                      {
                        memberId: null,
                        position: "striker",
                        anonymous: true,
                        nickName: "비회원",
                        memberProfileUrl: "",
                      },
                      ...prev,
                    ]);
                  }}
                  content="비회원"
                  length="round"
                />
              </div>
            </div>
            <hr />
            <div className={profiles}>
              {teamMembers?.striker?.map((member, index) => (
                <div
                  key={`striker-${index}`}
                  onClick={() => {
                    setMember(
                      "striker",
                      member.memberId,
                      member.nickname,
                      member.profileImageUrl
                    );
                  }}
                >
                  <UserProfile
                    selected={
                      memberToPlay.findIndex(
                        (e) => e.memberId === member.memberId
                      ) !== -1
                        ? true
                        : false
                    }
                    nickname={member?.nickname}
                    src={member?.profileImageUrl}
                  />
                </div>
              ))}
              {memberToPlay
                .filter(
                  (member, index) =>
                    member.anonymous === true &&
                    member.memberId === null &&
                    member.position === "striker"
                )
                .map((_, index) => (
                  <div
                    key={`anonymous-striker-${index}`}
                    onClick={() => deleteAnonymous("striker", index)}
                  >
                    <UserProfile nickname="비회원" selected={true} />
                  </div>
                ))}
            </div>
          </article>
          <article>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>미드필더</h3>
              <div className={gettingMembers}>
                <ButtonRound
                  handleClick={() => {
                    setMemberToPlay((prev) => [
                      {
                        memberId: null,
                        position: "midfielder",
                        anonymous: true,
                        nickName: "비회원",
                        memberProfileUrl: "",
                      },
                      ...prev,
                    ]);
                  }}
                  content="비회원"
                  length="round"
                />
              </div>
            </div>
            <hr />
            <div className={profiles}>
              {teamMembers?.midfielder?.map((member, index) => (
                <div
                  key={`midfielder-${index}`}
                  onClick={() => {
                    setMember(
                      "midfielder",
                      member.memberId,
                      member.nickname,
                      member.profileImageUrl
                    );
                  }}
                >
                  <UserProfile
                    selected={
                      memberToPlay.findIndex(
                        (e) => e.memberId === member.memberId
                      ) !== -1
                        ? true
                        : false
                    }
                    nickname={member?.nickname}
                    src={member?.profileImageUrl}
                  />
                </div>
              ))}
              {memberToPlay
                .filter(
                  (member) =>
                    member.anonymous === true &&
                    member.memberId === null &&
                    member.position === "midfielder"
                )
                .map((member, index) => (
                  <div
                    key={`anonymous-midfielder-${index}`}
                    onClick={() => deleteAnonymous("midfielder", index)}
                  >
                    <UserProfile nickname="비회원" selected={true} />
                  </div>
                ))}
            </div>
          </article>
          <article>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>수비수</h3>
              <div className={gettingMembers}>
                <ButtonRound
                  handleClick={() => {
                    setMemberToPlay((prev) => [
                      {
                        memberId: null,
                        position: "defender",
                        anonymous: true,
                        nickName: "비회원",
                        memberProfileUrl: "",
                      },
                      ...prev,
                    ]);
                  }}
                  content="비회원"
                  length="round"
                />
              </div>
            </div>
            <hr />
            <div className={profiles}>
              {teamMembers?.defender?.map((member, index) => (
                <div
                  key={`defender-${index}`}
                  onClick={() => {
                    setMember(
                      "defender",
                      member.memberId,
                      member.nickname,
                      member.profileImageUrl
                    );
                  }}
                >
                  <UserProfile
                    selected={
                      memberToPlay.findIndex(
                        (e) => e.memberId === member.memberId
                      ) !== -1
                        ? true
                        : false
                    }
                    nickname={member?.nickname}
                    src={member?.profileImageUrl}
                  />
                </div>
              ))}
              {memberToPlay
                .filter(
                  (member) =>
                    member.anonymous === true &&
                    member.memberId === null &&
                    member.position === "defender"
                )
                .map((member, index) => (
                  <div
                    key={`anonymous-defender-${index}`}
                    onClick={() => deleteAnonymous("defender", index)}
                  >
                    <UserProfile nickname="비회원" selected={true} />
                  </div>
                ))}
            </div>
          </article>
          <article>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>골키퍼</h3>
              <div className={gettingMembers}>
                <ButtonRound
                  handleClick={() => {
                    setMemberToPlay((prev) => [
                      {
                        memberId: null,
                        position: "goalkeeper",
                        anonymous: true,
                        nickName: "비회원",
                        memberProfileUrl: "",
                      },
                      ...prev,
                    ]);
                  }}
                  content="비회원"
                  length="round"
                />
              </div>
            </div>
            <hr />
            <div className={profiles}>
              {teamMembers?.goalkeeper?.map((member, index) => (
                <div
                  key={`goalkeeper-${index}`}
                  onClick={() => {
                    setMember(
                      "goalkeeper",
                      member.memberId,
                      member.nickname,
                      member.profileImageUrl
                    );
                  }}
                >
                  <UserProfile
                    selected={
                      memberToPlay.findIndex(
                        (e) => e.memberId === member.memberId
                      ) !== -1
                        ? true
                        : false
                    }
                    nickname={member?.nickname}
                    src={member?.profileImageUrl}
                  />
                </div>
              ))}
              {memberToPlay
                .filter(
                  (member, memberIndex) =>
                    member.anonymous === true &&
                    member.memberId === null &&
                    member.position === "goalkeeper"
                )
                .map((_, index) => (
                  <div
                    className={active}
                    key={`anonymous-goalkeeper-${index}`}
                    onClick={() => deleteAnonymous("goalkeeper", index)}
                  >
                    <UserProfile nickname="비회원" selected={true} />
                  </div>
                ))}
            </div>
          </article>
        </section>
        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}
        <RouterButton
          onClick={() => {
            dispatch(setFormation(memberToPlay));
            router.push({
              pathname: `/formation/detail`,
              query: {
                teamId: teamId,
                teamName: teamName,
                matchId: matchId,
              },
            });
          }}
          bigRound
        >
          완료
        </RouterButton>
      </main>
    </>
  );
}
