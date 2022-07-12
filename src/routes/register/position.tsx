import React from "react";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";
import SelectButton from "components/SelectButton";

export default function position(): JSX.Element {
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
        <div className="selectBox">
          <SelectButton position>공격수</SelectButton>
          <SelectButton position>미드필더</SelectButton>
          <SelectButton position>수비수</SelectButton>
          <SelectButton position>골키퍼</SelectButton>
        </div>
        <RouterButton url="/register/contact" bigRound>
          다음
        </RouterButton>
        <style jsx>{`
          .selectBox {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
          }
        `}</style>
      </main>
    </>
  );
}
