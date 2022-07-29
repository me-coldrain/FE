import React from "react";
import Link from "next/link";
import styles from "./Success.module.scss";

const { successBox, xBox, successMsgBox, successMsg } = styles;

export default function success(): JSX.Element {
  return (
    <>
      <main className={successBox}>
        <div className={xBox}>
          <Link href="/">
            <a>x</a>
          </Link>
        </div>
        <div className={successMsgBox}>
          <p className={successMsg}>경기 결과가 입력되었습니다.</p>
        </div>
      </main>
    </>
  );
}
