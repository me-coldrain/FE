import React from "react";
import RouterButton from "components/RouterButton";
import Back from "components/back";
import Progressbar from "components/progressbar";

export default function contact(): JSX.Element {
  return (
    <>
      <main>
        <section>
          <Progressbar size="100%"></Progressbar>
          <Back></Back>
        </section>
        <section className="main">
          <div>
            <h3>개인 연락망</h3>
            <p>이메일 혹은 카톡 아이디를 필수로 기입해주세요.</p>
          </div>
          <div className="circleBox">
            <div className="circle">
              <label htmlFor="kakao">
                카톡
                <input id="kakao" type="radio" name="sns" value="kakao"></input>
              </label>
            </div>
            <div className="circle">
              <label htmlFor="email">
                이메일
                <input id="email" type="radio" name="sns" value="email"></input>
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="sns">
              SNS 아이디
              <input
                id="sns"
                placeholder="카카오톡 아이디를 적어주세요"
                type="text"
              ></input>
            </label>
          </div>
          <div>
            <h3>(선택) 휴대폰 번호 입력</h3>
            <p>팀원 모집 등에 사용될 예정입니다.</p>
          </div>
          <div>
            <label htmlFor="phone">
              핸드폰 번호
              <input id="phone" placeholder="01012345678" type="text"></input>
            </label>
          </div>
        </section>
        <RouterButton url="/" bigRound>
          입력완료
        </RouterButton>
        <style jsx>{`
          .main {
            display: flex;
            flex-direction: column;
          }
          .circleBox {
            display: flex;
          }
          .circle {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background-color: #fff;
            margin: 10px;
            cursor: pointer;
          }

          input[type="radio"] {
            position: absolute;
            opacity: 0;
          }
          input[type="text"] {
            max-width: 390px;
            width: 100%;
            border: none;
            border-bottom: 1px solid black;
            background-color: transparent;
            padding: 4px 0;
            font-size: 8px;
          }
        `}</style>
      </main>
    </>
  );
}
