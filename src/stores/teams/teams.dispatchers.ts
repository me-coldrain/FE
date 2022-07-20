import { AppThunk } from "stores";
import { setTeams } from "./teams.actions";

export const setTeamsHome =
  (teams: any): AppThunk =>
  async (dispatch) => {
    dispatch(setTeams(teams));
  };
