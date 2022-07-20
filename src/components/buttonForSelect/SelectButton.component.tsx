import React from "react";
import styles from "./SelectButton.module.scss";

const { normal, select, stadiumSelect, stadiumNormal, timeSelect, timeNormal } =
  styles;

type ButtonProps = {
  children?: string;
  position?: boolean;
  onClick?: any;
  active?: boolean;
  location?: boolean;
  stadium?: boolean;
  time?: boolean;
};

export default function Button(props: ButtonProps): JSX.Element {
  const {
    children = "",
    position,
    onClick,
    active,
    location,
    stadium,
    time,
  } = props;

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
  }
  if (location) {
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
  }
  if (stadium) {
    if (active) {
      return (
        <div className={stadiumSelect} onClick={onClick}>
          <p>{children}</p>
        </div>
      );
    }
    return (
      <div className={stadiumNormal} onClick={onClick}>
        <p>{children}</p>
      </div>
    );
  }
  if (time) {
    if (active) {
      return (
        <div className={timeSelect} onClick={onClick}>
          <p>{children}</p>
        </div>
      );
    }
    return (
      <div className={timeNormal} onClick={onClick}>
        <p>{children}</p>
      </div>
    );
  } else {
    return <></>;
  }
}
