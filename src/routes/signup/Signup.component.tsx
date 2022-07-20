import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { usePageDetails } from "hooks/page";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";
import Input from "components/Input";

import { makeRequest } from "services/makeRequest";
import styles from "./signup.module.scss";

interface IInputs {
  email: string;
  password: string;
  confirmpassword: string;
}

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

export default function User(): JSX.Element {
  const router = useRouter();
  const { user, inputBox } = styles;
  const { title = "", description = "" } = usePageDetails();
  const [inputs, setInputs] = useState<IInputs>({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { email, password, confirmpassword } = inputs;

  const handleChange = (e: any): any => {
    const { id } = e.target;
    const { value } = e.target;
    setInputs((values: IInputs) => ({ ...values, [id]: value }));
    console.log(inputs);
  };

  const handleSubmit = (): any => {
    const idCheck = (email: string): boolean => {
      const _reg =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

      return _reg.test(email);
    };

    const pwdCheck = (password: string): boolean => {
      const _reg = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,20}$/;

      return _reg.test(password);
    };

    if (!email || !password) {
      alert("빈값이 있습니다.");
      return;
    }

    if (password !== confirmpassword) {
      alert("비밀번호와 비밀번호확인 값이 다릅니다.");
      return;
    }

    if (!idCheck(email)) {
      alert("아이디는 이메일 양식으로 작성해주세요!");
      return;
    }

    if (!pwdCheck(password)) {
      alert(
        "비밀번호는 최소 1개의 영문 대소문자+숫자+특수문자를 포함하여 8~20자리이어야 합니다."
      );
      return;
    }
    const params = inputs;
    console.log(params);
    makeRequest({
      endpoint: "members/signup",
      method: "POST",
      params,
      auth: false,
    });
    // 회원가입 성공 후 넘어갈 수 있도록 해야함, 추후 삭제해야하는 코드
    router.push("/login");
  };

  return (
    <>
      <Head>
        {addTitleTags(title)}
        {addDescriptionTag(description)}
        <meta name="robots" content="INDEX,FOLLOW" />
      </Head>
      <main className={user}>
        <section>
          <Progressbar size="100%"></Progressbar>
          <Back></Back>
          <h2>회원가입</h2>
        </section>
        <section>
          <div>
            <Input
              id="email"
              onChange={handleChange}
              value={email || ""}
              label="아이디"
              signup
            ></Input>
            <Input
              id="password"
              type="password"
              onChange={handleChange}
              value={password || ""}
              label="비밀번호"
              signup
            ></Input>
            <Input
              id="confirmpassword"
              type="password"
              onChange={handleChange}
              value={confirmpassword || ""}
              label="비밀번호 재확인"
              signup
            ></Input>
          </div>
          <RouterButton onClick={handleSubmit}>완료</RouterButton>
        </section>
      </main>
    </>
  );
}
