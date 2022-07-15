import React, { useState } from "react";
import { useRouter } from "next/router";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";
import SelectButton from "components/SelectButton";
import { useDispatch } from "react-redux";
import styles from "./Time.module.scss";

const { container, selectBox, timeBox } = styles;

export default function time(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();
  console.log(router);
  const [preferedDays, setpreferedDays] = useState<string[]>(["sun"]);
  const [preferedTime, setpreferedTime] = useState<string[]>(["am"]);
  const handleDays = (text: string) => {
    if (preferedDays.find((x) => x === text) !== undefined) {
      setpreferedDays(preferedDays.filter((x) => x !== text));
    } else {
      setpreferedDays([...preferedDays, text]);
    }
  };
  const handleTime = (text: string) => {
    if (preferedTime.find((x) => x === text) !== undefined) {
      setpreferedTime(preferedTime.filter((x) => x !== text));
    } else {
      setpreferedTime([...preferedTime, text]);
    }
  };
  const handleSubmit = () => {
    const teamName = router.query.teamName as string;
    const teamInfo = router.query.teamInfo as string;
    const location = router.query.location as string;
    const stadium = router.query.stadium as string;

    const totalTeamInfo = {
      teamName,
      teamInfo,
      location,
      stadium,
      preferedDays,
      preferedTime,
    };
    // dispatch(actionName(totalTeamInfo))
  };

  return (
    <>
      <main>
        <section>
          <Progressbar size="100%"></Progressbar>
          <Back></Back>
        </section>
        <h3>언제 만날까요?</h3>
        <p>* 다중 선택 가능합니다.</p>

        <p>가능한 요일을 선택해주세요.</p>
        <div className={container}>
          <div className={selectBox}>
            <SelectButton
              time
              onClick={() => handleDays("mon")}
              active={preferedDays.find((x) => x === "mon") ? true : false}
            >
              월
            </SelectButton>
            <SelectButton
              time
              onClick={() => handleDays("tue")}
              active={preferedDays.find((x) => x === "tue") ? true : false}
            >
              화
            </SelectButton>
            <SelectButton
              time
              onClick={() => handleDays("wed")}
              active={preferedDays.find((x) => x === "wed") ? true : false}
            >
              수
            </SelectButton>
            <SelectButton
              time
              onClick={() => handleDays("thu")}
              active={preferedDays.find((x) => x === "thu") ? true : false}
            >
              목
            </SelectButton>
            <SelectButton
              time
              onClick={() => handleDays("fri")}
              active={preferedDays.find((x) => x === "fri") ? true : false}
            >
              금
            </SelectButton>
            <SelectButton
              time
              onClick={() => handleDays("sat")}
              active={preferedDays.find((x) => x === "sat") ? true : false}
            >
              토
            </SelectButton>
            <SelectButton
              time
              onClick={() => handleDays("sun")}
              active={preferedDays.find((x) => x === "sun") ? true : false}
            >
              일
            </SelectButton>
          </div>
        </div>
        <p>가능한 시간대를 선택해주세요.</p>
        <div className={timeBox}>
          <SelectButton
            location
            onClick={() => handleTime("am")}
            active={preferedTime.find((x) => x === "am") ? true : false}
          >
            오전
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleTime("pm")}
            active={preferedTime.find((x) => x === "pm") ? true : false}
          >
            오후
          </SelectButton>
        </div>
        <RouterButton
          url="/founding/success"
          bigRound
          // onClick={() => {handleSubmit()}}
        >
          다음
        </RouterButton>
      </main>
    </>
  );
}
