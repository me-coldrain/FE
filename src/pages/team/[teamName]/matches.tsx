import React from "react";
import { GetServerSideProps } from "next";
import Matches from "routes/team/matches";
import { makeRequest } from "services/makeRequest";

type IGame = {
  historyId: number;
  matchDate: string;
  team: {
    name: string;
    record: string;
    score: number;
  };
  opposingTeam: {
    name: string;
    record: string;
    score: number;
  };
};

export type IPropsHistories = {
  query: { teamId: string; teamName: string };
  data: IGame[];
};

const MatchHistory = (props: IPropsHistories): JSX.Element => {
  const { query, data } = props;
  return <Matches query={query} data={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const teamId = context.query.teamId as string;
  const data = await makeRequest({
    endpoint: `home/teams/${teamId}/history`,
    method: "GET",
    auth: true,
    token: context.req.cookies.token,
  });
  return {
    props: { query: context.query, data: data },
  };
};

export default MatchHistory;
