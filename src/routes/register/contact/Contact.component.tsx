import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getUser } from "stores/user";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";
import SelectButton from "components/buttonForSelect";
import Input from "components/Input";
import styles from "./Contact.module.scss";
import { makeRequest } from "services/makeRequest";
import { RegisterFooter } from "@components/footer";

const {
  main,
  circleBox,
  circle,
  active,
  circletag,
  input,
  inputBox,
  completeButton,
  disabledButton,
} = styles;

export default function contact(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();
  console.log(router);
  const [selectSNS, setSelectSNS] = useState("");
  const [sns, setSns] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<number>();

  const handleSns = (e: any) => {
    setSns(e.target.value);
  };
  const handlePhone = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (): any => {
    if (selectSNS === "email") {
      const idCheck = (sns: string): boolean => {
        const _reg =
          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

        return _reg.test(sns);
      };
      if (!idCheck(sns as string)) {
        alert("이메일 양식이 아닙니다.");
        return;
      }
    }

    if (!sns) {
      alert("카카오톡 아이디 혹은 이메일을 입력해주세요.");
      return;
    }

    const phoneNumberCheck = (phoneNumber: any): boolean => {
      const _reg = /^\d+$/;

      //정규식에는 string만 들어갈 수 있어 임시로 any 처리
      return _reg.test(phoneNumber);
    };

    if (phoneNumber && !phoneNumberCheck(phoneNumber as number)) {
      alert("숫자만 가능합니다.");
      return;
    }
    const nickname = router.query.nickname;
    const position = router.query.position;
    const userInfo = {
      nickname: nickname,
      position: position,
      contact: sns,
      phone: phoneNumber,
    };
    makeRequest({
      endpoint: "home/members/information",
      method: "PATCH",
      params: userInfo,
      auth: true,
    }).then(router.replace("/"));
  };

  return (
    <>
      <main>
        <section>
          <Progressbar size="100%"></Progressbar>
          <Back></Back>
        </section>
        <section className={main}>
          <div>
            <h3>개인 연락망</h3>
            <p>이메일 혹은 카톡 아이디를 필수로 기입해주세요.</p>
          </div>
          <div className={circleBox}>
            <SelectButton
              position
              onClick={() => setSelectSNS("kakao")}
              active={selectSNS === "kakao" ? true : false}
            >
              kakao
            </SelectButton>
            <SelectButton
              position
              onClick={() => setSelectSNS("email")}
              active={selectSNS === "email" ? true : false}
            >
              이메일
            </SelectButton>
          </div>
          {selectSNS !== "" ? (
            <div className={input}>
              <div className={inputBox}>
                <Input
                  id="sns"
                  placeholder={
                    selectSNS === "kakao"
                      ? "카카오톡 아이디를 적어주세요"
                      : "이메일을 적어주세요"
                  }
                  type="text"
                  value={sns || ""}
                  onChange={(e: any) => {
                    handleSns(e);
                  }}
                  label={
                    selectSNS === "kakao" ? "Kakao ID(필수)" : "E-mail(필수)"
                  }
                  signup
                ></Input>
              </div>
              <div className={inputBox}>
                <div>
                  <h3>(선택) 휴대폰 번호 입력</h3>
                  <p>팀 대결 성사시 사용될 예정입니다.</p>
                </div>
                <Input
                  id="phone"
                  placeholder="01012345678"
                  type="text"
                  value={phoneNumber || undefined}
                  onChange={(e: any) => {
                    handlePhone(e);
                  }}
                  signup
                ></Input>
              </div>
            </div>
          ) : null}
        </section>
        <div className={selectSNS !== "" ? completeButton : disabledButton}>
          <RegisterFooter
            handleClick={() => {
              handleSubmit();
            }}
            activeStyle
            content="입력완료"
          ></RegisterFooter>
        </div>
      </main>
    </>
  );
}
