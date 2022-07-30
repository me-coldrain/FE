import Icon from "@components/icon";
import UserProfile, { PositionProfile } from "@components/userProfile";
import { ITeamDetailProps } from "@pages/team/[teamName]/matches/[historyId]";
import React from "react";
import importedStyles from "../Matches.module.scss";
import styles from "./History.module.scss";

const {
  matchHistoryContainer,
  matchHistoryContainerWin,
  matchHistoryContainerLose,
  matchHistoryContainerResult,
  matchHistoryContainerWinner,
  matchHistoryContainerLoser,
} = importedStyles;

const {
  scorers,
  scorersBox,
  scorersWin,
  scorersIcon,
  scorersLose,
  formation,
  formationField,
  formationStriker,
  formationMidFielder,
  formationDefender,
  formationGoalKeeper,
  substitute,
  substituteBox,
  horizontalContainer,
} = styles;

export default function History({
  query,
  data,
}: ITeamDetailProps): JSX.Element {
  return (
    <main>
      <div className={matchHistoryContainer} style={{ marginBottom: 0 }}>
        <div className={matchHistoryContainerWin}>
          <div className={matchHistoryContainerWinner}>
            <p>승리</p>
          </div>
          <p>
            {data.team.record === "승리"
              ? data.team.teamName
              : data.opposingTeam.teamName}
          </p>
        </div>
        <div className={matchHistoryContainerResult}>
          <p>{data.matchDate.split("T")[0]}</p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              margin: "0.5rem",
            }}
          >
            {data.team.record === "승리"
              ? `${data.team.score} : ${data.opposingTeam.score} `
              : `${data.opposingTeam.score} : ${data.team.score}`}
          </p>
        </div>
        <div className={matchHistoryContainerLose}>
          <div className={matchHistoryContainerLoser}>
            <p>패배</p>
          </div>
          <p>
            {data.team.record === "승리"
              ? data.opposingTeam.teamName
              : data.team.teamName}
          </p>
        </div>
      </div>
      <div className={scorers} style={{ marginBottom: "2rem" }}>
        <div className={scorersWin}>
          {data.team.record === "승리"
            ? data.team.scorer.map((score, index) => (
                <div key={`winner-score-${index}`} className={scorersBox}>
                  <Icon asset="Soccer-Ball" className={scorersIcon} />
                  <p>{score}</p>
                </div>
              ))
            : data.opposingTeam.scorer.map((score, index) => (
                <div key={`winner-score-${index}`} className={scorersBox}>
                  <Icon asset="Soccer-Ball" className={scorersIcon} />
                  <p>{score}</p>
                </div>
              ))}
        </div>
        {data.team.score === 0 || data.opposingTeam.score === 0 ? (
          <></>
        ) : (
          <div className={scorersIcon}>
            <Icon asset="Down-Arrow" />
          </div>
        )}
        <div className={scorersLose}>
          {data.team.record === "승리"
            ? data.opposingTeam.scorer.map((score, index) => (
                <div className={scorersBox} key={`loser-score-${index}`}>
                  <Icon asset="Soccer-Ball" className={scorersIcon} />
                  <p>{score}</p>
                </div>
              ))
            : data.team.scorer.map((score, index) => (
                <div key={`loser-score-${index}`} className={scorersBox}>
                  <Icon asset="Soccer-Ball" className={scorersIcon} />
                  <p>{score}</p>
                </div>
              ))}
        </div>
      </div>

      <div>
        <h2>포메이션</h2>
        <div className={formation}>
          <Icon asset={"Soccer-Field"} className={formationField} />
          <div className={formationStriker}>
            {data.team.fieldMembers.striker.map((member, index) => (
              <PositionProfile
                key={`striker-${index}`}
                src={member.memberProfileUrl}
                nickname={member.nickName}
                position="striker"
              />
            ))}
          </div>
          <div className={formationMidFielder}>
            {data.team.fieldMembers.midfielder.map((member, index) => (
              <PositionProfile
                key={`midfielder-${index}`}
                src={member.memberProfileUrl}
                nickname={member.nickName}
                position="midfielder"
              />
            ))}
          </div>
          <div className={formationDefender}>
            {data.team.fieldMembers.defender.map((member, index) => (
              <PositionProfile
                key={`defender-${index}`}
                src={member.memberProfileUrl}
                nickname={member.nickName}
                position="defender"
              />
            ))}
          </div>
          <div className={formationGoalKeeper}>
            {data.team.fieldMembers.goalkeeper.map((member, index) => (
              <PositionProfile
                key={`goalkeeper-${index}`}
                src={member.memberProfileUrl}
                nickname={member.nickName}
                position="goalkeeper"
              />
            ))}
          </div>
        </div>
        <div className={substituteBox}>
          {data.team.substituteMembers.striker.map((member, index) => (
            <div key={`substitute-striker-${index}`} className={substitute}>
              <h3 style={{ color: "#F14B3B" }}>FW</h3>
              <h3>{member.nickName}</h3>
            </div>
          ))}
          {data.team.substituteMembers.midfielder.map((member, index) => (
            <div key={`substitute-midfielder-${index}`} className={substitute}>
              <h3 style={{ color: "#F14B3B" }}>MF</h3>
              <h3>{member.nickName}</h3>
            </div>
          ))}
          {data.team.substituteMembers.defender.map((member, index) => (
            <div key={`substitute-defender-${index}`} className={substitute}>
              <h3 style={{ color: "#F14B3B" }}>DF</h3>
              <h3>{member.nickName}</h3>
            </div>
          ))}
          {data.team.substituteMembers.goalkeeper.map((member, index) => (
            <div key={`substitute-goalkeeper-${index}`} className={substitute}>
              <h3 style={{ color: "#F14B3B" }}>FW</h3>
              <h3>{member.nickName}</h3>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>포메이션</h2>
        <div className={formation}>
          <Icon asset={"Soccer-Field"} className={formationField} />
          <div className={formationStriker}>
            {data.opposingTeam.fieldMembers.striker.map((member, index) => (
              <PositionProfile
                key={`striker-${index}`}
                src={member.memberProfileUrl}
                nickname={member.nickName}
                position="striker"
              />
            ))}
          </div>
          <div className={formationMidFielder}>
            {data.opposingTeam.fieldMembers.midfielder.map((member, index) => (
              <PositionProfile
                key={`midfielder-${index}`}
                src={member.memberProfileUrl}
                nickname={member.nickName}
                position="midfielder"
              />
            ))}
          </div>
          <div className={formationDefender}>
            {data.opposingTeam.fieldMembers.defender.map((member, index) => (
              <PositionProfile
                key={`defender-${index}`}
                src={member.memberProfileUrl}
                nickname={member.nickName}
                position="defender"
              />
            ))}
          </div>
          <div className={formationGoalKeeper}>
            {data.opposingTeam.fieldMembers.goalkeeper.map((member, index) => (
              <PositionProfile
                key={`goalkeeper-${index}`}
                src={member.memberProfileUrl}
                nickname={member.nickName}
                position="goalkeeper"
              />
            ))}
          </div>
        </div>
        <div className={substituteBox}>
          {data.opposingTeam.substituteMembers.striker.map((member, index) => (
            <div key={`substitute-striker-${index}`} className={substitute}>
              <h3 style={{ color: "#F14B3B" }}>FW</h3>
              <h3>{member.nickName}</h3>
            </div>
          ))}
          {data.opposingTeam.substituteMembers.midfielder.map(
            (member, index) => (
              <div
                key={`substitute-midfielder-${index}`}
                className={substitute}
              >
                <h3 style={{ color: "#F14B3B" }}>MF</h3>
                <h3>{member.nickName}</h3>
              </div>
            )
          )}
          {data.opposingTeam.substituteMembers.defender.map((member, index) => (
            <div key={`substitute-defender-${index}`} className={substitute}>
              <h3 style={{ color: "#F14B3B" }}>DF</h3>
              <h3>{member.nickName}</h3>
            </div>
          ))}
          {data.opposingTeam.substituteMembers.goalkeeper.map(
            (member, index) => (
              <div
                key={`substitute-goalkeeper-${index}`}
                className={substitute}
              >
                <h3 style={{ color: "#F14B3B" }}>FW</h3>
                <h3>{member.nickName}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}

/**
 *
 * @ToDo
 * 1. horizontal scroll
 * 2. link to player profile
 */
