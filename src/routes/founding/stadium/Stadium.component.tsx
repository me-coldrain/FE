import React, { useState } from "react";
import { useRouter } from "next/router";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";
import SelectButton from "components/selectButton";
import styles from "./Stadium.module.scss";

const { selectBox } = styles;

export default function stadium(): JSX.Element {
  const router = useRouter();
  console.log(router);
  const [stadium, setStadium] = useState("both");
  const handleStadium = (text: string) => {
    setStadium(text);
  };
  return (
    <>
      <main>
        <section>
          <Progressbar size="75%"></Progressbar>
          <Back></Back>
        </section>
        <h3>선호지역</h3>
        <p>1개만 선택 가능합니다.</p>
        <div className={selectBox}>
          <SelectButton
            stadium
            onClick={() => handleStadium("home")}
            active={stadium === "home" ? true : false}
          >
            저희 홈구장에서 하고 싶어요
          </SelectButton>
          <SelectButton
            stadium
            onClick={() => handleStadium("away")}
            active={stadium === "away" ? true : false}
          >
            상대방에 맞출게요
          </SelectButton>
          <SelectButton
            stadium
            onClick={() => handleStadium("both")}
            active={stadium === "both" ? true : false}
          >
            다 상관 없습니다
          </SelectButton>
        </div>
        <RouterButton
          url="/founding/time"
          bigRound
          teamName={router.query.teamName as string}
          teamInfo={router.query.teamInfo as string}
          location={router.query.location as string}
          stadium={stadium}
        >
          다음
        </RouterButton>
        <style jsx>{``}</style>
      </main>
    </>
  );
}
