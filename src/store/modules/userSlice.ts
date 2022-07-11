import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// `createAsyncThunk` 로 비동기액션함수를 만듦
export const loadMyInfo = createAsyncThunk(
  "GET/LOAD_MY_INFO_REQUEST",
  async () => {
    const response = await axios.get("/user/myInfo");
    return response.data;
  }
);

// initialState 의 기본 타입을 인터페이스로 지정해줌
interface UserState {
  myInfo: UserType | null;
  loading: boolean;
  error: object | null;
}

const initialState: UserState = {
  myInfo: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [loadMyInfo.pending.type]: (state, action) => {
      state.loading = true;
      state.myInfo = null;
    },
    [loadMyInfo.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.myInfo = action.payload;
    },
    [loadMyInfo.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
