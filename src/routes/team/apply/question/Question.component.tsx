import React, { useState } from "react";
// hooks
import { makeRequest } from "services/makeRequest";
import { useRouter } from "next/router";
//components
import SafeArea from "@components/safeArea";
import { TextArea } from "@components/Input";
import { RegisterFooter } from "@components/footer";
import styles from "./Question.module.scss";
import Modal, { CenterModal } from "@components/modal";

const { question, questionBox, container } = styles;

type PageProps = {
  data?: any;
};

function Question(props: PageProps): JSX.Element {
  const router = useRouter();
  const { teamId, teamName } = router.query;
  const { data } = props;

  const [value, setValue] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  const register = async () => {
    makeRequest({
      endpoint: `home/teams/${teamId}/participate`,
      method: "POST",
      params: { answer: value },
      auth: true,
    }).then(() => setModal(true));
  };

  const onModalClose = () => {
    router.push(`/`);
  };

  return (
    <>
      <CenterModal
        show={modal}
        onClose={onModalClose}
        title={"신청이 완료되었습니다."}
      >
        <p>신청한 팀은 마이페이지에서 확인하실 수 있습니다. </p>
      </CenterModal>
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
