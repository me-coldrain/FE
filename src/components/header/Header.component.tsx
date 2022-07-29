import React, { memo, useEffect } from "react";
import Icon from "components/icon";
import Items from "components/header/items";
import Logo from "components/header/logo";
import router, { useRouter } from "next/router";
import styles from "./Header.module.scss";

type IHeader = {
  backBtn: boolean;
};

const OFFLINE = "offline";

const STACKS = ["/", "/teams"];

const {
  ActiveHeader,
  header,
  headerControls,
  offline,
  offlineIcon,
  backBtnStyle,
  backBtnStyleIcon,
} = styles;

const handleNetworkChange = (): void => {
  const {
    documentElement: { classList },
  } = document;

  if (!navigator.onLine) {
    classList.add(OFFLINE);

    return;
  }

  classList.remove(OFFLINE);
};

export default memo(function Header({ backBtn }: IHeader): JSX.Element {
  const { pathname, back } = useRouter();
  const showNav =
    pathname === "/mypage" ||
    pathname === "/rank/team" ||
    pathname === "/rank/player" ||
    pathname === "/founding/success" ||
    pathname === "/player/[playerId]" ||
    pathname === "/formation/detail"
      ? false
      : true;
  const colorUrl = "/";

  useEffect(() => {
    if (typeof window !== undefined) {
      handleNetworkChange();

      window.addEventListener("online", handleNetworkChange);
      window.addEventListener("offline", handleNetworkChange);

      return () => {
        window.removeEventListener("online", handleNetworkChange);
        window.removeEventListener("offline", handleNetworkChange);
      };
    }
  }, []);

  return (
    <>
      <div className={offline}>
        <Icon asset="Cloud-Slash" className={offlineIcon} />
        You are currently browsing in offline mode.
      </div>
      {showNav && (
        <header className={pathname === colorUrl ? ActiveHeader : header}>
          <nav>
            <div className={headerControls}>
              {backBtn && !STACKS.includes(pathname) && (
                <div onClick={back} className={backBtnStyle}>
                  <Icon asset="Left-Arrow" className={backBtnStyleIcon} />
                </div>
              )}
              <Logo />
            </div>
            <Items />
          </nav>
        </header>
      )}
      {!showNav && <Items></Items>}
    </>
  );
});
