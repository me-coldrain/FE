import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";
import { usePageDetails } from "hooks/page";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";
import Input from "components/Input";
import styles from "./signup.module.scss";

interface IInputs {
  email: string;
  pwd: string;
  pwdChk: string;
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
  // const dispatch = useDispatch();
  const { user, inputBox } = styles;
  const { title = "", description = "" } = usePageDetails();
  const [inputs, setInputs] = useState<IInputs>({
    email: "",
    pwd: "",
    pwdChk: "",
  });
  const { email, pwd, pwdChk } = inputs;

  const handleChange = (e: any): any => {
    const { id } = e.target;
    const { value } = e.target;
    setInputs((values: IInputs) => ({ ...values, [id]: value }));
  };

  const handleSubmit = (): any => {
    const idCheck = (email: string): boolean => {
      const _reg =
        // 임시, 바꿔야 함
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

      return _reg.test(email);
    };

    const pwdCheck = (pwd: string): boolean => {
      //임시, 바꿔야함
      const _reg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/;

      return _reg.test(pwd);
    };

    if (!email || !pwd) {
      alert("빈값이 있습니다.");
      return;
    }

    if (pwd !== pwdChk) {
      alert("비밀번호와 비밀번호확인 값이 다릅니다.");
      return;
    }

    if (!idCheck(email)) {
      alert("아이디는 이메일 양식으로 작성해주세요!");
      return;
    }

    if (!pwdCheck(pwd)) {
      alert(
        "비밀번호는 8~20 영문 대소문자, 최소 1개의 숫자 혹은 특수 문자를 포함해야합니다."
      );
      return;
    }

    // dispatch(userActions.signUpDB(inputs));
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
              id="pwd"
              type="password"
              onChange={handleChange}
              value={pwd || ""}
              label="비밀번호"
              signup
            ></Input>
            <Input
              id="pwdChk"
              type="password"
              onChange={handleChange}
              value={pwdChk || ""}
              label="비밀번호 재확인"
              signup
            ></Input>
          </div>
          <RouterButton onClick={handleSubmit} bgc="#4B72F1">
            완료
          </RouterButton>
        </section>
      </main>
    </>
  );
}
