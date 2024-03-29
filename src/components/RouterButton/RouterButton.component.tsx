import Link from "next/link";
import React from "react";
import { injectClassNames } from "utils/css";
import styles from "./RouterButton.module.scss";

const { round, login, normal, shares, editButton } = styles;

type ButtonProps = {
  url?: string;
  children?: string;
  bigRound?: boolean;
  bigSquare?: boolean;
  bigSquareLogin?: boolean;
  onClick?: any;
  nickname?: any;
  preferedPosition?: any;
  share?: boolean;
  teamName?: string;
  teamInfo?: string;
  teamImageFile?: string | null;
  location?: string;
  stadium?: string;
  mine?: boolean;
};

export default function Button(props: ButtonProps): JSX.Element {
  const {
    url = "",
    children = "",
    bigRound,
    bigSquare,
    bigSquareLogin,
    onClick,
    nickname = "",
    preferedPosition = "",
    share,
    teamName = "",
    teamInfo = "",
    location = "",
    stadium = "",
    mine,
    teamImageFile = "",
  } = props;

  if (bigRound) {
    if (nickname) {
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
    if (mine) {
      return (
        <div className={editButton} onClick={onClick}>
          <Link
            href={{
              pathname: url,
              // query: { nickname: nickname, position: preferedPosition },
            }}
            prefetch={true}
            as={url}
          >
            <a>{children}</a>
          </Link>
        </div>
      );
    }
    return (
      <div className={round} onClick={onClick}>
        <Link
          href={{
            pathname: url,
            query: {
              teamName: teamName,
              teamInfo: teamInfo,
              url: teamImageFile,
              location: location,
              stadium: stadium,
            },
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
  if (bigSquareLogin) {
    return (
      <div className={login} onClick={onClick}>
        <a>{children}</a>
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
