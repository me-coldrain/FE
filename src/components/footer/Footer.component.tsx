import Button from "@components/button";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const { footer, footerButtonLink } = styles;

export const RegisterFooter = (): JSX.Element => {
  return (
    <footer className={footer}>
      <Link href="">
        <div className={footerButtonLink}>
          <p>신청하기</p>
        </div>
      </Link>
    </footer>
  );
};

export default function Footer(): JSX.Element {
  const id = 1;
  return (
    <footer className={footer}>
      <p>
        <Link href="https://github.com/me-coldrain">
          <a>Go to github</a>
        </Link>
      </p>
    </footer>
  );
}
