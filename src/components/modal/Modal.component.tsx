import Button, { CheckBox } from "@components/button";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: string | JSX.Element | JSX.Element[];
  title: string | JSX.Element;
  verify?: boolean;
  verifyContent?: string;
  checked?: boolean;
  setChecked?: (checked: boolean) => void;
  handleVerified?: () => void;
};

type VerifyModal = {
  show: boolean;
  onClose: () => void;
  children: string | JSX.Element | JSX.Element[];
  title: string | JSX.Element;
  verify?: boolean;
  verifyContent?: string;
  checked?: boolean;
  setChecked?: React.Dispatch<React.SetStateAction<boolean>>;
  handleVerified?: () => void;
};

const Modal = ({ show, onClose, children, title }: ModalProps): JSX.Element => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    const portalDiv = document.getElementById("modal-element")!;
    return ReactDOM.createPortal(modalContent, portalDiv);
  } else {
    return <></>;
  }
};

export const CenterModal = ({
  show,
  onClose,
  children,
  title,
  verify = false,
  checked = false,
  setChecked,
  verifyContent = "확인했습니다.",
  handleVerified = () => console.log("clicked"),
}: VerifyModal): JSX.Element => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledCenterModalBody>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        <StyledCenterBody>
          {title && (
            <StyledModalTitle>
              <h1>{title}</h1>
              <StyledModalContent>{children}</StyledModalContent>
            </StyledModalTitle>
          )}
          {/* <StyledModalBody>{children}</StyledModalBody> */}
        </StyledCenterBody>
        {verify && (
          <StyleVerifyContent>
            <div style={{ marginBottom: "1rem" }}>
              <CheckBox
                checked={checked}
                content={verifyContent}
                handleClick={setChecked}
              />
            </div>
            <Button
              length="long"
              content="신청하기"
              color={checked ? true : false}
              handleClick={handleVerified}
            />
          </StyleVerifyContent>
        )}
      </StyledCenterModalBody>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    const portalDiv = document.getElementById("modal-element")!;
    return ReactDOM.createPortal(modalContent, portalDiv);
  } else {
    return <></>;
  }
};

const StyledModalContent = styled.div`
  display: flex;
  overflow: clip;
  flex-wrap: wrap;
`;

const StyleVerifyContent = styled.div``;

const StyledModalBody = styled.div`
  padding-top: 10px;
  width: 400px;
`;

const StyledModalTitle = styled.div`
  text-align: center;
  font-size: 33px;
  font-weight: 700;
`;

const StyledCenterBody = styled.div`
  display: flex;
  height: 600px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

/**
 * @ToDo style modal size
 */
const StyledCenterModalBody = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 80%;
  min-width: 360px;
  height: 50%;
  border-radius: 15px;
  padding: 15px;
  h1 {
    font-size: 24px;
    color: #2f4eb4;
  }
  p {
    color: #a3a3a3;
  }
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  width: 80vw;
  height: 80vh;
  border-radius: 15px;
  padding: 15px;
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export default Modal;

/**
 *
 * @TypeError
 */
