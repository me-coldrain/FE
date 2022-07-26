import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "components/image";
// style
import { injectClassNames } from "utils/css";
import Icon from "@components/icon";
import styles from "./Landing.module.scss";
import Modal from "@components/modal";

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
  // modal state

  const fetchMatches = () => {
    console.log("fetchMatches : with");
    setHomePage(true);
  };

  const fetchRecruit = () => {
    console.log("fetchRecruit :");
    setHomePage(false);
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
          <input placeholder="팀 이름을 검색해주세요." />
          <Icon asset={"Search"} className={searchBarIcon} />
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
