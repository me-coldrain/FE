import Button from "@components/button";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const { footer, footerButtonLink, footerActiveButton } = styles;

type IProps = {
  content: string;
  handleClick: () => void;
  activeStyle: boolean;
};

type Content = {
  content: string;
};

export const RegisterFooter = ({
  content,
  handleClick,
  activeStyle,
}: IProps): JSX.Element => {
  return (
    <footer className={footer}>
      <div
        className={activeStyle ? footerButtonLink : footerActiveButton}
        onClick={handleClick}
      >
        <p>{content}</p>
      </div>
    </footer>
  );
};

export function InfoFooter({ content }: Content): JSX.Element {
  return (
    <footer className={footer}>
      <p>
        <a>{content}</a>
      </p>
    </footer>
  );
}

export default function Footer(): JSX.Element {
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
