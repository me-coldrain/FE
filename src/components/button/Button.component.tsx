import Link from "next/link";
import React, { useCallback, useState } from "react";
import { injectClassNames } from "utils/css";
import styles from "./Button.module.scss";

const { button, login, placeholder, navigationWrapper } = styles;

type ButtonProps = {
  url?: string;
  children?: string;
  bigRound?: boolean;
  bigSquare?: boolean;
  onClick?: any;
};

export default function Button(props: ButtonProps): JSX.Element {
  const { url = "", children = "", bigRound, bigSquare, onClick } = props;

  if (bigRound) {
    return (
      <div className={button} onClick={onClick}>
        <Link href={url}>
          <a>{children}</a>
        </Link>
      </div>
    );
  }
  if (bigSquare) {
    return (
      <div className={login} onClick={onClick}>
        <Link href={url}>
          <a>{children}</a>
        </Link>
      </div>
    );
  } else {
    return (
      <div className={button} onClick={onClick}>
        <p>{children}</p>
      </div>
    );
  }
}
