import React, { memo, useState } from "react";
import { Schema } from "stores/pages";
import { useSchema, usePageId } from "hooks/page";
import Link from "next/link";
// style
import styled from "styled-components";
import { injectClassNames } from "utils/css";
import styles from "./Icon.module.scss";

type InputItemProps = {
  label: string;
  type: string;
  activeClass?: string;
};

export const Input = (props: InputItemProps): JSX.Element => {
  const { label, type, activeClass = "" } = props;
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const handleInputFocus = () => {
    setIsFocus(true);
  };
  const handleInputBlur = () => {
    setIsFocus(false);
  };
  const className = injectClassNames([activeClass, isFocus]);

  return (
    <InputBox className={className}>
      <label htmlFor={label}>{label}</label>
      <br />
      <input type={type} onFocus={handleInputFocus} onBlur={handleInputBlur} />
    </InputBox>
  );
};

const InputBox = styled.div``;
