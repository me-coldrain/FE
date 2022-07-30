import SafeArea from "@components/safeArea";
import { IPropsHistories } from "@pages/team/[teamName]/matches";
import Link from "next/link";
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

type IMatch = {
  historyId: number;
  matchDate: string;
  opposingTeam: {
    name: string;
    record: string;
    score: number;
  };
  team: {
    name: string;
    record: string;
    score: number;
  };
};

type IMatches = {
  query: { teamId: string; teamName: string };
  data: IMatch[];
};

export default function Matches({ query, data }: IPropsHistories): JSX.Element {
  const { teamId, teamName } = query;

  return (
    <div className={container}>
      <SafeArea />
      {data?.map((item, index) => {
        return (
          <Link
            key={`matches-${index}`}
            href={{
              pathname: `/team/${teamName}/matches/${item.historyId}`,
              query: {
                teamId: teamId,
                teamName: teamName,
                historyId: item.historyId,
              },
            }}
          >
            <div className={matchHistoryContainer}>
              <div className={matchHistoryContainerWin}>
                <div className={matchHistoryContainerWinner}>
                  <p>승리</p>
                </div>
                <p>
                  {item.team.record === "승리"
                    ? item.team.name
                    : item.opposingTeam.name}
                </p>
              </div>
              <div className={matchHistoryContainerResult}>
                <p>{item.matchDate.split("T")[0]}</p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    margin: "0.5rem",
                  }}
                >
                  {item.team.record === "승리"
                    ? `${item.team.score} : ${item.opposingTeam.score}`
                    : `${item.opposingTeam.score} : ${item.team.score}`}
                </p>
              </div>
              <div className={matchHistoryContainerLose}>
                <div className={matchHistoryContainerLoser}>
                  <p>패배</p>
                </div>
                <p>
                  {item.team.record === "승리"
                    ? item.opposingTeam.name
                    : item.team.name}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
