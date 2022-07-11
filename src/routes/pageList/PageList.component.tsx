import React, { useEffect } from "react";
import Head from "next/head";
import Pages from "components/pages";
import Placeholder from "components/placeholder";
import { executeGet } from "utils/request";
import { useRouter } from "next/router";
import styles from "./PageList.module.scss";

const { pageList, pageListContainer } = styles;

export default function PageList(): JSX.Element {
  return (
    <>
      <Head>
        <title>Soccer Teams</title>
      </Head>
      <main className={pageList}>
        <div>
          <h1>팀 이름</h1>
        </div>
        <p>
          <br />
          안녕하세요 강북구에서 활동하고 있는 000 팀입니다.
          <br />
          새로운 분들과 많은 경기하고 싶습니다.
        </p>
        <Pages className={pageListContainer}>
          <li>
            <Placeholder length="medium" />
          </li>
          <li>
            <Placeholder length="medium" />
          </li>
          <li>
            <Placeholder length="medium" />
          </li>
          <li>
            <Placeholder length="medium" />
          </li>
          <li>
            <Placeholder length="medium" />
          </li>
        </Pages>
      </main>
    </>
  );
}
