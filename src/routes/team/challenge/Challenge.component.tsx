import SafeArea from "@components/safeArea";
import React from "react";

interface PageProps {
  teamId: string;
  teamName: string;
}

export default function Challenge(props: PageProps): JSX.Element {
  return (
    <main>
      <SafeArea />
      <h1>대결을 신청하는 팀의 리더에게 메세지를 보내주세요.</h1>
      <h5>작성한 답변은 팀리더에게만 공개됩니다.</h5>
    </main>
  );
}
