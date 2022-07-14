import React, { useEffect, useState } from "react";
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

export default function Landing(): JSX.Element {
  const [homePage, setHomePage] = useState<boolean>(true);
  // modal state
  const [locationModal, setLocationModal] = useState<boolean>(false);
  const [daysModal, setDaysModal] = useState<boolean>(false);
  const [timeModal, setTimeModal] = useState<boolean>(false);
  const [winRateModal, setWinRateModal] = useState<boolean>(false);

  const fetchMatches = () => {
    console.log("fetchMatches : with dispatch");
    setHomePage(true);
  };

  const fetchRecruit = () => {
    console.log("fetchRecruit :");
    setHomePage(false);
  };

  return (
    <div className={wrapper}>
      <Modal
        title="지역"
        show={locationModal}
        onClose={() => setLocationModal(false)}
      >
        지역모달
      </Modal>
      <Modal title="요일" show={daysModal} onClose={() => setDaysModal(false)}>
        지역모달
      </Modal>
      <Modal title="시간" show={timeModal} onClose={() => setTimeModal(false)}>
        지역모달
      </Modal>
      <Modal
        title="지역"
        show={winRateModal}
        onClose={() => setWinRateModal(false)}
      >
        지역모달
      </Modal>
      <div className={landing}>
        <div className={homePage ? landingText : landingText}>
          <p
            onClick={fetchMatches}
            className={injectClassNames([active, homePage === true])}
            style={{ marginRight: "3rem" }}
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
          <Icon asset={"Calendar"} className={searchBarIcon} />
        </div>

        <div className={filters}>
          <div onClick={() => setLocationModal(!locationModal)}>
            <p>지역</p>
          </div>
          <div onClick={() => setDaysModal(!daysModal)}>
            <p>요일</p>
          </div>
          <div onClick={() => setTimeModal(!timeModal)}>
            <p>시간</p>
          </div>
          <div onClick={() => setWinRateModal(!winRateModal)}>
            <p>승률</p>
          </div>
        </div>
      </div>
    </div>
  );
}
