import { GetServerSideProps } from "next";
import React from "react";
import QuestionComponent from "routes/team/apply/question";
import { makeRequest } from "services/makeRequest";

const Question = (props: any): JSX.Element => {
  const { data } = props;
  return <QuestionComponent data={data} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const teamId = context.query.teamId as string;
  console.log(teamId);
  const data = await makeRequest({
    endpoint: `teams/${teamId}/questions`,
    method: "GET",
    auth: true,
    token: context.req.cookies.token,
  });
  return {
    props: { data: data },
  };
};

export default Question;
