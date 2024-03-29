import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Logo.module.scss";
import Icon from "@components/icon";

const { logo, textWhite, logoIcon } = styles;

export default function Logo(): JSX.Element {
  const { pathname } = useRouter();

  const [white, setWhite] = useState<boolean>();
  const [content, setContent] = useState<string | JSX.Element>();

  const whiteLogo = ["/"];

  useEffect(() => {
    if (whiteLogo.includes(pathname)) {
      setWhite(true);
    } else {
      setWhite(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") {
      setContent(<Icon asset="Logo" />);
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
        <Icon asset="Logo" className={logoIcon} />
        {/* <a>{content}</a> */}
      </Link>
    </div>
  );
}
