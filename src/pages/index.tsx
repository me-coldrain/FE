import { GetServerSideProps } from "next";
import React from "react";
import Page from "routes/page";
import { makeRequest } from "services/makeRequest";

const Home = (props: any): JSX.Element => {
  const { data } = props;
  console.log("props =", props);
  return <Page data={data} isLanding />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.req.cookies);
  const data = await makeRequest({
    endpoint: `home/teams`,
    method: "GET",
    auth: true,
    token: context.req.cookies.token,
  });

  return {
    props: {
      data: data,
    },
  };
};

export default Home;
