// 액션
export const SET_TEAMS = "SET_TEAMS";

export interface Teams {
  id: number;
  name: string;
  winRate: number;
  games: number;
  win: number;
  draw: number;
  lose: number;
  location: string;
  where: boolean;
  weekday: string[];
  time: string;
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
