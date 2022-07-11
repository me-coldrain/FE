import React from "react";
import styles from "./Progressbar.module.scss";

const { progressbar, percent } = styles;

type PGProps = {
  size?: string;
};

export default function Progressbar(props: PGProps): JSX.Element {
  const { size } = props;
  return (
    <div className={progressbar}>
      <div className={percent} style={{ width: size }}></div>
    </div>
  );
}
