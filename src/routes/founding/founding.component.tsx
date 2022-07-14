import React from "react";
import styles from "./founding.module.scss";

export default function InitialLogin(): JSX.Element {
  const { initialLogin } = styles;

  return (
    <>
      <main className={initialLogin}></main>
    </>
  );
}
