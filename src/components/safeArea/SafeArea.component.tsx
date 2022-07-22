import React from "react";

type IProps = {
  color?: string;
};

export default function ({ color }: IProps): JSX.Element {
  return <div style={{ margin: "6rem", background: color }} />;
}
