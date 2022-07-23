import { GetServerSideProps } from "next";
import React from "react";
import Page from "routes/myPage";
import router from "next/router";
import { getCookie } from "cookies-next";
import jwtDecode from "jwt-decode";

const Mypage = (props: any): JSX.Element => {
  console.log("props =", props);

  return <Page data={props} />;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const data = getCookie("token", { req, res });
  const decodedData = jwtDecode(data as string, { header: false });
  console.log(decodedData);

  return {
    props: {
      data: data,
      decodedData: decodedData,
    },
  };
};

export default Mypage;
