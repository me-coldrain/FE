// hook
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { makeRequest } from "services/makeRequest";
// component
import Button from "@components/button/Button.component";
import { TextArea } from "@components/Input";
// config
import { browserStorage } from "utils/browser";

import styles from "./Recruit.module.scss";

const { container, getQuestion, questionInput, buttonBottom } = styles;

export default function MakeTeam(): JSX.Element {
  const router = useRouter();
  const { teamId } = router.query;

  // state
  const [error, setError] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [questionLength, setQuestionLength] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const FormEventHandler = useCallback(() => {
    if (question.length < 10) {
      setError("10글자 이상 작성해주세요");
    }
    if (question.length >= 200) {
      setError("200글자를 초과할 수 없습니다.");
    }
    setQuestionLength(question.length);
  }, [question]);

  const handleClick = () => {
    if (question.length < 10) {
      setError("10글자 이상 작성해주세요");
    }
    if (question.length > 200) {
      setError("200글자를 초과할 수 없습니다.");
    }
    if (questionLength >= 10 && questionLength <= 200) {
      // console.log(process.env.TEMP_TOKEN);
      const params = {
        question: question,
      };
      makeRequest({
        endpoint: `home/teams/${teamId}/recruit/start`,
        method: "POST",
        params,
        auth: true,
        notJson: true,
      });
      // makeRequest({
      //   endpoint: "home/teams/8/recruit/end",
      //   method: "POST",
      //   auth: true,
      // });
    }
  };

  useEffect(FormEventHandler, [question]);

  return (
    <main>
      <section>
        {/* <SafeArea /> */}
        <div className={container}>
          <div className={getQuestion}>
            <h1>함께할 팀원에게 질문을 작성해주세요</h1>
            <p>좋은 팀원을 만나기 위해 질문을 작성해주세요</p>
          </div>
          <div className={questionInput}>
            <div style={{ float: "right" }}>{questionLength} / 200</div>
            <TextArea
              value={question}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                if (question.length <= 200) setQuestion(e.currentTarget.value);
              }}
              error={error !== "" ? true : false}
              label="질문"
              placeholder="이곳에 작성하는 내용은 신청자에게 보여집니다."
            />
          </div>
          <div className={buttonBottom}>
            <Button
              handleClick={handleClick}
              content="모집글 완료"
              color={true}
              length="long"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
