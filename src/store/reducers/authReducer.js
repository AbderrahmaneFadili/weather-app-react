import {
  SIGN_UP_ERROR,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
} from "../types/authTypes";

const initialState = {
  errorMessage: "",
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        errorMessage: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        errorMessage: null,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        errorMessage: payload.message,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        errorMessage: payload.message,
      };
    default:
      return state;
  }
};

export default authReducer;
