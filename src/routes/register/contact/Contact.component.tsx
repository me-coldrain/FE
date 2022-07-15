import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getUser } from "stores/user";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";
import styles from "./Contact.module.scss";

const { main, circleBox, circle, active, circletag, input } = styles;

export default function contact(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();
  console.log(router);
  const [selectSNS, setSelectSNS] = useState("kakao");
  const [sns, setSns] = useState();
  const [phoneNumber, setPhoneNumber] = useState<number>();

  const handleSns = (e: any) => {
    setSns(e.target.value);
  };
  const handlePhone = (e: any) => {
    setPhoneNumber(e.target.value);
  };
  const handleState = () => {
    const nickname = router.query.nickname;
    const position = router.query.position;
    const userInfo = {
      nickname: nickname,
      position: position,
      snsId: sns,
      phone: phoneNumber,
    };
    dispatch<any>(getUser(userInfo));
  };

  const handleSubmit = (): any => {
    const phoneNumberCheck = (phoneNumber: any): boolean => {
      const _reg = /^\d+$/;

      //정규식에는 string만 들어갈 수 있어 임시로 any 처리
      return _reg.test(phoneNumber);
    };

    if (!phoneNumberCheck(phoneNumber as number)) {
      alert("숫자만 가능합니다.");
      return;
    }
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
            <div
              className={selectSNS === "kakao" ? active : circle}
              onClick={() => {
                setSelectSNS("kakao");
              }}
            >
              카톡
            </div>
            <div
              className={selectSNS === "email" ? active : circle}
              onClick={() => {
                setSelectSNS("email");
              }}
            >
              이메일
            </div>
          </div>
          <div className={input}>
            <label htmlFor="sns">SNS 아이디</label>
            <input
              id="sns"
              placeholder={
                selectSNS === "kakao"
                  ? "카카오톡 아이디를 적어주세요"
                  : "이메일을 적어주세요"
              }
              type="text"
              onChange={(e) => {
                handleSns(e);
              }}
            ></input>
          </div>
          <div>
            <h3>(선택) 휴대폰 번호 입력</h3>
            <p>팀원 모집 등에 사용될 예정입니다.</p>
          </div>
          <div className={input}>
            <label htmlFor="phone">핸드폰 번호</label>
            <input
              id="phone"
              placeholder="01012345678"
              type="text"
              onChange={(e) => {
                handlePhone(e);
              }}
            ></input>
          </div>
        </section>
        <RouterButton
          // url="/"
          bigRound
          onClick={() => {
            handleState();
            handleSubmit();
          }}
        >
          입력완료
        </RouterButton>
      </main>
    </>
  );
}
