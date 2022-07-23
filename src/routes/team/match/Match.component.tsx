import { RegisterFooter } from "@components/footer";
import { TextArea } from "@components/Input";
import { CenterModal } from "@components/modal";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { makeRequest } from "services/makeRequest";

import styles from "./Match.module.scss";

const { container } = styles;

export default function (): JSX.Element {
  const router = useRouter();
  const { teamId } = router.query;
  // state
  const [value, setValue] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleMatchRegister = async () => {
    await makeRequest({
      endpoint: `home/teams/${teamId}/match/apply`,
      method: "POST",
      params: { greeting: value },
      auth: true,
    }).then(() => setModalOpen(true));
  };

  const onCloseModal = () => {
    router.push("/");
  };

  return (
    <>
      <CenterModal
        show={modalOpen}
        onClose={onCloseModal}
        title={<h1>대결신청이 완료되었습니다.</h1>}
      >
        <h5>당신의 승리를 기원합니다.</h5>
      </CenterModal>
      <main className={container}>
        <h1>대결을 신청하는 팀의 리더에게 메세지를 보내주세요.</h1>
        <h5>작성한 답변은 팀리더에게만 공개됩니다.</h5>
        <TextArea
          label="도전장"
          placeholder="연결방법 및 대결을 위한 메세지를 적어주세요.(200)"
          multiLine={10}
          value={value}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            if (value.length <= 200) setValue(e.currentTarget.value);
          }}
        />
        <RegisterFooter
          content={"대결 신청"}
          handleClick={handleMatchRegister}
          activeStyle={true}
        />
      </main>
    </>
  );
}
