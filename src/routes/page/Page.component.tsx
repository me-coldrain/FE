import React, { useEffect, useState } from "react";
import Head from "next/head";
import Landing from "routes/page/landing";
// component
import Icon, { IconPng } from "@components/icon";
import { ButtonRound } from "@components/button";
import { CenterModal } from "@components/modal";
import ButtonForSelect from "@components/buttonForSelect";
// hooks
import { usePageData, usePageDetails } from "hooks/page";
import { injectClassNames } from "utils/css";
import router from "next/router";
import Link from "next/link";
// utils
import { browserStorage } from "utils/browser";
import { makeRequest } from "services/makeRequest";

import styles from "./Page.module.scss";
interface Teams {
  createdDate: string;
  drawCount: number;
  headCount: number;
  loseCount: number;
  mainArea: string;
  match: boolean;
  modifiedDate: string;
  preferredArea: string;
  recruit: boolean;
  teamId: number;
  teamName: string;
  time: string[];
  totalGameCount: number;
  weekdays: string[];
  winCount: number;
  winRate: number;
}

const {
  page,
  pageLanding,
  pageContent,
  placeholder,
  teamCard,
  teamCardFlex,
  teamCardWinRate,
  teamCardInfo,
  teamCardIcon,
  safeArea,
  gettingMembers,
} = styles;

type PageProps = {
  isLanding?: boolean;
  data?: {
    content: Teams[];
  };
};

export const addTitleTags = (title: string): JSX.Element => {
  if (!title) {
    return <></>;
  }

  return (
    <>
      <title>{title}</title>
      <meta name="og:title" content={title} />
    </>
  );
};

export const addDescriptionTag = (description: string): JSX.Element => {
  if (!description) {
    return <></>;
  }

  return (
    <meta name="description" property="og:description" content={description} />
  );
};

const Page = (props: PageProps): JSX.Element => {
  const { isLanding, data } = props;
  const { title = "", description = "" } = usePageDetails();

  const [teams, setTeams] = useState<Teams[]>([]);

  const classNames = injectClassNames(page, [pageLanding, isLanding]);

  const [homePage, setHomePage] = useState<boolean>(true);
  const [locationModal, setLocationModal] = useState<boolean>(false);
  const [daysModal, setDaysModal] = useState<boolean>(false);
  const [timeModal, setTimeModal] = useState<boolean>(false);
  const [winRateModal, setWinRateModal] = useState<boolean>(false);
  const [address, setAddress] = useState<string[]>([]);
  const addressList: string[] = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "대전광역시",
    "울산광역시",
    "인천광역시",
    "강원도",
    "경기도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주시",
  ];
  const [weekdays, setWeekdays] = useState<string[]>([]);
  const weekdaysList: string[] = [
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
    "SUN",
  ];
  const [time, setTime] = useState<string[]>([]);
  const ampm: string[] = ["am", "pm"];
  const [winRate, setWinRate] = useState<string>();
  const winRatesUp: string[] = [
    "10",
    "20",
    "30",
    "40",
    "50",
    "60",
    "70",
    "80",
    "90",
  ];

  // 로그인 되어있지 않을 시 온보딩페이지로 이동시킴
  useEffect(() => {
    if (homePage === true) {
      if (data) {
        const _teams: Teams[] = [];
        for (let i = 0; i < data.content.length; i++) {
          if (data?.content[i].match) {
            _teams.push(data.content[i]);
          }
        }
        setTeams(_teams);
      }
    } else {
      const _teams: Teams[] = [];
      if (data) {
        for (let i = 0; i < data.content.length; i++) {
          if (data?.content[i].recruit) {
            _teams.push(data.content[i]);
          }
        }
        setTeams(_teams);
      }
    }
  }, [homePage]);

  const handleLocationClick = (content: string) => {
    if (address?.includes(content)) {
      setAddress((prev) => prev?.filter((e) => e !== content));
      setLocationModal(false);
    } else {
      setAddress([content, ...address]);
      setLocationModal(false);
    }
  };

  console.log(teams);

  const handleWeekdayClick = (content: string) => {
    if (weekdays?.includes(content)) {
      setWeekdays((prev) => prev?.filter((e) => e !== content));
      setDaysModal(false);
    } else {
      setWeekdays([content, ...weekdays]);
      setDaysModal(false);
    }
  };

  const handleTimeClick = (content: string) => {
    if (time?.includes(content)) {
      setTime((prev) => prev?.filter((e) => e !== content));
      setTimeModal(false);
    } else {
      setTime([content, ...weekdays]);
      setTimeModal(false);
    }
  };

  const handleRateClick = (content: string) => {
    setWinRate(content);
  };

  const handleDataChange = async () => {
    await makeRequest({
      endpoint: `home/teams?address=${address}&weekdays=${weekdays}&time=${time}&winRate=${winRate}`,
      method: "GET",
      token: browserStorage.getCookie("token"),
    })
      .then((res: any) => setTeams(res.content))
      .catch((error: any) => console.log(error));
  };

  useEffect(() => {
    handleDataChange();
  }, [address, weekdays, time, winRate]);

  return (
    <>
      <Head>
        {addTitleTags(title)}
        {addDescriptionTag(description)}
        <meta name="robots" content="INDEX,FOLLOW" />
      </Head>
      <main className={classNames}>
        <CenterModal
          title="지역"
          show={locationModal}
          onClose={() => setLocationModal(false)}
        >
          {addressList.map((location, index) => (
            <div key={`address-${index}`}>
              <ButtonForSelect
                location={true}
                active={address?.includes(location) ? true : false}
                onClick={() => handleLocationClick(location)}
              >
                {location}
              </ButtonForSelect>
            </div>
          ))}
        </CenterModal>
        <CenterModal
          title="요일"
          show={daysModal}
          onClose={() => setDaysModal(false)}
        >
          {weekdaysList.map((weekday, index) => (
            <div key={`weekdays-${index}`}>
              <ButtonForSelect
                location={true}
                active={weekdays?.includes(weekday) ? true : false}
                onClick={() => handleWeekdayClick(weekday)}
              >
                {weekday}
              </ButtonForSelect>
            </div>
          ))}
        </CenterModal>
        <CenterModal
          title="시간"
          show={timeModal}
          onClose={() => setTimeModal(false)}
        >
          {ampm.map((hours, index) => (
            <div key={`times-${index}`}>
              <ButtonForSelect
                location={true}
                active={time?.includes(hours) ? true : false}
                onClick={() => handleTimeClick(hours)}
              >
                {hours}
              </ButtonForSelect>
            </div>
          ))}
        </CenterModal>
        <CenterModal
          title="승률"
          show={winRateModal}
          onClose={() => setWinRateModal(false)}
        >
          {winRatesUp.map((rate, index) => (
            <div key={`win-rate-${index}`}>
              <ButtonForSelect
                location={true}
                active={winRate === rate ? true : false}
                onClick={() => handleRateClick(rate)}
              >
                {rate + "%"}
              </ButtonForSelect>
            </div>
          ))}
        </CenterModal>
        {isLanding && (
          <Landing
            homePage={homePage}
            setHomePage={setHomePage}
            setLocationModal={setLocationModal}
            setDaysModal={setDaysModal}
            setTimeModal={setTimeModal}
            setWinRateModal={setWinRateModal}
          />
        )}
        <section>
          <div className={safeArea}>
            {teams?.map((item, index) => {
              return (
                <Link
                  key={`teamCard-${index}`}
                  href={{
                    pathname: "/team/[teamName]",
                    query: {
                      teamId: item.teamId,
                      teamName: item.teamName,
                      status: homePage,
                    },
                  }}
                >
                  <div className={teamCard}>
                    <div className={teamCardFlex}>
                      <h2>{item.teamName}</h2>
                      {index === 0 && homePage === true ? (
                        <IconPng asset={"First-place"} />
                      ) : null}
                    </div>
                    <div className={teamCardWinRate}>
                      <p>승률</p>
                      <h3>{item.winRate}%</h3>
                      <h3>|</h3>
                      <h3>
                        {item.totalGameCount}전 {item.winCount}승{" "}
                        {item.drawCount}무 {item.loseCount}패
                      </h3>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div className={teamCardInfo}>
                        <Icon asset="Location" className={teamCardIcon} />
                        <p>{item.mainArea}</p>
                      </div>
                      <div className={teamCardInfo}>
                        <Icon asset="Location" className={teamCardIcon} />

                        <p>
                          {item.preferredArea === "home"
                            ? "홈구장 선호"
                            : "어웨이 가능"}
                        </p>
                      </div>
                      <div className={teamCardInfo}>
                        <Icon asset="Calendar" className={teamCardIcon} />
                        {item.weekdays.map((weekday, index) => (
                          <p key={`weekday=${index}`}>{weekday + "."} </p>
                        ))}
                        {item.time.map((times, index) => (
                          <p key={`time-${index}`}>{times + "/"}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className={gettingMembers}>
            <ButtonRound
              handleClick={() => {
                router.push("/founding/info");
              }}
              content="팀등록"
              length="round"
            />
          </div>
        </section>
      </main>
    </>
  );
};

/**
 *
 * @ToDo 무한 스크롤 적용
 *
 * 2. what is recruit && match?
 */

export default Page;
