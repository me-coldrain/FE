import React, { useState } from "react";
import { useRouter } from "next/router";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";
import SelectButton from "components/SelectButton";

export default function time(): JSX.Element {
  const router = useRouter();
  console.log(router);
  const [preferedDays, setpreferedDays] = useState({
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false,
  });
  const handleDays = (text: string) => {
    // const { mykey } = text;
    // setpreferedDays(!preferedDays[mykey]);
  };
  return (
    <>
      <main>
        <section>
          <Progressbar size="66%"></Progressbar>
          <Back></Back>
        </section>
        <h3>언제 만날까요?</h3>
        <p>* 다중 선택 가능합니다.</p>

        <div className="selectBox">
          <p>가능한 요일을 선택해주세요.</p>
          <SelectButton
            time
            onClick={() => handleDays("mon")}
            active={preferedDays.mon === true ? true : false}
          >
            월
          </SelectButton>
        </div>
        <RouterButton
          url="/register/contact"
          bigRound
          nickname={router.query.nickname}
          // preferedPosition={preferedPosition}
        >
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
