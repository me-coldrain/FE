import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Logo.module.scss";

const { logo, logoImg, textWhite } = styles;

export default function Logo(): JSX.Element {
  const { pathname } = useRouter();

  const [white, setWhite] = useState<boolean>();
  const [content, setContent] = useState<string>();

  const whiteLogo = ["/"];

  console.log("pathname =", pathname);

  useEffect(() => {
    if (whiteLogo.includes(pathname)) {
      setWhite(true);
    } else {
      setWhite(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") {
      setContent("구십분");
    }
    if (pathname === "/team/[teamName]/matches") {
      setContent("경기 히스토리");
    }
    if (pathname === "/team/[teamName]/members") {
      setContent("멤버 소개");
    }
    if (pathname === "/team/[teamName]/schedule") {
      setContent("예정된 경기");
    }
    if (pathname === "/team/[teamName]/accept") {
      setContent("팀원 수락");
    }
    if (pathname === "/team/[teamName]/challenges") {
      setContent("대결 요청");
    }
    if (pathname === "/recruit") {
      setContent("");
    }
    return () => setContent("구십분");
  }, [pathname]);

  return (
    <div className={white ? textWhite : logo}>
      <Link href="/">
        {content === "구십분" ? (
          <div className={logoImg}></div>
        ) : (
          <a>{content}</a>
        )}
      </Link>
    </div>
  );
}
