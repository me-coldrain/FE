import SafeArea from "@components/safeArea";
import { useRouter } from "next/router";
import React from "react";

import styles from "./Matches.module.scss";

const {
  container,
  matchHistoryContainer,
  matchHistoryContainerWin,
  matchHistoryContainerLose,
  matchHistoryContainerResult,
  matchHistoryContainerWinner,
  matchHistoryContainerLoser,
} = styles;

type IMatches = {
  data: any;
};

export default function Matches({ data }: IMatches): JSX.Element {
  const router = useRouter();
  console.log(router);
  console.log("data=", data);

  return (
    <div className={container}>
      <SafeArea />
      {[0, 0, 0, 0, 0].map((item, index) => {
        return (
          <div key={`matches-${index}`} className={matchHistoryContainer}>
            <div className={matchHistoryContainerWin}>
              <div className={matchHistoryContainerWinner}>
                <p>승리</p>
              </div>
              <p>A팀</p>
            </div>
            <div className={matchHistoryContainerResult}>
              <p>2022.03.04</p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  margin: "0.5rem",
                }}
              >
                4:2
              </p>
            </div>
            <div className={matchHistoryContainerLose}>
              <div className={matchHistoryContainerLoser}>
                <p>패배</p>
              </div>
              <p>B팀</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
