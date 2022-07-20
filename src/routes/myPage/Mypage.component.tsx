import React, { useEffect, useState } from "react";
// library
import { Radar } from "react-chartjs-2";
// hooks
import { useRouter } from "next/router";
import { handleFile } from "@hooks/events";
// component
import Image, { ImageWithHeader } from "@components/image";
import Icon from "@components/icon";
import { PlaceholderWithJSX } from "@components/PlaceholderWithTitle";
// style
import Link from "next/link";
import Footer, { RegisterFooter } from "@components/footer";
import styles from "./Mypage.module.scss";
import { user } from "stores/user";
import UserProfile from "@components/userProfile";
import RouterButton from "@components/RouterButton";

const {
  upperBox,
  leftBox,
  leftBoxName,
  leftBoxNameBox,
  leftBoxNamePosition,
  leftBoxContact,
  leftBoxContactBox,
  rightBox,
  myImage,
  myInfo,
  defaultProfile,
  preview,
  aboutTeam,
  aboutTeamImage,
  scoreBoard,
  scoreBoardDetail,
  scoreBoardDetailBox,
  scoreBoardContentName,
  matchInfo,
  matchInfoContainer,
  matchInfoContainerIcon,
  rowDiv,
  matchHistoryContainer,
  matchHistoryContainerWin,
  matchHistoryContainerLose,
  matchHistoryContainerResult,
  matchHistoryContainerWinner,
  matchHistoryContainerLoser,
  tabs,
  tabsIcon,
  secession,
} = styles;

export default function Team(): JSX.Element {
  const router = useRouter();
  const { teamId, teamName } = router.query;
  const [data, setData] = useState([25, 50, 75, 91, 100]);
  const [previewURL, setPreviewURL] = useState("");
  console.log("fetch with teamId =", teamId, teamName);

  const getChartData = (canvas: any) => {
    const ctx = canvas.getContext("2d");

    const x = canvas.height * 0.65;
    const y = canvas.width * 0.25;
    const outerRadius = canvas.width / 3.2;

    const x1 = x * 1.49;
    const y1 = y * 0.87;

    const gradient = ctx.createRadialGradient(x, y, outerRadius, x1, y1, 1);
    gradient.addColorStop(1, "rgba(176, 193, 249, 0.2)");
    gradient.addColorStop(0, "rgba(75, 114, 241, 0.8)");
    return {
      labels: ["분위기 메이커", "미드필더", "골키퍼", "수비수", "공격수"],
      datasets: [
        {
          label: "포지션 점수",
          data: data,
          borderWidth: 1,
          backgroundColor: gradient,
          borderColor: "#4B71EF",
          //라인 스무스하게 바꿔주는 속성
          lineTension: 0,
          pointBackgroundColor: "#4B72F1",
          pointBorderWidth: "2",
        },
        {
          data: [0],
          borderWidth: 1,
          backgroundColor: gradient,
          borderColor: "#4B71EF",
          //라인 스무스하게 바꿔주는 속성
          lineTension: 0,
          pointBackgroundColor: "#4B72F1",
          pointBorderWidth: "2",
        },
      ],
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      beginAtZero: true,
      padding: {
        right: 35,
        bottom: 60,
      },
    },
    scale: {
      gridLines: {
        circular: true,
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 100,
        stepSize: 10,
        maxTicksLimit: 100,
        display: false,
      },
      pointLabels: {
        fontSize: 12,
        fontColor: "#4B72F1",
      },
    },
  };

  //state
  const [possible, setPossible] = useState<boolean>();
  const [recruitMember, setRecruitMember] = useState<boolean>();
  const [isCaptain, setIsCaptain] = useState<boolean>(true);

  //hooks
  const link = {
    pathname: "/team/[teamName]/matches",
    query: { teamId: teamId, teamName: teamName },
    as: "/team/[teamName]/matches",
  };

  const captainHandler = () => {
    console.log("if this team's captain");
  };

  useEffect(captainHandler, []);

  return (
    <>
      <main className={aboutTeam}>
        <div className={upperBox}>
          <div className={myInfo}>
            <div className={leftBox}>
              <div className={leftBoxName}>
                <div className={leftBoxNameBox}>닉네임</div>
                <div className={leftBoxNamePosition}>#미드필더</div>
              </div>
              <div className={leftBoxContact}>
                <div className={leftBoxContactBox}>
                  <Icon asset="Chat"></Icon>kakaotalk
                </div>
                <hr></hr>
                <div className={leftBoxContactBox}>
                  <Icon asset="Device"></Icon>01012345678
                </div>
              </div>
            </div>
            <div className={rightBox}>
              <div className={myImage}>
                <label htmlFor="ex_file">
                  <Icon asset="Pen"></Icon>
                </label>
                {previewURL !== "" ? (
                  <img className={preview} src={previewURL}></img>
                ) : (
                  <div className={defaultProfile}>
                    <Icon asset="Person"></Icon>
                  </div>
                )}
                <input
                  type="file"
                  id="ex_file"
                  accept="image/jpg,impge/png,image/jpeg,image/gif"
                  onChange={(e) => handleFile(e, setPreviewURL)}
                />
              </div>
            </div>
          </div>
          <div className={scoreBoard}>
            <div className={scoreBoardContentName}>
              <h5>MVP</h5>
              <h5>팀 우승</h5>
              <h5>경기 참여</h5>
            </div>
            <div className={scoreBoardDetail}>
              <div
                className={scoreBoardDetailBox}
                style={{ borderRight: "1px solid" }}
              >
                <Icon asset="Crown"></Icon>
                <p>7회</p>
              </div>
              <div
                className={scoreBoardDetailBox}
                style={{ borderRight: "1px solid" }}
              >
                <Icon asset="Crown"></Icon>
                <p>28회</p>
              </div>
              <div className={scoreBoardDetailBox}>
                <Icon asset="Crown"></Icon>
                <p>90회</p>
              </div>
            </div>
          </div>
        </div>

        <div className={matchInfo}>
          <h3>포지션 점수</h3>
          <hr />
          <div>
            <Radar
              data={(canvas: any) => getChartData(canvas)}
              options={options}
            />
          </div>
        </div>

        <Link
          href={
            {
              // pathname: "/team/[teamName]/members",
              // query: { teamId: 30, teamName: teamName },
            }
          }
          // as="/team/[teamName]/members"
        >
          <div className={tabs}>
            <p>경기 히스토리</p>
            <Icon asset="Right-Arrow" className={tabsIcon} />
          </div>
        </Link>
        <Link
          href={
            {
              // pathname: "/team/[teamName]/schedule",
              // query: { teamId: teamId, teamName: teamName },
            }
          }
          // as="/team/[teamName]/schedule"
        >
          <div className={tabs}>
            <p>소속&신청한 팀</p>
            <Icon asset="Right-Arrow" className={tabsIcon} />
          </div>
        </Link>

        <RouterButton bigRound mine>
          수정하기
        </RouterButton>

        <div className={secession}>
          <p>회원 탈퇴하기</p>
        </div>
      </main>
    </>
  );
}
/**
 *
 * @ToDo fetch with team id
 * params: teamname, 팀 소개, 팀 이미지
 *
 */
