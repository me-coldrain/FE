import React, { useState } from "react";
import Image from "components/image";
// style
import { injectClassNames } from "utils/css";
import Icon from "@components/icon";
import styles from "./Landing.module.scss";

const {
  wrapper,
  landing,
  landingText,
  landingImage,
  active,
  searchBar,
  searchBarIcon,
} = styles;

export default function Landing(): JSX.Element {
  const [homePage, setHomePage] = useState<boolean>(true);

  const fetchMatches = () => {
    console.log("fetchMatches :");
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

        <Image
          className={landingImage}
          src="/assets/landing.png"
          alt="Desktop & Mobile PWA Application"
          width="450px"
          height="310px"
        />
      </div>
    </div>
  );
}
