import React, { useState } from "react";
import { useRouter } from "next/router";
import Back from "components/back";
import Progressbar from "components/progressbar";
import SelectButton from "@components/buttonForSelect";
import { RegisterFooter } from "@components/footer";
import styles from "./Stadium.module.scss";
import Link from "next/link";

const { selectBox, buttonBox } = styles;

export default function stadium(): JSX.Element {
  const router = useRouter();
  console.log(router);
  const [stadium, setStadium] = useState("both");
  const handleStadium = (text: string) => {
    setStadium(text);
  };
  const handleRouter = () => {
    router.push({
      pathname: "/founding/team",
      query: {
        ...router.query,
        stadium: stadium,
      },
    });
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
            대결 상대에 맞출게요
          </SelectButton>
          <SelectButton
            stadium
            onClick={() => handleStadium("both")}
            active={stadium === "both" ? true : false}
          >
            모두 상관 없습니다
          </SelectButton>
        </div>
        <div className={buttonBox}>
          <RegisterFooter
            content="다음"
            activeStyle
            handleClick={() => {
              handleRouter();
            }}
          ></RegisterFooter>
        </div>
        <style jsx>{``}</style>
      </main>
    </>
  );
}
