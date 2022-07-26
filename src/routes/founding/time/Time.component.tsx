import React, { useState } from "react";
import { useRouter } from "next/router";
import Back from "components/back";
import Progressbar from "components/progressbar";
import SelectButton from "@components/buttonForSelect";
import { RegisterFooter } from "@components/footer";
import { makeRequest } from "services/makeRequest";
import styles from "./Time.module.scss";

const { container, selectBox, timeBox, buttonBox } = styles;

type params = {
  introduce: string | string[] | undefined;
  teamName: string | string[] | undefined;
  mainArea: string | string[] | undefined;
  preferredArea: string | string[] | undefined;
  weekdays: string[];
  time: string[];
};

type A = keyof params;

export default function time(): JSX.Element {
  const router = useRouter();
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

  const handleRouter = async () => {
    console.log(router.query);
    const params: params = {
      introduce: router.query.teamInfo,
      teamName: router.query.teamName,
      mainArea: router.query.location,
      preferredArea: router.query.stadium,
      weekdays: preferedDays,
      time: preferedTime,
    };

    const _formData = new FormData();
    for (const key in params as any) {
      _formData.append(key as A, params[key]);
    }

    console.log(_formData);

    console.log("params =", params);
    await makeRequest({
      endpoint: "home/teams",
      method: "POST",
      params: _formData,
      auth: true,
      isFile: true,
    }).then((res: any) => {
      console.log(res);
      if (res.status === 201) {
        router.replace("/founding/success");
      } else {
        window.alert("팀등록에 실패하였습니다. 잠시 후 다시 시도해주세요.");
      }
    });
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
        <div className={buttonBox}>
          <RegisterFooter
            content="다음"
            activeStyle
            handleClick={() => {
              handleRouter();
            }}
          ></RegisterFooter>
        </div>
      </main>
    </>
  );
}
