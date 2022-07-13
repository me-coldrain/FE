// 액션
export const UPDATE_USER = "UPDATE_USER";

export interface User {
  nickname: string | null;
  teamImg: any;
  position: string | null;
  snsId: string | null;
  phone: number | null;
}

export interface UpdateUserAction {
  type: typeof UPDATE_USER;
  user: User;
}
export type UserActions = UpdateUserAction;

export const updateUser = (user: User): UpdateUserAction => ({
  type: UPDATE_USER,
  user,
});
