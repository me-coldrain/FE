import { AppThunk } from "stores";
import { setFormation } from "./formation.actions";

export const setFormationForMatch =
  (formation: any): AppThunk =>
  async (dispatch) => {
    dispatch(setFormation(formation));
  };
