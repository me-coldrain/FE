import { GetServerSideProps } from "next";
import React from "react";
import Challenges from "routes/team/challenges";
import { makeRequest } from "services/makeRequest";

type IChallenge = {
  applyId: number;
  opposingTeamId: number;
  opposingTeamName: string;
  contact: string;
  phone: string;
  opposingTeamPoint: number;
  winRate: number;
  greeting: string;
  createdDate: string;
  modifiedDate: string;
};

export type IChallengeProps = {
  query: { teamId: string; teamName: string };
  data: IChallenge[];
};

const ChallengesPage = (props: IChallengeProps): JSX.Element => {
  const { data, query } = props;
  return <Challenges data={data} query={query} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const teamId = context.query.teamId as string;
  const teamName = context.query.teamName as string;
  const data = await makeRequest({
    endpoint: `teams/${teamId}/matches/offer`,
    method: "GET",
    auth: true,
    token: context.req.cookies.token,
  });
  return {
    props: { data: data, teamId: teamId, teamName },
  };
};

export default ChallengesPage;
