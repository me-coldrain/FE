import Button from "@components/button";
import Image from "@components/image";
import SafeArea from "@components/safeArea";
import Head from "next/head";
import React from "react";
import styles from "./Accept.module.scss";

const {
  question,
  questionBox,
  proposal,
  proposalMember,
  proposalImage,
  proposalContent,
  proposalAnswer,
} = styles;

export default function Accept(): JSX.Element {
  return (
    <div>
      <SafeArea color="#4b72f1" />
      <div className={question}>
        <p>Q. 사전 질문</p>
        <div className={questionBox}>
          <p>축구할때 가장 중요하게 생각하는 것은 무엇인가요?</p>
        </div>
      </div>
      <div className={proposal}>
        {/**@map from server */}
        <div className={proposalMember}>
          <div className={proposalContent}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Image
                src={
                  "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
                }
                className={proposalImage}
              />
              <p>팀원 이름</p>
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
            aslkdfjalskdjflaksjdflakjsd;lfakjdf;la
            kjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfka
          </div>
        </div>
      </div>
    </div>
  );
}
