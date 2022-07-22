import React from "react";
import { GetServerSideProps } from "next";
import Matches from "routes/team/matches";
import { makeRequest } from "services/makeRequest";

const MatchHistory = (props: any): JSX.Element => {
  const { data } = props;
  return <Matches data={data} />;
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
    props: { data: data },
  };
};

export default MatchHistory;
