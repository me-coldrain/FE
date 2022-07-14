import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleFile } from "@hooks/events";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";
import styles from "./Info.module.scss";

const { container, inputBox, filebox, image, close, informationBox } = styles;

export default function info(): JSX.Element {
  // const dispatch = useDispatch();
  const [previewURL, setPreviewURL] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamInfo, setTeamInfo] = useState("");

  const handleName = (e: any) => {
    setTeamName(e.target.value);
  };

  const handleInfo = (e: any) => {
    setTeamInfo(e.target.value);
  };

  return (
    <>
      <main>
        <section>
          <Progressbar size="25%"></Progressbar>
          <Back></Back>
        </section>
        <h3>팀 소개</h3>
        <div className={inputBox}>
          <label htmlFor="name">팀 이름을 적어주세요.</label>
          <input id="name" type="text" onChange={(e) => handleName(e)}></input>
        </div>
        <p>팀 소개를 적어주세요.</p>
        {previewURL !== "" ? (
          <div className={container}>
            <div className={image}>
              <img src={previewURL}></img>
              <span
                className={close}
                onClick={() => {
                  setPreviewURL("");
                }}
              >
                x
              </span>
            </div>
            <div className={informationBox}>
              {teamInfo === "" ? (
                <label htmlFor="information">
                  소개를 적어주세요
                  <span>150</span>
                </label>
              ) : (
                <></>
              )}
              <textarea
                id="information"
                onChange={(e) => handleInfo(e)}
              ></textarea>
            </div>
          </div>
        ) : (
          <div className={container}>
            <div className={filebox}>
              <label htmlFor="ex_file">사진 추가</label>
              <input
                type="file"
                id="ex_file"
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                onChange={(e) => handleFile(e, setPreviewURL)}
              />
            </div>
            <div className={informationBox}>
              {teamInfo === "" ? (
                <label htmlFor="information">
                  소개를 적어주세요
                  <span>150</span>
                </label>
              ) : (
                <></>
              )}
              <textarea
                id="information"
                onChange={(e) => handleInfo(e)}
              ></textarea>
            </div>
          </div>
        )}
        <RouterButton url="/founding/location" bigRound nickname={teamName}>
          다음
        </RouterButton>
      </main>
    </>
  );
}
