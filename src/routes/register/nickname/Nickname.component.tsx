import React, { useState } from "react";
import { handleFile } from "@hooks/events";
import router from "next/router";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";
import Input from "@components/Input";
import { makeRequest } from "services/makeRequest";
import { RegisterFooter } from "@components/footer";
import styles from "./Nickname.module.scss";

const { filebox, image, close, container, profileBox } = styles;

export default function nickname(): JSX.Element {
  const [file, setFile] = useState({});
  const [previewURL, setPreviewURL] = useState("");
  const [nickname, setNickname] = useState<string>();

  const handleName = (e: any) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (): any => {
    const nicknameCheck = (nickname: string): boolean => {
      const _reg = /^[가-힣a-zA-Z0-9]{2,8}$/;

      return _reg.test(nickname as string);
    };

    if (!nicknameCheck(nickname as string)) {
      alert("영어,한글을 포함해 2~8자리이어야 합니다");
      return;
    }
    makeRequest({
      endpoint: "home/members/information/profileimage",
      method: "PATCH",
      params: file,
      auth: true,
      isFile: true,
    }).then((res: any) => {
      res.status === 200
        ? router.push(
            {
              pathname: "/register/position",
              query: {
                nickname: nickname,
              },
            },
            "/register/position"
          )
        : window.alert(
            "이미지 등록에 실패했습니다. 잠시 후 다시 시도해주세요."
          );
    });
  };

  return (
    <>
      <main className={container}>
        <section>
          <Progressbar size="33%"></Progressbar>
          <Back></Back>
        </section>
        <h2>프로필을 작성해주세요</h2>
        <Input
          type="text"
          placeholder="최대 12글자까지 가능합니다"
          onChange={(e: any) => handleName(e)}
          label="닉네임(필수)"
          signup
          value={nickname || ""}
        ></Input>
        <div className={profileBox}>
          <h3>프로필</h3>
          {previewURL !== "" ? (
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
          ) : (
            <div className={filebox}>
              <label htmlFor="ex_file">+</label>
              <input
                type="file"
                id="ex_file"
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                onChange={(e) =>
                  handleFile(e, setPreviewURL).then((res: any) => {
                    const formData = new FormData();
                    formData.append("profileImageFile", res);
                    setFile(formData);
                  })
                }
              />
            </div>
          )}
        </div>
        {/* <RouterButton
          url="/register/position"
          bigRound
          nickname={nickname}
          onClick={() => {
            handleSubmit();
          }}
        >
          다음
        </RouterButton> */}
        <RegisterFooter
          content="다음"
          activeStyle={true}
          handleClick={() => {
            handleSubmit();
          }}
        ></RegisterFooter>
      </main>
    </>
  );
}
