import React from "react";
import styles from "./StatusButton.module.scss";

const { wait, cancel } = styles;

type ButtonProps = {
  join?: boolean;
  apply?: boolean;
};

export default function StatusButton(props: ButtonProps): JSX.Element {
  const { join, apply } = props;

  if (join) {
    return (
      <div className={wait}>
        <p>경기예정</p>
      </div>
    );
  }
  if (apply) {
    return (
      <div className={cancel}>
        <p>신청취소</p>
      </div>
    );
  } else {
    return <></>;
  }
}
