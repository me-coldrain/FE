import Link from "next/link";
import React from "react";
import { injectClassNames } from "utils/css";
import styles from "./RouterButton.module.scss";

const { round, login, normal } = styles;

type ButtonProps = {
  url?: string;
  children?: string;
  bigRound?: boolean;
  bigSquare?: boolean;
  onClick?: any;
  bgc?: string;
  nickname?: any;
  preferedPosition?: any;
};

export default function Button(props: ButtonProps): JSX.Element {
  const {
    url = "",
    children = "",
    bigRound,
    bigSquare,
    onClick,
    bgc = "",
    nickname = "",
    preferedPosition = "",
  } = props;

  if (bigRound) {
    return (
      <div className={round} onClick={onClick}>
        <Link
          href={{
            pathname: url,
            query: { nickname: nickname, position: preferedPosition },
          }}
          prefetch={true}
          as={url}
        >
          <a style={{ backgroundColor: bgc }}>{children}</a>
        </Link>
      </div>
    );
  }
  if (bigSquare) {
    return (
      <div className={login} onClick={onClick}>
        <Link
          href={{
            pathname: url,
            query: { nickname: nickname, position: preferedPosition },
          }}
          prefetch={true}
          as={url}
        >
          <a style={{ backgroundColor: bgc }}>{children}</a>
        </Link>
      </div>
    );
  } else {
    return (
      <div className={normal} onClick={onClick}>
        <p style={{ backgroundColor: bgc }}>{children}</p>
      </div>
    );
  }
}
