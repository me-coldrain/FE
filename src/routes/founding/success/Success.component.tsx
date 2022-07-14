import React, { useState } from "react";
import { handleFile } from "@hooks/events";
import RouterButton from "components/RouterButton";
import styles from "./Success.module.scss";

const { successBox, xBox, buttonLabel } = styles;

export default function success(): JSX.Element {
  return (
    <>
      <main className={successBox}>
        <div className={xBox}>
          <p>x</p>
        </div>
        <div>
          <p>팀이 생성되었습니다!</p>
          <p>팀 상세페이지에서 수정이 가능합니다.</p>
        </div>
        <div>
          <p className={buttonLabel}>
            팀원들을 초대해 함께 경기 일정을 공유해보세요!
          </p>
          <RouterButton share>팀원들에게 공유하기</RouterButton>
        </div>
      </main>
      <style jsx>{``}</style>
    </>
  );
}
