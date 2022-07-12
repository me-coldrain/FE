import React from "react";
import styles from "./SelectButton.module.scss";

const { normal } = styles;

type ButtonProps = {
  children?: string;
  position?: boolean;
  onClick?: any;
};

export default function Button(props: ButtonProps): JSX.Element {
  const { children = "", position, onClick } = props;

  if (position) {
    return (
      <div className={normal} onClick={onClick}>
        <p>{children}</p>
      </div>
    );
  } else {
    return <></>;
  }
}
