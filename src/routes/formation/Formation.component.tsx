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

const { profiles } = styles;

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
};

type Members = {
  captain: Member;
  defender: Member[];
  midfielder: Member[];
  striker: Member[];
  goalkeeper: Member[];
};

export default function Page(): JSX.Element {
  const router = useRouter();
  const { teamId, matchId } = router.query;

  const { title = "", description = "" } = usePageDetails();
  const { content = "" } = usePageData();

  //state
  const [teamMembers, setTeamMembers] = useState<Members>();
  const [memberToPlay, setMemberToPlay] = useState<Members>();

  const members = async () => {
    await makeRequest({
      endpoint: `home/teams/${teamId}/players`,
      method: "GET",
      auth: true,
    }).then((res: any) => setTeamMembers(res));
  };

  useEffect(() => {
    members();
  }, []);

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
              <div>
                <UserProfile
                  nickname={teamMembers?.captain.nickname}
                  src={teamMembers?.captain.profileImageUrl}
                />
              </div>
            </div>
          </article>
          <article>
            <h3>공격수</h3>
            <hr />
            <div className={profiles}>
              {teamMembers?.striker.map((member, index) => (
                <UserProfile
                  key={`striker-${index}`}
                  nickname={member.nickname}
                  src={member.profileImageUrl}
                />
              ))}
            </div>
          </article>
          <article>
            <h3>미드필더</h3>
            <hr />
            <div>
              {teamMembers?.midfielder.map((member, index) => (
                <UserProfile
                  key={`midfielder-${index}`}
                  nickname={member.nickname}
                  src={member.profileImageUrl}
                />
              ))}
            </div>
          </article>
          <article>
            <h3>수비수</h3>
            <hr />
            <div>
              {teamMembers?.defender.map((member, index) => (
                <UserProfile
                  key={`defender-${index}`}
                  nickname={member.nickname}
                  src={member.profileImageUrl}
                />
              ))}
            </div>
          </article>
          <article>
            <h3>골키퍼</h3>
            <hr />
            <div>
              {teamMembers?.goalkeeper.map((member, index) => (
                <UserProfile
                  key={`goalkeeper-${index}`}
                  nickname={member.nickname}
                  src={member.profileImageUrl}
                />
              ))}
            </div>
          </article>
        </section>
        <RouterButton bigRound>완료</RouterButton>
      </main>
    </>
  );
}
