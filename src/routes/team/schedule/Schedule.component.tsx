import React from "react";
// component
import Icon from "@components/icon";
import SafeArea from "@components/safeArea";
// types
import { IMatches, ISchedules } from "@pages/team/[teamName]/schedule";
// style
import styles from "./Schedule.module.scss";
import Link from "next/link";

const { scheduleCard, scheduleCardContents, scheduleCardIcon, dDay, dDayIcon } =
  styles;

export default function Schedule(props: ISchedules): JSX.Element {
  const { data, teamId, teamName } = props;

  const ScheduleMatches = ({
    matchId,
    teamId,
    isCaptain,
    opposingTeamId,
    opposingTeamName,
    opposingTeamMemberCount,
    opposingTeamPoint,
    opposingTeamWinRate,
    opposingTeamTotalGameCount,
    opposingTeamWinCount,
    opposingTeamDrawCount,
    opposingTeamLoseCount,
    contact,
    phone,
    matchDate,
    matchLocation,
    createdDate,
    modifiedDate,
    matchStatus,
    dday,
  }: IMatches): JSX.Element => (
    <Link
      href={{
        pathname: `/myteam/match`,
        query: { teamId: teamId, teamName: teamName, matchId },
      }}
    >
      <div className={scheduleCard}>
        <div className={scheduleCardContents}>
          <h2>{opposingTeamName}</h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon asset="Location" className={scheduleCardIcon} />
            <p>위치</p>
            <p>|</p>
            <p>{matchLocation}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon asset="CheckBox" className={scheduleCardIcon} />
            <p>경기 일자</p>
            <p>|</p>
            <p>{matchDate}</p>
            <div className={dDay}>
              <p>D-{dday}</p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "50%",
              justifyContent: "center",
              alignContent: "center",
              borderRight: "1px solid #f4f4f4",
            }}
          >
            <Icon asset="CheckBox" className={dDayIcon} />
            <p>{contact}</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "50%",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Icon asset="Phone" className={dDayIcon} />
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div>
      <SafeArea />
      {/** @map scheduleMatches */}
      {data.map((match, index) => (
        <div key={`match-${index}`} style={{ padding: "1rem" }}>
          <ScheduleMatches {...match} />
        </div>
      ))}
    </div>
  );
}
