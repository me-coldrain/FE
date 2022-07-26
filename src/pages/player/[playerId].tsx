import React from "react";
import { GetServerSideProps } from "next";
import { makeRequest } from "services/makeRequest";
import Page from "routes/player";

const Player = (props: any): JSX.Element => {
  console.log("props =", props);

  return <Page data={props} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const memberId = context.query.playerId as string;
  const data = await makeRequest({
    endpoint: `home/members/${memberId}`,
    method: "GET",
    auth: true,
    token: context.req.cookies.token,
  });
  return {
    props: data,
  };
};

export default Player;
