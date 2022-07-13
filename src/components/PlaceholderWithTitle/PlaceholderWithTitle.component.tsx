import { ParsedUrlQuery } from "querystring";
import React from "react";
import { injectClassNames } from "utils/css";
import Icon from "@components/icon";
import Link from "next/link";

import styles from "./PlaceholderWithTitle.module.scss";

type IProps = {
  label?: string;
  content: string | JSX.Element;
  length: string;
  arrowLink?: string | BaseRouter;
  linkType?: boolean;
};

type BaseRouter = {
  pathname: string;
  query: ParsedUrlQuery;
};

const { container, title, contentBox, containerIcon, containerJSX } = styles;

export const PlaceholderWithJSX = ({
  label,
  content,
  arrowLink = "/team/[name]/members",
  linkType = true,
}: IProps): JSX.Element => {
  return (
    <div className={container}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <h3>{label}</h3>
        {linkType ? (
          <Link href={arrowLink}>
            <Icon asset="Right-Arrow" className={containerIcon} />
          </Link>
        ) : (
          <Link href={arrowLink}>
            <p>전체보기</p>
          </Link>
        )}
      </div>
      <div className={contentBox}>{content}</div>
    </div>
  );
};

export default function ({ label, content, length }: IProps): JSX.Element {
  const className = injectClassNames([container, styles[length]]);
  return (
    <div className={className}>
      <h3>{label}</h3>
      <div className={contentBox}>
        <h3>{content}</h3>
      </div>
    </div>
  );
}
