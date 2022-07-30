import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { makeRequest } from "services/makeRequest";
import { injectClassNames } from "utils/css";
import Image from "components/image";
import Icon from "@components/icon";
import Modal from "@components/modal";
// style
import styles from "./Landing.module.scss";

const {
  wrapper,
  landing,
  landingText,
  landingImage,
  active,
  searchBar,
  searchBarIcon,
  filters,
  filtersIcon,
} = styles;

type ILandingProps = {
  homePage: boolean;
  setHomePage: Dispatch<SetStateAction<boolean>>;
  setLocationModal: Dispatch<SetStateAction<boolean>>;
  setDaysModal: Dispatch<SetStateAction<boolean>>;
  setTimeModal: Dispatch<SetStateAction<boolean>>;
  setWinRateModal: Dispatch<SetStateAction<boolean>>;
};

export default function Landing(props: ILandingProps): JSX.Element {
  const { homePage, setHomePage } = props;
  const [keyword, setKeyword] = useState<string>();

  // modal state

  const fetchMatches = () => {
    setHomePage(true);
  };

  const fetchRecruit = () => {
    setHomePage(false);
  };

  const handleChange = (e: any): any => {
    setKeyword(e.target.value);
  };

  const handleSubmit = () => {
    makeRequest({
      endpoint: `home/teams?input=${keyword}`,
      method: "GET",
      auth: true,
    }).then((res: any) => {
      // console.log(res);
      // if (res !== undefined) {
      //   if (res?.first) {
      //     router.replace("/register/nickname");
      //   } else {
      //     router.replace("/");
      //   }
      // } else {
      //   window.alert("아이디 혹은 비밀번호를 다시 입력해주세요.");
      // }
    });
  };

  return (
    <div className={wrapper}>
      <div className={landing}>
        <div className={homePage ? landingText : landingText}>
          <p
            onClick={fetchMatches}
            className={injectClassNames([active, homePage === true])}
            style={{ marginRight: "2rem" }}
          >
            대결
          </p>
          <p
            onClick={fetchRecruit}
            className={injectClassNames([active, homePage === false])}
          >
            팀원 모집
          </p>
        </div>

        <div className={searchBar}>
          <input
            id="keyword"
            placeholder="팀 이름을 검색해주세요."
            onChange={handleChange}
            value={keyword || ""}
          />
          <div onClick={handleSubmit}>
            <Icon asset={"Search"} className={searchBarIcon} />
          </div>
        </div>

        <div className={filters}>
          <div onClick={() => props.setLocationModal(true)}>
            <p>지역</p>
          </div>
          <div onClick={() => props.setDaysModal(true)}>
            <p>요일</p>
          </div>
          <div onClick={() => props.setTimeModal(true)}>
            <p>시간</p>
          </div>
          <div onClick={() => props.setWinRateModal(true)}>
            <p>승률</p>
          </div>
        </div>
      </div>
    </div>
  );
}
