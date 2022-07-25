import { GetServerSideProps } from "next";
import React from "react";
import History from "routes/team/matches/history";
import { makeRequest } from "services/makeRequest";

type IPositionPlayer = {
  memberId: number | null;
  nickName: string;
  positionPoint: string | null;
  memberProfileUrl: string | null;
};

type ITeam = {
  mvp: string;
  teamName: string;
  record: string;
  score: number;
  scorer: string[];
  fieldMembers: {
    striker: IPositionPlayer[];
    midfielder: IPositionPlayer[];
    defender: IPositionPlayer[];
    goalkeeper: IPositionPlayer[];
  };
  substituteMembers: {
    striker: IPositionPlayer[];
    midfielder: IPositionPlayer[];
    defender: IPositionPlayer[];
    goalkeeper: IPositionPlayer[];
  };
};

type IDetail = {
  historyId: string;
  matchDate: string;
  team: ITeam;
  opposingTeam: ITeam;
};

export type ITeamDetailProps = {
  query: { teamId: string; historyId: string };
  data: IDetail;
};

const HistoryDetail = ({ query, data }: ITeamDetailProps): JSX.Element => {
  return <History query={query} data={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const teamId = context.query.teamId as string;
  const historyId = context.query.historyId as string;

  const data = await makeRequest({
    endpoint: `home/teams/${teamId}/history/${historyId}`,
    method: "GET",
    auth: true,
    token: context.req.cookies.token,
  });
  return {
    props: { query: context.query, data: data },
  };
};

export default HistoryDetail;
