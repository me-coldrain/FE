import { makeRequest } from "services/makeRequest";
import { GetServerSideProps } from "next";
import React from "react";
import Schedule from "routes/team/schedule";

export type IMatches = {
  matchId: number;
  teamId: number;
  isCaptain: boolean;
  opposingTeamId: number;
  opposingTeamName: string;
  opposingTeamMemberCount: number;
  opposingTeamPoint: number;
  opposingTeamWinRate: number;
  opposingTeamTotalGameCount: number;
  opposingTeamWinCount: number;
  opposingTeamDrawCount: number;
  opposingTeamLoseCount: number;
  contact: string;
  phone: string;
  matchDate: Date;
  matchLocation: string;
  createdDate: Date;
  modifiedDate: Date;
  matchStatus: boolean;
  dday: number;
};

export type ISchedules = {
  data: IMatches[];
  teamId: string;
  teamName: string;
};

const Schedules = (props: ISchedules): JSX.Element => {
  const { data, teamId, teamName } = props;
  return <Schedule data={data} teamId={teamId} teamName={teamName} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const teamId = context.query.teamId as string;
  const teamName = context.query.teamName as string;
  const data = await makeRequest({
    endpoint: `teams/${teamId}/matches`,
    method: "GET",
    auth: true,
    token: context.req.cookies.token,
  });
  return {
    props: { data: data, teamId: teamId, teamName: teamName },
  };
};

export default Schedules;
