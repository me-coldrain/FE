import Image from "@components/image";
import SafeArea from "@components/safeArea";
import React, { useEffect } from "react";

import styles from "./Members.module.scss";

const {
  title,
  category,
  memberCard,
  memberCardImage,
  mvpPointContainer,
  personalPoint,
} = styles;

type IMember = {
  memberId: number;
  profileImageUrl: string;
  nickname: string;
  mvpPoint: number;
  positionPoint: string;
};

type ICaptain = {
  memberId: number;
  profileImageUrl: string;
  nickname: string;
  mvpPoint: number;
  position: string;
  strikerPoint: number;
  midfielderPoint: number;
  defenderPoint: number;
  goalkeeperPoint: number;
};

type IMembers = {
  data: {
    teamCaptain: boolean;
    captain: ICaptain;
    striker: IMember[];
    midfielder: IMember[];
    defender: IMember[];
    goalkeeper: IMember[];
  };
};

export default function Members({ data }: IMembers): JSX.Element {
  const { captain } = data;

  const MemberCard = ({
    memberId,
    profileImageUrl,
    nickname,
    mvpPoint,
    positionPoint,
  }: IMember): JSX.Element => {
    return (
      <>
        <div style={{ display: "flex", width: "100%" }}>
          <div className={memberCard}>
            <Image
              src={
                profileImageUrl ||
                "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
              }
              className={memberCardImage}
            />
            <p>{nickname}</p>
          </div>
          <div className={mvpPointContainer}>
            <p>{mvpPoint}</p>
          </div>
          <div className={personalPoint}>
            <p>{positionPoint}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <SafeArea />
        <div style={{ padding: "0 1rem" }}>
          <div className={title}>
            <p style={{ width: "60%" }}>포지션</p>
            <p style={{ width: "20%" }}>MVP</p>
            <p style={{ width: "20%" }}>개인 점수</p>
          </div>
        </div>
        <div className={category}>
          <p>주장</p>
          {/* from here */}

          <div style={{ display: "flex", width: "100%" }}>
            <div className={memberCard}>
              <Image
                src={
                  captain.profileImageUrl ||
                  "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
                }
                className={memberCardImage}
              />
              <p>
                {captain.nickname}({captain.position})
              </p>
            </div>
            <div className={mvpPointContainer}>
              <p>{captain.mvpPoint}</p>
            </div>
            <div className={personalPoint}>
              <p>
                {captain.strikerPoint +
                  captain.midfielderPoint +
                  captain.defenderPoint +
                  captain.goalkeeperPoint}
              </p>
            </div>
          </div>
          {/* to here */}
        </div>
        <div className={category}>
          <p>공격수</p>
          {data.striker.map((member, index) => (
            <MemberCard key={`striker-${index}`} {...member} />
          ))}
        </div>
        <div className={category}>
          <p>수비수</p>
          {data.defender.map((member, index) => (
            <MemberCard key={`striker-${index}`} {...member} />
          ))}
        </div>
        <div className={category}>
          <p>미드필더</p>
          {data.midfielder.map((member, index) => (
            <MemberCard key={`striker-${index}`} {...member} />
          ))}
        </div>
        <div className={category}>
          <p>골키퍼</p>
          {data.goalkeeper.map((member, index) => (
            <MemberCard key={`striker-${index}`} {...member} />
          ))}
        </div>
      </div>
    </>
  );
}
