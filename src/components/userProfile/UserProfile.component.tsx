import React, { useCallback, useState } from "react";
import { injectClassNames } from "utils/css";
import styles from "./UserProfile.module.scss";

type ProfileProps = {
  nickname?: string;
  src?: string;
};

type PositionProfileProps = {
  nickname?: string;
  src: string | null;
  position: "striker" | "midfielder" | "defender" | "goalkeeper";
};

const { profile, position } = styles;

export function PositionProfile(props: PositionProfileProps): JSX.Element {
  return (
    <div className={position}>
      {props.position === "striker" ? (
        <h2 style={{ color: "#F14B3B" }}>FW</h2>
      ) : props.position === "midfielder" ? (
        <h2 style={{ color: "#00c667" }}>MF</h2>
      ) : props.position === "defender" ? (
        <h2 style={{ color: "#5cb1ff" }}>DF</h2>
      ) : (
        <h2 style={{ color: "#DB9B16" }}>GK</h2>
      )}
      <img src={props.src ? props.src : "/img/profileImg.png"} />
      <p>{props.nickname}</p>
    </div>
  );
}

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
