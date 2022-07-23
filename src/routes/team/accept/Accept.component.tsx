import Button from "@components/button";
import Image from "@components/image";
import Modal, { CenterModal } from "@components/modal";
import SafeArea from "@components/safeArea";
import Head from "next/head";
import router, { useRouter } from "next/router";
import React, { useState } from "react";
import { makeRequest } from "services/makeRequest";
import styles from "./Accept.module.scss";

type IMember = {
  memberId: number;
  profileImageUrl: string;
  nickName: string;
  mvpPoint: number;
  position: string;
  strikerPoint: number;
  midfielderPoint: number;
  defenderPoint: number;
  goalkeeperPoint: number;
  answer: string;
};

type IAccept = {
  data: {
    question: string;
    offeredMembers: IMember[];
  };
};

const {
  question,
  questionBox,
  proposal,
  proposalMember,
  proposalImage,
  proposalContent,
  proposalAnswer,
} = styles;

export default function Accept({ data }: IAccept): JSX.Element {
  const router = useRouter();
  const { teamId, teamName } = router.query;

  const [checked, setChecked] = useState<boolean>(false);
  const [refuseMemberId, setRefuseMemberId] = useState<number>(0);
  const [acceptModalOpen, setAcceptModalOpen] = useState<boolean>(false);
  const [refuseModalOpen, setRefuseModalOpen] = useState<boolean>(false);

  const onAccept = async (memberId: number) => {
    await makeRequest({
      endpoint: `teams/${teamId}/members/${memberId}/offer`,
      method: "PATCH",
      auth: true,
    }).then(() => setAcceptModalOpen(true));
  };

  const onRefuse = (memberId: number) => {
    setRefuseMemberId(memberId);
    setRefuseModalOpen(true);
  };

  const refuseMember = async () => {
    await makeRequest({
      endpoint: `teams/${teamId}/members/${refuseMemberId}/offer`,
      method: "DELETE",
      auth: true,
    }).then(() => setRefuseModalOpen(false));
  };

  const onModalClose = () => {
    router.push({
      pathname: `/team/[teamName]`,
      query: { teamId: teamId, teamName: teamName },
    });
  };

  const onRefuseModalClose = () => {
    setRefuseModalOpen(false);
  };

  const OfferedMember = ({
    memberId,
    profileImageUrl,
    nickName,
    mvpPoint,
    position,
    strikerPoint,
    midfielderPoint,
    defenderPoint,
    goalkeeperPoint,
    answer,
  }: IMember): JSX.Element => {
    return (
      <div className={proposalMember}>
        <div className={proposalContent}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Image
              src={
                profileImageUrl
                  ? profileImageUrl
                  : "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
              }
              className={proposalImage}
            />
            <p>{nickName}</p>
          </div>
          <div>
            <Button
              handleClick={() => onRefuse(memberId)}
              content="거부"
              length="short"
            />
            <Button
              handleClick={() => onAccept(memberId)}
              content="수락"
              length="short"
              color={true}
            />
          </div>
        </div>
        <div className={proposalAnswer}>{answer}</div>
      </div>
    );
  };

  return (
    <>
      <CenterModal
        show={acceptModalOpen}
        onClose={onModalClose}
        title={"팀원이 추가되었습니다."}
      >
        멤버소개에서 확인하실 수 있습니다.
      </CenterModal>
      <CenterModal
        show={refuseModalOpen}
        onClose={onRefuseModalClose}
        title={"팀원을 거절하시겠습니까?"}
        verify={true}
        verifyContent={"팀원 거절 시 다시 되돌릴 수 없습니다."}
        checked={checked}
        setChecked={setChecked}
        handleVerified={() => refuseMember()}
      >
        멤버소개에서 확인하실 수 있습니다.
      </CenterModal>
      <div className={question}>
        <SafeArea />
        <p>Q. 사전 질문</p>
        <div className={questionBox}>
          <p>{data?.question}</p>
        </div>
      </div>
      <div className={proposal}>
        {data?.offeredMembers?.map((member, index) => (
          <OfferedMember key={`offered-member-${index}`} {...member} />
        ))}
      </div>
    </>
  );
}
