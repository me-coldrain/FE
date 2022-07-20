import React from "react";
import SourceDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends SourceDocument {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <script
            defer
            src="https://developers.kakao.com/sdk/js/kakao.min.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
