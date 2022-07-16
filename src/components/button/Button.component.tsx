import React from "react";
import { injectClassNames } from "utils/css";
import styles from "./Button.module.scss";

type ButtonProps = {
  handleClick: () => void;
  content: string | JSX.Element;
  length: string;
  color?: boolean;
};

const { button, coloredButton } = styles;

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
