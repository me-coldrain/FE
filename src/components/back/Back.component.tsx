import React from "react";
import Router from "next/router";
import styles from "./Back.module.scss";

const { back } = styles;

export default function Back(): JSX.Element {
  return (
    <button type="button" onClick={() => Router.back()} className={back}>
      <p> &lt; </p>
    </button>
  );
}
