import React, { useState } from "react";
import { useRouter } from "next/router";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";
// import SelectButton from "components/selectButton";
import styles from "./Location.module.scss";

const { selectBox } = styles;

export default function location(): JSX.Element {
  const router = useRouter();
  console.log(router);
  const [location, setLocation] = useState("seoul");
  const handleLocation = (text: string) => {
    setLocation(text);
  };
  return (
    <>
      <main>
        <section>
          <Progressbar size="50%"></Progressbar>
          <Back></Back>
        </section>
        <h3>주 활동 지역</h3>
        <p>1개만 선택 가능합니다.</p>
        <div className={selectBox}>
          {/* <SelectButton
            location
            onClick={() => handleLocation("seoul")}
            active={location === "seoul" ? true : false}
          >
            서울특별시
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("gyeongi")}
            active={location === "gyeongi" ? true : false}
          >
            경기도
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("incheon")}
            active={location === "incheon" ? true : false}
          >
            인천광역시
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("busan")}
            active={location === "busan" ? true : false}
          >
            부산광역시
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("daegu")}
            active={location === "daegu" ? true : false}
          >
            대구광역시
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("gwangju")}
            active={location === "gwangju" ? true : false}
          >
            광주광역시
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("ulsan")}
            active={location === "ulsan" ? true : false}
          >
            울산광역시
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("cb")}
            active={location === "cb" ? true : false}
          >
            충청북도
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("cn")}
            active={location === "cn" ? true : false}
          >
            충청남도
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("sejong")}
            active={location === "sejong" ? true : false}
          >
            세종특별자치시
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("jb")}
            active={location === "jb" ? true : false}
          >
            전라북도
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("jn")}
            active={location === "jn" ? true : false}
          >
            전라남도
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("gangwon")}
            active={location === "gangwon" ? true : false}
          >
            강원특별자치도
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("kb")}
            active={location === "kb" ? true : false}
          >
            경상북도
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("kn")}
            active={location === "kn" ? true : false}
          >
            경상남도
          </SelectButton>
          <SelectButton
            location
            onClick={() => handleLocation("jeju")}
            active={location === "jeju" ? true : false}
          >
            제주특별자치도
          </SelectButton> */}
        </div>
        <RouterButton
          url="/founding/stadium"
          bigRound
          teamName={router.query.teamName as string}
          teamInfo={router.query.teamInfo as string}
          location={location}
        >
          다음
        </RouterButton>
      </main>
    </>
  );
}
