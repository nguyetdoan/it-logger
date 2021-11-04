import { GET_TECHS, TECH_ERROR } from "../types";

const initialState = {
  techs: null,
  error: null,
};

const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
      };

    case TECH_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default techReducer;
