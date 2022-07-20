import React from "react";
import { GetServerSideProps } from "next";
import { makeRequest } from "services/makeRequest";
import Team from "routes/team";

const TeamDetail = (props: any): JSX.Element => {
  const { data } = props;
  return <Team data={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const teamId = context.query.teamId as string;
  const data = await makeRequest({
    endpoint: `home/teams/${teamId}`,
    method: "GET",
    auth: true,
    token: context.req.cookies.token,
  });
  return {
    props: { data: data },
  };
};

export default TeamDetail;
