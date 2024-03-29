import React, { useEffect, useState } from "react";
// library
import { Radar } from "react-chartjs-2";
// hooks
import Link from "next/link";
import router from "next/router";
import { handleFile } from "@hooks/events";
import { makeRequest } from "services/makeRequest";
// component
import Icon from "@components/icon";
import RouterButton from "@components/RouterButton";
import { RegisterFooter } from "@components/footer";
// style
import styles from "./Mypage.module.scss";
import { browserStorage } from "utils/browser";

type PageProps = {
  data?: any;
  decodedData?: any;
};

type IInfo = {
  nickname: string;
  profileImageUrl: string;
  contact: string;
  phone: number;
  position: string;
  mvpPoint: number;
  totalMyTeamWinCount: number;
  totalMyTeamGameCount: number;
  strikerPoint: number;
  midfielderPoint: number;
  defenderPoint: number;
  goalkeeperPoint: number;
  charmingPoint: number;
};

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
  scoreBoard,
  scoreBoardDetail,
  scoreBoardDetailBox,
  scoreBoardDetailBoxTitle,
  scoreBoardDetailBoxContent,
  scoreBoardContentName,
  matchInfo,
  tabs,
  tabsIcon,
  secession,
  buttonBox,
} = styles;

export default function MyPage(props: PageProps): JSX.Element {
  const [file, setFile] = useState({});
  const [personalInfo, setPersonalInfo] = useState({
    nickname: "",
    profileImageUrl: "",
    contact: "",
    phone: 0,
    position: "",
    mvpPoint: 0,
    totalMyTeamWinCount: 0,
    totalMyTeamGameCount: 0,
    strikerPoint: 0,
    midfielderPoint: 0,
    defenderPoint: 0,
    goalkeeperPoint: 0,
    charmingPoint: 0,
  });

  const [data, setData] = useState([25, 50, 75, 91, 100]);
  const [previewURL, setPreviewURL] = useState(personalInfo?.profileImageUrl);

  const getChartData = (canvas: any) => {
    const ctx = canvas.getContext("2d");

    const x = canvas.height * 1;
    const y = canvas.width * 1;
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
    },
    scale: {
      gridLines: {
        circular: true,
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 20,
        stepSize: 2,
        maxTicksLimit: 20,
        display: false,
      },
      pointLabels: {
        fontSize: 12,
        fontColor: "#4B72F1",
      },
      scaleLabel: {
        display: true,
      },
    },
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem: any) {
          return tooltipItem.Label;
        },
      },
    },
  };

  const myId = props?.data?.decodedData?.memberId;
  useEffect(() => {
    makeRequest({
      endpoint: `home/members/${myId}`,
      // endpoint: `home/members/12`,
      method: "GET",
      auth: true,
    })
      .then((res: IInfo) => {
        setData([
          res?.charmingPoint,
          res?.midfielderPoint,
          res?.goalkeeperPoint,
          res?.defenderPoint,
          res?.strikerPoint,
        ]),
          setPersonalInfo(res);
      })
      .catch((error: any) => console.log(error));
  }, []);

  return (
    <>
      <main className={aboutTeam}>
        <div className={upperBox}>
          <div className={myInfo}>
            <div className={leftBox}>
              <div className={leftBoxName}>
                <div className={leftBoxNameBox}>{personalInfo?.nickname}</div>
                <div className={leftBoxNamePosition}>
                  #{personalInfo?.position}
                </div>
              </div>
              <div className={leftBoxContact}>
                <div className={leftBoxContactBox}>
                  <Icon asset="Chat"></Icon>
                  {personalInfo?.contact}
                </div>
                <hr></hr>
                <div className={leftBoxContactBox}>
                  <Icon asset="Device"></Icon>
                  {personalInfo?.phone}
                </div>
              </div>
            </div>
            <div className={rightBox}>
              <div className={myImage}>
                <label htmlFor="ex_file">
                  <Icon asset="Pen"></Icon>
                </label>
                {personalInfo?.profileImageUrl !== "" ? (
                  <img
                    className={preview}
                    src={personalInfo?.profileImageUrl}
                  ></img>
                ) : (
                  <div className={defaultProfile}>
                    <Icon asset="Person"></Icon>
                  </div>
                )}
                <input
                  type="file"
                  id="ex_file"
                  accept="image/jpg,impge/png,image/jpeg,image/gif"
                  onChange={(e) =>
                    handleFile(e, setPreviewURL).then((res: any) => {
                      const formData = new FormData();
                      formData.append("profileImageFile", res);
                      setFile(formData);
                      makeRequest({
                        endpoint: "home/members/information/profileimage",
                        method: "PATCH",
                        params: formData,
                        auth: true,
                        isFile: true,
                      }).then((res: any) => {
                        res.status === 200
                          ? (window.alert(
                              "프로필 이미지 수정이 완료되었습니다."
                            ),
                            router.reload())
                          : window.alert(
                              "이미지 등록에 실패했습니다. 잠시 후 다시 시도해주세요."
                            );
                      });
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className={scoreBoard}>
            <div className={scoreBoardDetail}>
              <div
                className={scoreBoardDetailBox}
                style={{ borderRight: "1px solid rgba(190, 190, 190, 1)" }}
              >
                <div className={scoreBoardDetailBoxTitle}>
                  <p>MVP</p>
                </div>
                <div className={scoreBoardDetailBoxContent}>
                  <div>
                    <p>
                      <strong>{personalInfo?.mvpPoint}</strong>회
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={scoreBoardDetailBox}
                style={{ borderRight: "1px solid rgba(190, 190, 190, 1)" }}
              >
                <div className={scoreBoardDetailBoxTitle}>
                  <p>팀 우승</p>
                </div>
                <div className={scoreBoardDetailBoxContent}>
                  <p>
                    <strong>{personalInfo?.totalMyTeamWinCount}</strong>회
                  </p>
                </div>
              </div>
              <div className={scoreBoardDetailBox}>
                <div className={scoreBoardDetailBoxTitle}>
                  <p>경기 참여</p>
                </div>
                <div className={scoreBoardDetailBoxContent}>
                  <p>
                    <strong>{personalInfo?.totalMyTeamGameCount}</strong>회
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={matchInfo}>
          <h3>포지션 점수</h3>
          <div>
            <Radar
              data={(canvas: any) => getChartData(canvas)}
              options={options}
            />
          </div>
        </div>

        {/* <Link
          href={
            {
              pathname: "/team/[teamName]/members",
              query: { teamId: 30, teamName: teamName },
            }
          }
          as="/team/[teamName]/members"
        > */}
        <div
          className={tabs}
          onClick={() => {
            window.alert("커밍쑨! 기능이 준비중입니다 :)");
          }}
        >
          <p>경기 히스토리</p>
          <Icon asset="Right-Arrow" className={tabsIcon} />
        </div>
        {/* </Link> */}
        <Link
          href={{
            pathname: "/myteam",
          }}
        >
          <div className={tabs}>
            <p>소속&신청한 팀</p>
            <Icon asset="Right-Arrow" className={tabsIcon} />
          </div>
        </Link>

        <div className={buttonBox}>
          <RegisterFooter
            content="로그아웃"
            handleClick={() => {
              browserStorage.eraseCookie("token"),
                router.replace("/introduction");
            }}
            activeStyle
          ></RegisterFooter>
        </div>

        <div className={buttonBox}>
          <RegisterFooter
            content="수정하기"
            handleClick={() => {
              // router.push('/mypage/edit')
            }}
            activeStyle
          ></RegisterFooter>
        </div>

        <div className={secession}>
          <p
            onClick={() => {
              if (
                window.confirm(
                  "정말 탈퇴하시겠습니까? 탈퇴 후 회원 정보는 복구되지 않습니다."
                )
              ) {
                makeRequest({
                  endpoint: "home/members/secession",
                  method: "PATCH",
                  auth: true,
                });
                router.replace("/introduction");
              }
              return;
            }}
          >
            회원 탈퇴하기
          </p>
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
