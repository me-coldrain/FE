import Image from "@components/image";
import SafeArea from "@components/safeArea";
import React from "react";

import styles from "./Members.module.scss";

const {
  title,
  category,
  memberCard,
  memberCardImage,
  mvpPoint,
  personalPoint,
} = styles;

export default function Members(): JSX.Element {
  console.log("fetch with team id");
  return (
    <>
      <div style={{ width: "100%" }}>
        <SafeArea />
        <div style={{ padding: "0 1rem" }}>
          <div className={title}>
            <p style={{ width: "60%" }}>포지션</p>
            <p style={{ width: "20%" }}>MVP</p>
            <p style={{ width: "20%" }}>개인 점수</p>
          </div>
        </div>
        <div className={category}>
          <p>주장</p>
          {/* from here */}
          <div style={{ display: "flex", width: "100%" }}>
            <div className={memberCard}>
              <Image
                src={
                  "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
                }
                className={memberCardImage}
              />
              <p>닉네임(공격수)</p>
            </div>
            <div className={mvpPoint}>
              <p>4</p>
            </div>
            <div className={personalPoint}>
              <p>4</p>
            </div>
          </div>
          {/* to here */}
        </div>
        <div className={category}>
          <p>공격수</p>
        </div>
        <div className={category}>
          <p>수비수</p>
        </div>
        <div className={category}>
          <p>미드필더</p>
        </div>
        <div className={category}>
          <p>골키퍼</p>
        </div>
      </div>
    </>
  );
}
