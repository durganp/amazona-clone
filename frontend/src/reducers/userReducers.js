import {
  USER_SIGHIN_FAIL,
  USER_SIGHIN_REQUEST,
  USER_SIGHIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/userConstant";

export const userSighinReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGHIN_REQUEST:
      return { loading: true };
    case USER_SIGHIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_SIGHIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};
