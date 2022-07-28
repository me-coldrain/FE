import { GetServerSideProps } from "next";
import React from "react";
import Date from "routes/team/challenges/date";

type IProps = {
  query: { applyTeamId: number; applyId: number };
};

const ChooseDate = (props: IProps): JSX.Element => {
  const { query } = props;
  return <Date query={query} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { query: context.query },
  };
};

export default ChooseDate;
