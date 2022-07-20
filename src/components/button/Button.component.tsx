import { Checkbox } from "@mui/material";
import React from "react";
import { injectClassNames } from "utils/css";
import styles from "./Button.module.scss";

type ButtonProps = {
  handleClick: () => void;
  content: string | JSX.Element;
  length: string;
  color?: boolean;
};
type CheckBoxProps = {
  checked: boolean;
  handleClick: () => void;
  content: string | JSX.Element;
  color?: boolean;
};

const { button, coloredButton, checkBox } = styles;

export function ButtonRound(props: ButtonProps): JSX.Element {
  const { handleClick, content, length, color = true } = props;
  const coloredInjectedClassName = injectClassNames(
    coloredButton,
    styles[length]
  );
  return (
    <button onClick={handleClick} className={coloredInjectedClassName}>
      <p>{content}</p>
    </button>
  );
}

export function CheckBox(props: CheckBoxProps): JSX.Element {
  const { checked, handleClick, content, ...rest } = props;
  const coloredInjectedClassName = injectClassNames(checkBox, styles["long"]);

  return (
    <button onClick={handleClick} className={coloredInjectedClassName}>
      <p>{content}</p>
      <Checkbox checked={checked} />
    </button>
  );
}

export default function Button(props: ButtonProps): JSX.Element {
  const { handleClick, content, length, color = false } = props;
  const injectedClassName = injectClassNames(button, styles[length]);
  const coloredInjectedClassName = injectClassNames(
    coloredButton,
    styles[length]
  );
  return (
    <button
      onClick={handleClick}
      className={color ? coloredInjectedClassName : injectedClassName}
    >
      {content}
    </button>
  );
}
