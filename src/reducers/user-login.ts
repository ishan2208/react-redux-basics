import { USER_LOGIN } from '../actions/user-login'

const initialState = {
    isUserLoggedIn: false,
    jwtToken: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        jwtToken: action.payload.token,
        isUserLoggedIn: action.payload.token ? true : false,
      };
    default:
      return state;
    }
}