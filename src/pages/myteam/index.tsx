import { GetServerSideProps } from "next";
import React from "react";
import Page from "routes/myteam";
import { getCookie } from "cookies-next";
import jwtDecode from "jwt-decode";

const Myteam = (props: any): JSX.Element => {
  return <Page data={props} />;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const data = getCookie("token", { req, res });
  const decodedData = jwtDecode(data as string, { header: false });

  return {
    props: {
      data: data,
      decodedData: decodedData,
    },
  };
};

export default Myteam;
