import { GET_TECHS, TECH_ERROR } from "../types";

export const getTechs = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("/techs");
      const data = await res.json();

      dispatch({
        type: GET_TECHS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TECH_ERROR,
        payload: err.response.data,
      });
    }
  };
};
