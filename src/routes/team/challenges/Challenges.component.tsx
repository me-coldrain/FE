import Button from "@components/button";
import Image from "@components/image";
import Modal, { CenterModal } from "@components/modal";
import SafeArea from "@components/safeArea";
import router from "next/router";
import React, { useState } from "react";

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

export default function Challenges(): JSX.Element {
  const [acceptModal, setAcceptModal] = useState<boolean>();
  const [decline, setDecline] = useState<boolean>();

  const handleButtonClick = () => {
    console.log("send accept api");
    setAcceptModal(false);
  };
  return (
    <>
      <CenterModal
        show={!!acceptModal}
        onClose={() => setAcceptModal(false)}
        title={"경기를 수락하시겠습니까?"}
      >
        <>
          <p style={{ textAlign: "center", width: "100%" }}>
            경기 수락전 미리 상대방팀과 날짜와 장소를 정해주세요.
          </p>
          <Button
            content="수락하기"
            handleClick={handleButtonClick}
            length={"long"}
            color={true}
          />
        </>
      </CenterModal>
      <CenterModal
        show={!!decline}
        onClose={() => setDecline(false)}
        title={"경기를 거절하시겠습니까?"}
      >
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              backgroundColor: "#e5ebff",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <p style={{ textAlign: "center", width: "100%", color: "#3e3ee" }}>
              주의
            </p>
            <p style={{ textAlign: "center", width: "100%", color: "#7e7e7e" }}>
              팀원 거절시 되돌릴 수 없습니다.
            </p>
          </div>
          <Button
            content="거절하기"
            handleClick={handleButtonClick}
            length={"long"}
            color={true}
          />
        </>
      </CenterModal>
      <SafeArea />
      <div className={proposal}>
        {/**@map from server */}
        <div className={proposalMember}>
          <div className={proposalContent}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>팀 이름</p>
            </div>
            <div>
              <Button
                handleClick={() => {
                  setDecline(true);
                }}
                content="거부"
                length="short"
              />
              <Button
                handleClick={() => {
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
              <p>승점 900점</p>
              <p>승률 20%</p>
            </div>
            aslkdfjalskdjflaksjdflakjsd;lfakjdf;la
            kjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfka
          </div>
        </div>
      </div>
    </>
  );
}
