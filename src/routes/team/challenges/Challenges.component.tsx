import Button from "@components/button";
import Image from "@components/image";
import SafeArea from "@components/safeArea";
import React from "react";

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
  return (
    <>
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
                  console.log("refuse");
                }}
                content="거부"
                length="short"
              />
              <Button
                handleClick={() => {
                  console.log("accept");
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
