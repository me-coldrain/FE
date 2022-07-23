import React from "react";
import { GetServerSideProps } from "next";
import Accept from "routes/team/accept";
import { makeRequest } from "services/makeRequest";

const AcceptMembers = (props: any): JSX.Element => {
  const { data } = props;
  return <Accept data={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const teamId = context.query.teamId as string;
  const data = await makeRequest({
    endpoint: `teams/${teamId}/offer`,
    method: "GET",
    auth: true,
    token: context.req.cookies.token,
  });
  return {
    props: { data: data },
  };
};

export default AcceptMembers;
