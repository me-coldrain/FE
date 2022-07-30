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
  arrowLink: BaseRouter;
  arrowLinkAs: string;
  linkType?: boolean;
  [x: string]: any;
};

type BaseRouter = {
  pathname: string;
  query: any;
};

const {
  container,
  title,
  contentBox,
  containerIcon,
  containerJSX,
  containerEntire,
} = styles;

export const PlaceholderWithJSX = ({
  label,
  content,
  arrowLink,
  linkType = true,
  arrowLinkAs,
  ...rest
}: IProps): JSX.Element => {
  return (
    <div className={container}>
      <div className={containerEntire}>
        <h3>{label}</h3>
        {linkType ? (
          <Link href={arrowLink}>
            <Icon asset="Right-Arrow" className={containerIcon} />
          </Link>
        ) : (
          <p style={{ color: "#868686", fontSize: "18px", cursor: "pointer" }}>
            전체보기
          </p>
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
