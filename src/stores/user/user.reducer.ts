import { User, UserActions, UPDATE_USER } from "./user.actions";

type UserState = User;

const initialState: UserState = {
  nickname: "",
  teamImg: {},
  position: "",
  snsId: "",
  phone: 0,
};

export default (
  state: UserState = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case UPDATE_USER: {
      const {
        user: { nickname, teamImg, position, snsId, phone },
      } = action;

      return {
        nickname,
        teamImg,
        position,
        snsId,
        phone,
      };
    }

    default:
      return state;
  }
};
