import { SET_TEAMS, Teams, FetchTeamsActions } from "./teams.actions";

type TeamsState = Teams[];

const initialState: TeamsState = [
  {
    id: 0,
    name: "서울 FC",
    winRate: 40,
    games: 10,
    win: 5,
    draw: 2,
    lose: 3,
    location: "서울특별시",
    where: true,
    weekday: ["월", "화"],
    time: "오전",
  },
  {
    id: 1,
    name: "서울 FC",
    winRate: 40,
    games: 10,
    win: 5,
    draw: 2,
    lose: 3,
    location: "서울특별시",
    where: true,
    weekday: ["월", "화"],
    time: "오전",
  },
  {
    id: 2,
    name: "서울 FC",
    winRate: 40,
    games: 10,
    win: 5,
    draw: 2,
    lose: 3,
    location: "서울특별시",
    where: true,
    weekday: ["월", "화"],
    time: "오전",
  },
  {
    id: 2,
    name: "서울 FC",
    winRate: 40,
    games: 10,
    win: 5,
    draw: 2,
    lose: 3,
    location: "서울특별시",
    where: true,
    weekday: ["월", "화"],
    time: "오전",
  },
  {
    id: 2,
    name: "서울 FC",
    winRate: 40,
    games: 10,
    win: 5,
    draw: 2,
    lose: 3,
    location: "서울특별시",
    where: true,
    weekday: ["월", "화"],
    time: "오전",
  },
];

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
