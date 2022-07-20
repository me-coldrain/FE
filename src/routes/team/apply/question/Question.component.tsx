import React, { useEffect, useState } from "react";
// hooks
import { useRouter } from "next/router";
import { makeRequest } from "services/makeRequest";
//components
import SafeArea from "@components/safeArea";
import styles from "./Question.module.scss";

const { question, questionBox } = styles;

function Question(): JSX.Element {
  const router = useRouter();
  const { teamId } = router.query;
  console.log(teamId);

  const fetchQuestion = () => {
    makeRequest({
      endpoint: `teams/${teamId}/questions`,
      method: "GET",
      auth: true,
    }).then((res: any) => console.log(res));
  };

  useEffect(fetchQuestion, []);

  return (
    <>
      <SafeArea />
      <div className={question}>
        <h1>팀원이 되기 위해 답변을 작성해주세요.</h1>
        <p>Q. 사전 질문</p>
        <p>팀 리더에게만 공개됩니다.</p>
        <div className={questionBox}>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Question;

/**
 *
 * @ToDo can be static page
 */
