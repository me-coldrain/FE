import Button from "@components/button";
import Image from "@components/image";
import Modal, { CenterModal } from "@components/modal";
import SafeArea from "@components/safeArea";
import { IChallengeProps } from "@pages/team/[teamName]/challenges";
import Link from "next/link";
import router from "next/router";
import React, { useState } from "react";
import { makeRequest } from "services/makeRequest";

import styles from "./Challenges.module.scss";

const {
  question,
  questionBox,
  proposal,
  proposalMember,
  proposalImage,
  proposalContent,
  proposalAnswer,
} = styles;

export default function Challenges(props: IChallengeProps): JSX.Element {
  // props
  const { data } = props;

  // state
  const [acceptModal, setAcceptModal] = useState<boolean>();
  const [decline, setDecline] = useState<boolean>();
  const [checked, setChecked] = useState<boolean>(false);
  const [applyTeamId, setApplyTeamId] = useState<number>(0);
  const [applyId, setApplyId] = useState<number>(0);

  const handleButtonClick = () => {
    router.push({
      pathname: `/team/challenges/date`,
      query: { applyTeamId, applyId },
    });
  };

  const handleDecline = async () => {
    await makeRequest({
      endpoint: `teams/${applyTeamId}/apply/${applyId}`,
      method: "DELETE",
      auth: true,
    }).then(() => setDecline(false));
  };

  return (
    <>
      <CenterModal
        show={!!acceptModal}
        onClose={() => setAcceptModal(false)}
        title={"경기를 수락하시겠습니까?"}
        handleVerified={() => handleButtonClick()}
      >
        <p style={{ textAlign: "center", width: "100%" }}>
          경기 수락전 미리 상대방팀과 날짜와 장소를 정해주세요.
        </p>
      </CenterModal>
      <CenterModal
        show={!!decline}
        onClose={() => setDecline(false)}
        title={"경기를 거절하시겠습니까?"}
        verify={true}
        checked={checked}
        setChecked={setChecked}
        handleVerified={handleDecline}
        verifyContent="거절한 경기는 되돌릴 수 없습니다."
        buttonContent="거절하기"
      >
        <></>
      </CenterModal>
      <SafeArea />
      <div className={proposal}>
        {/**@map from server */}
        {data.map((challenge, index) => (
          <div key={`challenge-${index}`} className={proposalMember}>
            <div className={proposalContent}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p>{challenge?.opposingTeamName}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  handleClick={() => {
                    setDecline(true);
                  }}
                  content="거부"
                  length="short"
                  style={{ margin: "0 1rem" }}
                />
                <Button
                  handleClick={() => {
                    setApplyTeamId(challenge.opposingTeamId);
                    setApplyId(challenge.applyId);
                    setAcceptModal(true);
                  }}
                  content="수락"
                  length="short"
                  color={true}
                />
              </div>
            </div>
            <div className={proposalAnswer}>
              <div style={{ display: "flex" }}>
                <p style={{ marginRight: "1rem" }}>
                  승점 {challenge.opposingTeamPoint}
                </p>
                <p>승률 {challenge.winRate}%</p>
              </div>
              <h3>{challenge.phone}</h3>
              {challenge.greeting}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
