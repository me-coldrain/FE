import React from "react";
import { injectClassNames } from "utils/css";
import styles from "./Button.module.scss";

type ButtonProps = {
  handleClick: () => void;
  content: string | JSX.Element;
  length: string;
};

const { button } = styles;

export default function Button(props: ButtonProps): JSX.Element {
  const { handleClick, content, length } = props;
  const injectedClassName = injectClassNames(button, length);
  return (
    <button onClick={handleClick} className={injectedClassName}>
      {content}
    </button>
  );
}
