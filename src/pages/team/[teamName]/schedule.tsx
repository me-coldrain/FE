import { GetServerSideProps } from "next";
import React from "react";
import Schedule from "routes/team/schedule";
import { makeRequest } from "services/makeRequest";

const Schedules = ({ data }: any): JSX.Element => {
  return <Schedule />;
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const teamId = context.query.teamId as string;
//   const data = await makeRequest({
//     endpoint: `home/teams/${teamId}`,
//     method: "GET",
//     auth: true,
//     token: context.req.cookies.token,
//   });
//   return {
//     props: { data: data },
//   };
// };
export default Schedules;
