import React, { useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider } from "contexts/theme";
import Header from "components/header";
import Footer from "components/footer";
import NotificationList from "components/notificationList";
import store from "stores";
import { Provider } from "react-redux";
import { statusBarStyle } from "config";
import { AppProps } from "next/app";
import "styles/main.scss";
import { makeRequest } from "services/makeRequest";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register(process.env.serviceWorkerUrl as string, {
        scope: "/",
      });
    }
  }, []);
  useEffect(() => {
    try {
      if (!window.Kakao.isInitialized() && window.Kakao) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const router = useRouter();
  const showNav =
    router.pathname === "/login" ||
    router.pathname === "/introduction" ||
    router.pathname === "/endmatch/success" ||
    router.pathname === "/register/contact" ||
    router.pathname === "/register/nickname" ||
    router.pathname === "/register/position"
      ? false
      : true;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=0, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={statusBarStyle}
        />
        <link
          rel="apple-touch-startup-image"
          sizes="512x512"
          href="/logo512.png"
        />
        <link
          rel="apple-touch-startup-image"
          sizes="256x256"
          href="/logo256.png"
        />
        <link rel="apple-touch-icon" sizes="512x512" href="/logo512.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="/logo256.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Provider store={store}>
        <ThemeProvider>
          <NotificationList />
          {showNav && <Header backBtn={true} />}
          <Component {...pageProps} />
          <div id="modal-element"></div>
          {showNav && <Footer />}
        </ThemeProvider>
      </Provider>
    </>
  );
}
