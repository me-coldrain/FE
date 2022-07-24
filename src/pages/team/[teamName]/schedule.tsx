import { GetServerSideProps } from "next";
import React from "react";
import Schedule from "routes/team/schedule";
import { makeRequest } from "services/makeRequest";

const Schedules = ({ data }: any): JSX.Element => {
  return <Schedule />;
};

export default Schedules;
