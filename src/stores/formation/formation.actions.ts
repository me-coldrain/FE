// 액션
export const SET_FORMATION = "SET_FORMATION";

export type MemberToPlay = {
  memberId: number | null;
  position: "striker" | "defender" | "midfielder" | "goalkeeper";
  anonymous: boolean;
  nickName: string;
  memberProfileUrl?: string;
};

export interface SetTeamsFormation {
  type: typeof SET_FORMATION;
  formation: MemberToPlay[];
}

export type FetchTeamsFormation = SetTeamsFormation;

export const setFormation = (formation: MemberToPlay[]): SetTeamsFormation => ({
  type: SET_FORMATION,
  formation,
});
