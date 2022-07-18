import React, { useState } from "react";
import Input from "components/Input";
import RouterButton from "components/RouterButton";
import Link from "next/link";

import { makeRequest } from "services/makeRequest";
import styles from "./Login.module.scss";

interface IInputs {
  email: string;
  password: string;
}

export default function User(): JSX.Element {
  const { user, inputBox, signup, kakao } = styles;
  const [inputs, setInputs] = useState<IInputs>({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const handleChange = (e: any): any => {
    const { id } = e.target;
    const { value } = e.target;
    setInputs((values: IInputs) => ({ ...values, [id]: value }));
    console.log(inputs);
  };

  const handleLogin = () => {
    const params = inputs;
    console.log(params);
    makeRequest({
      endpoint: "members/login",
      method: "POST",
      params,
      auth: false,
    });
  };

  return (
    <>
      <main className={user}>
        <section>
          <h1>로고</h1>
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
            <RouterButton bigSquareLogin onClick={handleLogin}>
              로그인
            </RouterButton>
          </div>
          <div className={signup}>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </div>
          <div className={kakao}>
            <p>SNS계정으로 간편 로그인</p>
            <a href="/">kakao</a>
          </div>
        </section>
      </main>
    </>
  );
}
