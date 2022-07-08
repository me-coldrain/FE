import Link from "next/link";
import React, { useCallback, useState } from "react";
import { injectClassNames } from "utils/css";
import styles from "./Button.module.scss";

const { button, placeholder, navigationWrapper } = styles;

type ButtonProps = {
  url?: string;
  children?: string;
};

export default function Button(props: ButtonProps): JSX.Element {
  const { url = "", children = "" } = props;

  return (
    <div className={button}>
      <Link href={url}>
        <a>{children}</a>
      </Link>
    </div>
  );
}
