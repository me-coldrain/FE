import React from "react";

type IProps = {
  color?: string;
};

export default function ({ color }: IProps): JSX.Element {
  return <div style={{ margin: "8rem", background: color }} />;
}
