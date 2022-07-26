import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleFile } from "@hooks/events";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";
import Input from "@components/Input";
import Icon from "@components/icon";
import styles from "./Info.module.scss";

const { container, inputBox, filebox, image, close, informationBox } = styles;

export default function info(): JSX.Element {
  // const dispatch = useDispatch();
  const [previewURL, setPreviewURL] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamInfo, setTeamInfo] = useState("");
  const [file, setFile] = useState<File | null>(null);

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
        <h2>팀 소개</h2>
        <div className={inputBox}>
          <label htmlFor="name">팀 이름을 적어주세요.(변경불가)</label>
          <Input
            id="name"
            type="text"
            onChange={(e: any) => handleName(e)}
            value={teamName || ""}
            signup
            placeholder="최대 12글자까지 가능합니다"
          ></Input>
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
              <textarea
                id="information"
                onChange={(e) => handleInfo(e)}
                placeholder="팀에 대한 소개를 적어주세요 (100자)"
              ></textarea>
            </div>
          </div>
        ) : (
          <div className={container}>
            <div className={filebox}>
              <label htmlFor="ex_file">
                <Icon asset="Photo"></Icon>
                <p>사진 추가</p>
              </label>
              <input
                type="file"
                // id="ex_file"
                accept="image/jpg, image/png, image/jpeg, image/gif"
                onChange={(e) => setFile(handleFile(e, setPreviewURL))}
              />
            </div>
            <div className={informationBox}>
              <textarea
                id="information"
                onChange={(e) => handleInfo(e)}
                placeholder="팀에 대한 소개를 적어주세요 (100자)"
              ></textarea>
            </div>
          </div>
        )}
        <RouterButton
          url="/founding/location"
          bigRound
          teamName={teamName}
          teamInfo={teamInfo}
          teamImageFile={file}
        >
          다음
        </RouterButton>
      </main>
    </>
  );
}
