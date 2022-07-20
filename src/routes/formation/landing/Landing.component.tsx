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
  filters,
  filtersIcon,
} = styles;

export default function Landing(): JSX.Element {
  const [homePage, setHomePage] = useState<boolean>(true);

  return (
    <div className={wrapper}>
      <div className={landing}>
        <div className={landingText}>
          <p>경기 참여할 인원을 선택해주세요.</p>
        </div>

        <div className={searchBar}>
          <input placeholder="멤버 이름을 검색해주세요." />
          <Icon asset={"Calendar"} className={searchBarIcon} />
        </div>
      </div>
    </div>
  );
}
