import React from "react";
import { GetServerSideProps } from "next";
import Members from "routes/team/members";
import { makeRequest } from "services/makeRequest";

const MembersList = ({ data }: any): JSX.Element => {
  return <Members data={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const teamId = context.query.teamId as string;
  console.log(teamId);
  const data = await makeRequest({
    endpoint: `home/teams/${teamId}/players`,
    method: "GET",
    auth: true,
    token: context.req.cookies.token,
  });
  return {
    props: { data: data },
  };
};

export default MembersList;
