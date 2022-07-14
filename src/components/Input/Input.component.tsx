import React from "react";
import styles from "./Input.module.scss";

const { login, sign, nametag } = styles;

type InputProps = {
  placeholder?: string;
  type?: string;
  normal?: boolean;
  label?: string;
  id?: string;
  onChange?: any;
  value?: string;
  signup?: boolean;
};

export default function Input(props: InputProps): JSX.Element {
  const {
    placeholder = "",
    type = "",
    normal,
    label = "",
    id = "",
    onChange,
    value = "",
    signup,
  } = props;

  if (normal) {
    return (
      <input className={login} placeholder={placeholder} type={type}></input>
    );
  }

  if (signup) {
    return (
      <>
        <label htmlFor={id} className={nametag}>
          {label}
        </label>
        <input
          className={sign}
          id={id}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
        ></input>
      </>
    );
  }
  return <></>;
}
