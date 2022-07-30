import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "./Date.module.scss";
import Icon from "@components/icon";

//mui style

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { RegisterFooter } from "@components/footer";

const { dateContainer, dateContainerIcon } = styles;

type IProps = {
  query: {
    applyTeamId: number;
    applyId: number;
  };
};

export default function Date({ query }: IProps): JSX.Element {
  const router = useRouter();

  // state
  //   const [time, setTime] = useState<>();

  const [value, setValue] = React.useState<Date | null>(null);

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };
  return (
    <main>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>언제 경기하시나요?</h1>
        <h5>경기 일정을 저장해야 경기 후 기록이 가능합니다.</h5>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          sx={{ flexGrow: 1, border: 1, marginBottom: "auto" }}
        >
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="Time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
        <RegisterFooter
          content="다음"
          activeStyle={true}
          handleClick={() =>
            router.push({
              pathname: `/team/challenges/place`,
              query: { ...query, date: value?.toString() as string },
            })
          }
          style={{ marginTop: "auto", border: "1px solid" }}
        />
      </div>
    </main>
  );
}
