import { GetServerSideProps } from "next";
import React from "react";
import Page from "routes/myPage";
import { getCookie } from "cookies-next";
import jwtDecode from "jwt-decode";

const Mypage = (props: any): JSX.Element => {
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

export default Mypage;
