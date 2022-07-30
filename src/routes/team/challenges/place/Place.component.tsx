import React, { useState } from "react";
import { useRouter } from "next/router";
import { TextArea } from "@components/Input";
import { RegisterFooter } from "@components/footer";
import { makeRequest } from "services/makeRequest";
import { CenterModal } from "@components/modal";
// component

export default function Location(): JSX.Element {
  const router = useRouter();
  const { applyTeamId, applyId, date } = router.query;

  const [location, setLocation] = useState<string>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const makeMatch = async () => {
    const params = {
      matchDate: Date.parse(date as string),
      meridiem: "오후",
      matchLocation: location,
    };
    await makeRequest({
      endpoint: `teams/${applyTeamId}/apply/${applyId}`,
      method: "POST",
      params,
      auth: true,
    }).then(() => setModalOpen(true));
  };

  return (
    <main>
      <CenterModal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        title={"대결이 성사되었습니다."}
        buttonContent={"닫기"}
      >
        <h5>예정된 경기일정에서 확인하실 수 있습니다.</h5>
      </CenterModal>
      <h1>어디서 대결하시나요?</h1>
      <h5>서로의 약속을 위해 미리 지정해주세요</h5>
      <TextArea
        placeholder="대결하실 장소를 알려주세요"
        label="장소"
        value={location}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setLocation(e.currentTarget.value);
        }}
      />
      <RegisterFooter
        content="다음"
        activeStyle={true}
        handleClick={() => makeMatch()}
        handleVerified={() => setModalOpen(false)}
        style={{ marginTop: "auto" }}
      />
    </main>
  );
}
