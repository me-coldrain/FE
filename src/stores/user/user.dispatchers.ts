import { AppThunk } from "stores";
import { executeGet } from "utils/request";
import { updateUser } from "./user.actions";

// export const signup = (inputs: object): AppThunk => (

// );

export const getUser =
  (userInfo: any): AppThunk =>
  async (dispatch) => {
    // const user = await executeGet(`https://api.github.com/users/${username}`);
    dispatch(updateUser(userInfo));
  };

export const setUser =
  (userInfo: any): AppThunk =>
  async (dispatch) => {
    dispatch(updateUser(userInfo));
  };
