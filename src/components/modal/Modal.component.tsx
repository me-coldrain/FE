import Button from "@components/button";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: string | JSX.Element;
  title: string | JSX.Element;
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
}: ModalProps): JSX.Element => {
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
              <p>{children}</p>
            </StyledModalTitle>
          )}
          {/* <StyledModalBody>{children}</StyledModalBody> */}
        </StyledCenterBody>
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

const StyledModalBody = styled.div`
  padding-top: 10px;
  width: 400px;
`;

const StyledModalTitle = styled.p`
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
