import { AppThunk } from "stores";
import { executeGet } from "utils/request";
import { setTeams } from "./teams.actions";

export const setTeamsHome =
  (teams: any): AppThunk =>
  async (dispatch) => {
    dispatch(setTeams(teams));
  };
