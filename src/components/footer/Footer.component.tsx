import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const { footer } = styles;

export default function Footer(): JSX.Element {
  const id = 1;
  return (
    <footer className={footer}>
      <p>© PWA Boilerplate</p>
      <p>
        View source code on{" "}
        <Link href="/why-pwa/{id}">
          <a>Go to pages/post/{id}.js</a>
        </Link>
      </p>
    </footer>
  );
}
