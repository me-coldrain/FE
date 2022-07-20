import React, { useState } from "react";
// hooks
import { useRouter } from "next/router";
import Link from "next/link";
// component
import Apply from "./apply";
import Join from "./join";
import Image, { ImageWithHeader } from "@components/image";
import Icon from "@components/icon";
import { PlaceholderWithJSX } from "@components/PlaceholderWithTitle";
// style
import Footer, { RegisterFooter } from "@components/footer";
import styles from "./MyTeam.module.scss";

const { myTeam, team, activeTeam } = styles;

export default function MyTeam(): JSX.Element {
  const router = useRouter();

  //state
  const [active, setActive] = useState(true);
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <main className={myTeam}>
      <section className={team}>
        <div
          className={active ? activeTeam : ""}
          onClick={() => handleActive()}
        >
          <p>소속팀</p>
        </div>
        <div
          className={active ? "" : activeTeam}
          onClick={() => handleActive()}
        >
          <p>신청한팀</p>
        </div>
      </section>
      {active ? <Join></Join> : <Apply></Apply>}
    </main>
  );
}
/**
 *
 * @ToDo fetch with team ids
 * params: teamname, 팀 전적, 선호지역, 멤버 수
 *
 */
