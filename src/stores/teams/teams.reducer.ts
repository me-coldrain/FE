import { SET_TEAMS, Teams, FetchTeamsActions } from "./teams.actions";

type TeamsState = Teams[];

const initialState: TeamsState = [];

export default (
  state: TeamsState = initialState,
  action: FetchTeamsActions
): TeamsState => {
  switch (action.type) {
    case SET_TEAMS: {
      const { teams: payload } = action;

      return payload;
    }

    default:
      return state;
  }
};
