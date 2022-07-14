import Link from "next/link";
import React from "react";
import { injectClassNames } from "utils/css";
import styles from "./RouterButton.module.scss";

const { round, login, normal, shares } = styles;

type ButtonProps = {
  url?: string;
  children?: string;
  bigRound?: boolean;
  bigSquare?: boolean;
  onClick?: any;
  nickname?: any;
  preferedPosition?: any;
  share?: boolean;
};

export default function Button(props: ButtonProps): JSX.Element {
  const {
    url = "",
    children = "",
    bigRound,
    bigSquare,
    onClick,
    nickname = "",
    preferedPosition = "",
    share,
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
          <a>{children}</a>
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
          <a>{children}</a>
        </Link>
      </div>
    );
  }
  if (share) {
    return (
      <div className={shares} onClick={onClick}>
        <p>{children}</p>
      </div>
    );
  } else {
    return (
      <div className={normal} onClick={onClick}>
        <p>{children}</p>
      </div>
    );
  }
}
