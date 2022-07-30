import React, { useEffect, useState } from "react";
// hooks
import { useSelector } from "react-redux";
import { makeRequest } from "services/makeRequest";
import { useRouter } from "next/router";
// types
import { RootState } from "stores";
import { MemberToPlay } from "stores/formation";
// components
import UserProfile, { PositionProfile } from "@components/userProfile";
import Icon from "@components/icon/Icon.component";
import { RegisterFooter } from "@components/footer";
// styles
import styles from "../../team/matches/history/History.module.scss";
import player from "routes/player";

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

export default function FormationDetail(): JSX.Element {
  const router = useRouter();
  const { teamId, matchId } = router.query;
  const formations = useSelector((state: RootState) => state.formations);

  const [players, setPlayers] = useState<MemberToPlay[]>([
    {
      memberId: 3,
      position: "striker",
      anonymous: true,
      memberProfileUrl: "string",
      nickName: "string",
    },
  ]);
  const saveFormation = async () => {
    const params = players?.forEach((player) => {
      delete player["memberProfileUrl"];
      delete player["nickName"];
    });
    await makeRequest({
      endpoint: `teams/${teamId}/matches/${matchId}/formation`,
      method: "POST",
      params,
      auth: true,
    }).then(() =>
      router.push({
        pathname: `/team/[teamName]`,
        query: {
          status: true,
          teamName: router.query.teamName,
          teamId: teamId,
        },
      })
    );
  };

  return (
    <main>
      <h1>포메이션 등록</h1>
      <h5>드래그를 통해 포메이션을 완성해주세요.</h5>

      <div>
        <h2>포메이션</h2>
        <div className={formation}>
          <Icon asset={"Soccer-Field"} className={formationField} />
          <div className={formationStriker}>
            {formations
              .filter((element, index) => element.position === "striker")
              .map((member, index) => (
                <PositionProfile
                  key={`striker-${index}`}
                  src={member.memberProfileUrl}
                  nickname={member.nickName}
                  position="striker"
                />
              ))}
            {/* {data.team.fieldMembers.striker.map((member, index) => (
              <PositionProfile
                key={`striker-${index}`}
                src={member.memberProfileUrl}
                nickname={member.nickName}
                position="striker"
              />
            ))} */}
          </div>
          <div className={formationMidFielder}>
            {formations
              .filter((element, index) => element.position === "midfielder")
              .map((member, index) => (
                <PositionProfile
                  key={`striker-${index}`}
                  src={member.memberProfileUrl}
                  nickname={member.nickName}
                  position="striker"
                />
              ))}
            {/* {data.team.fieldMembers.midfielder.map((member, index) => (
              <PositionProfile
                key={`midfielder-${index}`}
                src={member.memberProfileUrl}
                nickname={member.nickName}
                position="midfielder"
              />
            ))} */}
          </div>
          <div className={formationDefender}>
            {formations
              .filter((element, index) => element.position === "defender")
              .map((member, index) => (
                <PositionProfile
                  key={`defender-${index}`}
                  src={member.memberProfileUrl}
                  nickname={member.nickName}
                  position="defender"
                />
              ))}
            {/* {data.team.fieldMembers.defender.map((member, index) => (
              <PositionProfile
                key={`defender-${index}`}
                src={member.memberProfileUrl}
                nickname={member.nickName}
                position="defender"
              />
            ))} */}
          </div>
          <div className={formationGoalKeeper}>
            {formations
              .filter((element, index) => element.position === "goalkeeper")
              .map((member, index) => (
                <PositionProfile
                  key={`goalkeeper-${index}`}
                  src={member.memberProfileUrl}
                  nickname={member.nickName}
                  position="goalkeeper"
                />
              ))}
            {/* {data.team.fieldMembers.goalkeeper.map((member, index) => (
              <PositionProfile
                key={`goalkeeper-${index}`}
                src={member.memberProfileUrl}
                nickname={member.nickName}
                position="goalkeeper"
              />
            ))} */}
          </div>
        </div>
        {/* <div className={substituteBox}>
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
        </div> */}
      </div>
      <RegisterFooter
        content="저장하기"
        handleClick={saveFormation}
        activeStyle={true}
      />
    </main>
  );
}
