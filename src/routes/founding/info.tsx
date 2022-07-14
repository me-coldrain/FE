import React, { useState } from "react";
import { useDispatch } from "react-redux";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";

export default function info(): JSX.Element {
  // const dispatch = useDispatch();
  const [previewURL, setPreviewURL] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamInfo, setTeamInfo] = useState("");

  const handleFile = (e: any): any => {
    e.preventDefault();
    const reader = new FileReader();
    const formData = new FormData();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    formData.append("photoFile", file);
    reader.readAsDataURL(file);
  };

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
        <label htmlFor="name">팀 이름을 적어주세요.</label>
        <input id="name" type="text" onChange={(e) => handleName(e)}></input>
        <p>팀 소개를 적어주세요.</p>
        {previewURL !== "" ? (
          <div className="container">
            <div className="image">
              <img src={previewURL}></img>
              <span
                className="close"
                onClick={() => {
                  setPreviewURL("");
                }}
              >
                x
              </span>
            </div>
            <div className="informationBox">
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
          <div className="container">
            <div className="filebox">
              <label htmlFor="ex_file">사진 추가</label>
              <input
                type="file"
                id="ex_file"
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                onChange={(e) => handleFile(e)}
              />
            </div>
            <div className="informationBox">
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
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
        }
        input[type="text"] {
          max-width: 390px;
          width: 100%;
          border: none;
          border-bottom: 1px solid black;
          background-color: transparent;
          padding: 4px 0;
          margin-bottom: 52px;
          font-size: 8px;
        }
        .filebox label {
          display: flex;
          max-height: 114px;
          width: 100%;
          height: 7rem;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #000;
          line-height: normal;
          vertical-align: middle;
          background-color: #dddbdb;
          cursor: pointer;
          border: 1px solid #ebebeb;
          border-bottom-color: #e2e2e2;
          border-radius: 0.25em;
        }

        .filebox input[type="file"] {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        .image {
          position: relative;
        }
        img {
          max-width: 350px;
          max-height: 114px;
          width: 100%;
          height: 7rem;
          object-fit: cover;
        }
        .close {
          position: absolute;
          top: 5px;
          right: 10px;
          cursor: pointer;
        }
        .informationBox {
          position: relative;
          margin-top: 1rem;
        }
        .informationBox label {
          position: absolute;
          top: 40%;
          left: 37%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #000;
        }
        .informationBox textarea {
          box-sizing: border-box;
          max-height: 222px;
          width: 100%;
          height: 14rem;
          padding: 1rem;
          overflow: auto;
          border: 0;
        }
      `}</style>
    </>
  );
}
