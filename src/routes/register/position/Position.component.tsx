import React, { useState } from "react";
import { useRouter } from "next/router";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";
import SelectButton from "components/selectButton";
import styles from "./Position.module.scss";

const { selectBox } = styles;

export default function position(): JSX.Element {
  const router = useRouter();
  console.log(router);
  const [preferedPosition, setPreferedPosition] = useState("fwd");
  const handlePosition = (text: string) => {
    setPreferedPosition(text);
  };
  return (
    <>
      <main>
        <section>
          <Progressbar size="66%"></Progressbar>
          <Back></Back>
        </section>
        <h3>
          선호하는 포지션을
          <br />
          선택해주세요
        </h3>
        <p>1개의 포지션만 선택 가능합니다.</p>
        <div className={selectBox}>
          <SelectButton
            position
            onClick={() => handlePosition("fwd")}
            active={preferedPosition === "fwd" ? true : false}
          >
            공격수
          </SelectButton>
          <SelectButton
            position
            onClick={() => handlePosition("mf")}
            active={preferedPosition === "mf" ? true : false}
          >
            미드필더
          </SelectButton>
          <SelectButton
            position
            onClick={() => handlePosition("df")}
            active={preferedPosition === "df" ? true : false}
          >
            수비수
          </SelectButton>
          <SelectButton
            position
            onClick={() => handlePosition("gk")}
            active={preferedPosition === "gk" ? true : false}
          >
            골키퍼
          </SelectButton>
        </div>
        <RouterButton
          url="/register/contact"
          bigRound
          nickname={router.query.nickname}
          preferedPosition={preferedPosition}
        >
          다음
        </RouterButton>
      </main>
    </>
  );
}
