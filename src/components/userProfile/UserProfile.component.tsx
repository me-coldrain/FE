import React, { useCallback, useState } from "react";
import { injectClassNames } from "utils/css";
import styles from "./UserProfile.module.scss";

type ProfileProps = {
  nickname?: string;
  src?: string;
};

const { profile } = styles;

export default function UserProfile(props: ProfileProps): JSX.Element {
  const { nickname = "", src = "" } = props;

  return (
    <div className={profile}>
      {/* <img src={src}/> */}
      <img src="/img/profileImg.png" />
      {/* <p>{nickname}</p> */}
      <p>닉네임</p>
    </div>
  );
}
