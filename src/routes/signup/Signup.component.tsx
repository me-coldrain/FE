import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { usePageDetails } from "hooks/page";
import { makeRequest } from "services/makeRequest";
import Input from "components/Input";
import { RegisterFooter } from "@components/footer";

import styles from "./Signup.module.scss";

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
  const { user, ButtonBox } = styles;
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
    }).then((res: any) => {
      console.log(res);
      if (res?.status === 200) {
        window.alert("회원가입이 완료되었습니다."), router.replace("/login");
      } else {
        window.alert("회원가입에 실패하였습니다. 잠시후 다시 시도해주세요.");
      }
    });
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
          <h2>회원가입</h2>
        </section>
        <section>
          <div>
            <Input
              id="email"
              onChange={handleChange}
              value={email || ""}
              label="아이디"
              placeholder="admin@gmail.com"
              signup
            ></Input>
            <Input
              id="password"
              type="password"
              onChange={handleChange}
              value={password || ""}
              label="비밀번호"
              placeholder="영문 대소문자+숫자+특수문자 포함 8~20자리"
              signup
            ></Input>
            <Input
              id="confirmpassword"
              type="password"
              onChange={handleChange}
              value={confirmpassword || ""}
              label="비밀번호 재확인"
              placeholder="비밀번호를 다시 한번 입력해주세요."
              signup
            ></Input>
          </div>
          <div className={ButtonBox}>
            <RegisterFooter
              content="회원가입"
              activeStyle
              handleClick={handleSubmit}
            ></RegisterFooter>
          </div>
        </section>
      </main>
    </>
  );
}
