import React from "react";
import styles from "./Input.module.scss";
import TextField from "@mui/material/TextField";
import pxToRem from "utils/css/pxToRem";

const { login, sign, nametag, signupBox } = styles;

type InputProps = {
  placeholder?: string;
  type?: string;
  normal?: boolean;
  label?: string;
  id?: string;
  onChange?: any;
  value?: string;
  signup?: boolean;
  error?: boolean;
  success?: boolean;
  multiLine?: number;
};

export function TextArea(props: InputProps): JSX.Element {
  const {
    placeholder = "",
    type = "",
    label = "",
    id = "",
    onChange,
    value = "",
    signup,
    error = true,
    success,
    multiLine = 5,
  } = props;

  const errorStyles = () => ({
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23F44335' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23F44335' stroke='none'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

    "& .Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline, &:after": {
        // borderColor: colorError.main,
      },
    },

    "& .MuiInputLabel-root.Mui-focused": {
      // color: colorError.main,
    },
  });

  const successStyles = () => ({
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%234CAF50' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

    "& .Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline, &:after": {
        // borderColor: colorSuccess.main,
      },
    },

    "& .MuiInputLabel-root.Mui-focused": {
      // color: colorSuccess.main,
    },
  });

  return (
    <TextField
      id="fullWidth"
      value={value}
      onChange={onChange}
      label={label}
      multiline
      fullWidth
      rows={multiLine}
      placeholder={placeholder}
      sx={(error ? errorStyles() : successStyles(), { maxWidth: "100%" })}
    />
  );
}

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
      <input
        className={login}
        placeholder={placeholder}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      ></input>
    );
  }

  if (signup) {
    return (
      <div className={signupBox}>
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
      </div>
    );
  }
  return <></>;
}
