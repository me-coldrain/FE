import React, { useState } from "react";
// hooks
//components
import SafeArea from "@components/safeArea";
import styles from "./Question.module.scss";
import { TextArea } from "@components/Input";
import { RegisterFooter } from "@components/footer";
import { makeRequest } from "services/makeRequest";

const { question, questionBox, container } = styles;

type PageProps = {
  data?: any;
};

function Question(props: PageProps): JSX.Element {
  const { data } = props;
  const [value, setValue] = useState<string>("");

  const register = async () => {
    console.log("clicked");
  };

  return (
    <>
      <div className={question}>
        <SafeArea />
        <h1>팀원이 되기 위해 답변을 작성해주세요.</h1>
        <p>Q. 사전 질문</p>
        <p>팀 리더에게만 공개됩니다.</p>
        <div className={questionBox}>
          <p>{data?.question}</p>
        </div>
      </div>
      <div className={container}>
        <TextArea
          label="팀 신청"
          value={value}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            if (value.length <= 200) setValue(e.currentTarget.value);
          }}
          placeholder="10글자 이상 작성해주세요 (200)"
        />
      </div>
      <RegisterFooter
        content="신청하기"
        activeStyle={true}
        handleClick={register}
      />
    </>
  );
}

export default Question;

/**
 *
 * @ToDo make request
 */
