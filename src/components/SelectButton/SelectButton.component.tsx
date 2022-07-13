import React from "react";
import styles from "./SelectButton.module.scss";

const { normal, select } = styles;

type ButtonProps = {
  children?: string;
  position?: boolean;
  onClick?: any;
  active?: boolean;
};

export default function Button(props: ButtonProps): JSX.Element {
  const { children = "", position, onClick, active } = props;

  if (position) {
    if (active) {
      return (
        <div className={select} onClick={onClick}>
          <p>{children}</p>
        </div>
      );
    }
    return (
      <div className={normal} onClick={onClick}>
        <p>{children}</p>
      </div>
    );
  } else {
    return <></>;
  }
}
