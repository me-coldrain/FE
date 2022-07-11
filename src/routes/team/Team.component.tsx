import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "@components/button";
import styles from "./Team.module.scss";

const { profile, profileMain, detailHeader, detailContent, about } = styles;

export default function Team(): JSX.Element {
  const router = useRouter();
  const { teamId } = router.query;
  console.log("fetch with teamId", teamId);

  //state
  const [possible, setPossible] = useState<boolean>();
  const [recruitMember, setRecruitMember] = useState<boolean>();

  return (
    <>
      <main className={profile}>
        <div className={about}>
          <div className={detailHeader}>
            <h2>teamName</h2>
            <div>
              <Button
                length="short"
                handleClick={() => setPossible(!possible)}
                content={possible ? "경기 가능" : "경기 불가능"}
              />
              <Button
                length="short"
                handleClick={() => setRecruitMember(!recruitMember)}
                content={recruitMember ? "모집중" : "모집 완료"}
              />
            </div>
          </div>
          <p>
            ximus est vitae, semper erat. Pellentesque dictum in nunc eu
            porttitor. Integer vitae justo sit amet metus malesuada eleifend.
          </p>
        </div>
      </main>
    </>
  );
}
/**
 *
 * @ToDo fetch with team id
 * params: teamname,
 *
 */
