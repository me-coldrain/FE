import {
  SET_FORMATION,
  MemberToPlay,
  FetchTeamsFormation,
} from "./formation.actions";

type FormationState = MemberToPlay[];

const initialState: FormationState = [];

export default (
  state: FormationState = initialState,
  action: FetchTeamsFormation
): FormationState => {
  switch (action.type) {
    case SET_FORMATION: {
      const { formation: payload } = action;
      return payload;
    }

    default:
      return state;
  }
};
