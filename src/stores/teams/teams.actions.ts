// 액션
export const SET_TEAMS = "SET_TEAMS";

type ITime = string[];
export interface Teams {
  createdDate: string;
  drawCount: number;
  headCount: number;
  loseCount: number;
  mainArea: string;
  match: boolean;
  modifiedDate: string;
  preferredArea: string;
  recruit: boolean;
  teamId: number;
  teamName: string;
  time: string[];
  totalGameCount: number;
  weekdays: string[];
  winCount: number;
  winRate: number;
}

export interface SetTeamsAction {
  type: typeof SET_TEAMS;
  teams: Teams[];
}
export type FetchTeamsActions = SetTeamsAction;

export const setTeams = (teams: Teams[]): SetTeamsAction => ({
  type: SET_TEAMS,
  teams,
});
