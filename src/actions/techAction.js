import {
  GET_TECHS,
  TECH_ERROR,
  SET_LOADING,
  ADD_TECH,
  DELETE_TECH,
} from "../types";

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

export const deleteTech = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`/techs/${id}`, {
        method: "DELETE",
      });

      dispatch({
        type: DELETE_TECH,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: TECH_ERROR,
        payload: err.response.data,
      });
    }
  };
};

export const addTech = (tech) => {
  return async (dispatch) => {
    try {
      setLoading();

      const res = await fetch("/techs", {
        method: "POST",
        body: JSON.stringify(tech),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      dispatch({
        type: ADD_TECH,
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

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
