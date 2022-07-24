import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "@components/icon";
import { injectClassNames } from "utils/css";
import styles from "./Items.module.scss";

const { items, active, activeIcon } = styles;

const links = [
  { name: "홈", url: "/", alias: [], asset: "nav/Home" },
  { name: "랭킹", url: "/rank/team", alias: [], asset: "nav/Rank" },
  { name: "팀", url: "/myteam", alias: [], asset: "nav/Teams" },
  { name: "마이페이지", url: "/mypage", alias: [], asset: "nav/Profile" },
];

export default function Items(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <ul className={items}>
      {links.map(({ name, url, alias, asset }) => (
        <li
          key={name}
          className={injectClassNames([
            active,
            pathname === url || alias.includes(pathname),
          ])}
        >
          <Link href={url}>
            <div
              className={injectClassNames([
                active,
                pathname === url || alias.includes(pathname),
              ])}
            >
              <Icon
                asset={asset}
                className={injectClassNames([
                  activeIcon,
                  pathname === url || alias.includes(pathname),
                ])}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a>{name}</a>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
