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
      imageUrl:
        "https://nasal-peony-253.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa7f6ea46-7362-434a-b493-9943f6181104%2FKakaoTalk_20220726_164634430.png?table=block&id=64b09693-ce5f-45bc-8b3a-14f13f579120&spaceId=b6a4d667-ebe0-4c26-8a4d-3f9c44e19612&width=250&userId=&cache=v2",
      link: {
        mobileWebUrl: "https://www.ninety.site/",
        webUrl: "https://www.ninety.site/",
      },
    },
    buttons: [
      {
        title: "웹으로 이동",
        link: {
          mobileWebUrl: "https://www.ninety.site/",
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
