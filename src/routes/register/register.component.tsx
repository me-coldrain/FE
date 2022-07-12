import React from "react";
import styles from "./register.module.scss";

export default function InitialLogin(): JSX.Element {
  const { initialLogin } = styles;

  return (
    <>
      <main className={initialLogin}></main>
    </>
  );
}
