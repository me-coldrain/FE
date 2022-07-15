import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Logo.module.scss";

const { logo, textWhite } = styles;

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
    if (pathname === "/team/[teamName]/members") {
      setContent("경기 히스토리");
    }
  }, [pathname]);

  return (
    <div className={white ? textWhite : logo}>
      <Link href="/">
        <a>{content}</a>
      </Link>
    </div>
  );
}
