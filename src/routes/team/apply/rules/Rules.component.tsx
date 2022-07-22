import React, { useState } from "react";
//components
import Button, { CheckBox } from "@components/button";
import SafeArea from "@components/safeArea";
import styles from "./Rules.module.scss";
import router, { useRouter } from "next/router";

function Apply(): JSX.Element {
  const router = useRouter();
  const { teamId, teamName } = router.query;
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <main>
      <div>
        <h1>모두가 즐거운 경기를 할 수 있도록 꼭 지켜주세요!</h1>
      </div>
      <div>
        <h2>갑자기 취소는 금지</h2>
        <p>
          갑자기 취소하는 경우 팀원이 맞지 않아 경기진행이 어렵습니다.
          취소해야한다면 최소 3일전 상대팀에게 말씀해주세요.
        </p>
      </div>
      <div>
        <h2>서로 배려하기</h2>
        <p>
          서로 좋은 경기를 할 수 있도록 상대팀을 존중하는 태도를 지켜주세요.
        </p>
      </div>
      <SafeArea />
      <div style={{ marginBottom: "1rem" }}>
        <CheckBox
          checked={checked}
          content="확인했습니다."
          handleClick={() => {
            setChecked(!checked);
          }}
        />
      </div>
      <Button
        length="long"
        content="신청하기"
        color={checked ? true : false}
        handleClick={() => {
          router.push({
            pathname: `/team/${teamName}/apply/question`,
            query: { teamId: teamId },
          });
        }}
      />
    </main>
  );
}

export default Apply;

/**
 *
 * @ToDo can be static page
 */
