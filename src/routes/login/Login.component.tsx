import React, { useState } from "react";
// hooks
import Link from "next/link";
import router from "next/router";
import { makeRequest } from "services/makeRequest";
// components
import Input from "components/Input";
import RouterButton from "components/RouterButton";
import { RegisterFooter } from "@components/footer";
// scss
import styles from "./Login.module.scss";

interface IInputs {
  email: string;
  password: string;
}

export default function User(): JSX.Element {
  const {
    logo,
    user,
    inputBox,
    signup,
    kakao,
    buttonBox,
    kakaoBox,
    container,
  } = styles;
  const [inputs, setInputs] = useState<IInputs>({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const handleChange = (e: any): any => {
    const { id } = e.target;
    const { value } = e.target;
    setInputs((values: IInputs) => ({ ...values, [id]: value }));
  };

  const handleLogin = () => {
    const params = inputs;
    makeRequest({
      endpoint: "members/login",
      method: "POST",
      params,
      auth: false,
    }).then((res: any) => {
      if (res !== undefined) {
        if (res?.first) {
          router.replace("/register/nickname");
        } else {
          router.replace("/");
        }
      } else {
        window.alert("아이디 혹은 비밀번호를 다시 입력해주세요.");
      }
    });
  };

  return (
    <>
      <main className={user}>
        <section>
          <div className={container}>
            <div className={logo}></div>
            <div className={inputBox}>
              <Input
                id="email"
                type="id"
                placeholder="아이디"
                onChange={handleChange}
                value={email || ""}
                normal
              ></Input>
              <Input
                id="password"
                type="password"
                placeholder="비밀번호"
                onChange={handleChange}
                value={password || ""}
                normal
              ></Input>
              <div className={buttonBox}>
                <RegisterFooter
                  content="로그인"
                  activeStyle
                  handleClick={handleLogin}
                ></RegisterFooter>
              </div>
            </div>
            <div className={signup}>
              <Link href="/signup">
                <a>회원가입</a>
              </Link>
            </div>
          </div>
          <div className={kakao}>
            <p>SNS계정으로 간편 로그인</p>
            <a href="https://kauth.kakao.com/oauth/authorize?client_id=3c2e867a60400604cd64199c1ec0227a&redirect_uri=https://ninety.site/kakao&response_type=code">
              <div className={kakaoBox}>
                <RegisterFooter
                  content="KAKAO"
                  activeStyle
                  handleClick={() => {
                    // window.alert("커밍쑨! 기능이 준비중입니다.");
                  }}
                ></RegisterFooter>
              </div>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
