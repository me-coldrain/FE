import React, { useState } from "react";
// style
import { injectClassNames } from "utils/css";

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
  const className = injectClassNames();

  return (
    <div className={className}>
      <label htmlFor={label}>{label}</label>
      <br />
      <input type={type} onFocus={handleInputFocus} onBlur={handleInputBlur} />
    </div>
  );
};
