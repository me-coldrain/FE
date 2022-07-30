import Button from "@components/button";
import { noFooterRoutes } from "dummy";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Footer.module.scss";

const { footer, footerButtonLink, footerActiveButton } = styles;

type IProps = {
  content: string | JSX.Element;
  handleClick: () => void;
  activeStyle: boolean;
  [x: string]: any;
};

type Content = {
  content: string | JSX.Element;
};

export const RegisterFooter = ({
  content,
  handleClick,
  activeStyle,
  ...rest
}: IProps): JSX.Element => {
  return (
    <footer className={footer} {...rest}>
      <div
        className={activeStyle ? footerButtonLink : footerActiveButton}
        onClick={handleClick}
      >
        {content}
      </div>
    </footer>
  );
};

export function InfoFooter({ content }: Content): JSX.Element {
  return (
    <footer className={footer}>
      <a>{content}</a>
    </footer>
  );
}

export default function Footer(): JSX.Element | null {
  const router = useRouter();
  if (noFooterRoutes.includes(router.pathname)) {
    return null;
  }
  const id = 1;
  return (
    <footer className={footer}>
      <p>
        <Link href="https://github.com/me-coldrain">
          <h5>Go to github</h5>
        </Link>
      </p>
    </footer>
  );
}
