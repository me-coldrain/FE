import React from "react";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";

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
          <div className="select">
            <p>공격수</p>
          </div>
          <div className="select">
            <p>미드필더</p>
          </div>
          <div className="select">
            <p>수비수</p>
          </div>
          <div className="select">골키퍼</div>
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
          .select {
            width: 160px;
            height: 60px;
            background-color: #d9d9d9;
            margin: 7px 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          .select:hover {
            background-color: #bdb9b9;
          }
        `}</style>
      </main>
    </>
  );
}
