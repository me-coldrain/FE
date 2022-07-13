import React, { useState } from "react";
import { useDispatch } from "react-redux";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";

export default function nickname(): JSX.Element {
  // const dispatch = useDispatch();
  const [previewURL, setPreviewURL] = useState("");
  const [nickname, setNickname] = useState();

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
    setNickname(e.target.value);
  };

  return (
    <>
      <main>
        <section>
          <Progressbar size="33%"></Progressbar>
          <Back></Back>
        </section>
        <h3>닉네임</h3>
        <input
          type="text"
          placeholder="사용하실 닉네임을 적어주세요"
          onChange={(e) => handleName(e)}
        ></input>
        <h3>프로필 사진을 지정해주세요.</h3>
        {previewURL !== "" ? (
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
        ) : (
          <div className="filebox">
            <label htmlFor="ex_file">+</label>
            <input
              type="file"
              id="ex_file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              onChange={(e) => handleFile(e)}
            />
          </div>
        )}
        <RouterButton url="/register/position" bigRound nickname={nickname}>
          다음
        </RouterButton>
      </main>
      <style jsx>{`
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
          width: 170px;
          height: 170px;
          align-items: center;
          justify-content: center;
          font-size: 30px;
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
          width: 170px;
          height: 170px;
          object-fit: cover;
        }
        .close {
          position: absolute;
          top: 5px;
          left: 155px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
