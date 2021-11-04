import {
  GET_TECHS,
  TECH_ERROR,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
} from "../types";

const initialState = {
  techs: null,
  error: null,
  loading: false,
};

const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };

    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };

    case TECH_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default techReducer;
