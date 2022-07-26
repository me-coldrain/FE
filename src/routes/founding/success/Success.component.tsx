import React, { useEffect } from "react";
import Link from "next/link";
import RouterButton from "components/RouterButton";
import styles from "./Success.module.scss";

const { successBox, xBox, buttonLabel, successMsgBox, successMsg } = styles;

const shareKakao = () => {
  const { Kakao } = window;
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "90분",
      description: "누구나 쉽고, 재밌게 즐기는 축구 & 풋살",
      imageUrl: "/img/MainLogoColor.png",
      link: {
        mobileWebUrl: "https://www.dorandorans.com/",
        webUrl: "https://www.dorandorans.com/",
      },
    },
    buttons: [
      {
        title: "웹으로 이동",
        link: {
          mobileWebUrl: "https://www.dorandorans.com/",
        },
      },
    ],
  });
};

export default function success(): JSX.Element {
  useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  }, []);
  return (
    <>
      <main className={successBox}>
        <div className={xBox}>
          <Link href="/">
            <a>x</a>
          </Link>
        </div>
        <div className={successMsgBox}>
          <p className={successMsg}>팀이 생성되었습니다!</p>
          <p>팀 상세페이지에서 수정이 가능합니다.</p>
        </div>
        <div>
          <p className={buttonLabel}>
            팀원들을 초대해 함께 경기 일정을 공유해보세요!
          </p>
          <RouterButton
            share
            onClick={() => {
              shareKakao();
            }}
          >
            팀원들에게 공유하기
          </RouterButton>
        </div>
      </main>
    </>
  );
}
